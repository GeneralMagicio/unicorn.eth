'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { Button, Input, Typography } from '@ensdomains/thorin'
import { GoogleIcon } from '@/components/Icons/Google'
import { ArrowLeft } from '@/components/Icons/ArrowLeft'
import { SigningInPage } from '@/components/SigningInPage'
import { Copy } from '@/components/Icons/Copy'
import { useTheme } from 'styled-components'
import { SignUpButton } from '@/components/SignUp/inde'
import { useRouter } from 'next/navigation'
import { useAtom } from 'jotai'
import {
  isAuthenticatedAtom,
  safeAuthPackAtom,
  safeAuthSignInInfoAtom,
  userInfoAtom,
} from '@/store/atoms'
import { nsService } from '@/services/enService'
import { debounce } from '@/utils/debounce'
import { useSafeAuth } from '@/hooks/useSafeAuth'

export default function Login() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [userName, setUserName] = useState('')
  const [isSigning, setIsSigning] = useState(false)
  const [IsNameAvailable, setIsNameAvailable] = useState<boolean | null>(null)
  const {
    safeAuthPack,
    isAuthenticated,
    setIsAuthenticated,
    setUserInfo,
    userInfo,
    setSafeAuthSignInInfo,
  } = useSafeAuth()

  useEffect(() => {
    if (!safeAuthPack || !isAuthenticated) return
    ;(async () => {
      const userInfo = (await safeAuthPack.getUserInfo()) || {}
      if (Object.keys(userInfo).length) {
        setUserInfo(userInfo)
        setStep(1)
      }
    })()
  }, [isAuthenticated, safeAuthPack, setUserInfo])

  const login = async () => {
    setIsSigning(true)
    try {
      const signInInfo = (await safeAuthPack?.signIn()) || null
      setSafeAuthSignInInfo(signInInfo)
      setIsAuthenticated(true)
    } catch (err) {
    } finally {
      setIsSigning(false)
    }
  }

  console.log({ isAuthenticated })

  const logout = async () => {
    if (isAuthenticated) {
      await safeAuthPack?.signOut()
      setSafeAuthSignInInfo(null)
      setIsAuthenticated(false)
      setUserInfo(null)
    }
    setStep(0)
  }

  const checkUserName = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      await nsService.getIsNameAvailable(e.target.value)
      setIsNameAvailable(true)
    } catch (err) {
      setIsNameAvailable(false)
    }
  }
  const debouncedCheckUserName = useCallback(debounce(checkUserName, 300), [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {isSigning && <SigningInPage />}
      <div className="fixed h-screen w-screen">
        <div className="relative mb-28 flex h-2/3 w-full">
          {isAuthenticated && userInfo && (
            <ArrowLeft
              className="absolute left-5 top-10 z-10"
              onClick={logout}
            />
          )}
          <Image src="/img/background-image.png" alt="Unicorn" fill />
        </div>
        <div className="absolute inset-x-0 bottom-0 min-h-[40%] rounded-t-[32px] border-b bg-white px-4 py-12">
          <div className="flex flex-col gap-10">
            <Image
              src="/img/unicorn-eth.png"
              alt="Unicorn"
              width={170}
              height={48}
              className="mx-auto"
            />
            <div className="flex flex-col gap-6">
              {step === 0 && (
                <>
                  {' '}
                  <Typography fontVariant="extraLarge">
                    Go to your wallet.
                  </Typography>
                  <SignUpButton onClick={login}>
                    <GoogleIcon />
                    <Typography fontVariant="body">
                      Sign in with Google
                    </Typography>
                  </SignUpButton>
                </>
              )}
              {step === 1 && (
                <>
                  <Typography fontVariant="extraLarge">
                    Choose your wallet name.
                  </Typography>
                  <Input
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value)
                      debouncedCheckUserName(e)
                    }}
                    label=""
                    name="username"
                    placeholder="username"
                    suffix=".unicorn.eth"
                    size="large"
                  />
                  <Button
                    disabled={!userName && Boolean(IsNameAvailable)}
                    onClick={() => setStep(2)}>
                    Next
                  </Button>
                </>
              )}
              {step === 2 && (
                <>
                  <Typography fontVariant="extraLarge">
                    Welcome to the Unicorn family.
                  </Typography>
                  <div className="flex flex-col items-center justify-center gap-2 rounded-[40px] bg-background-secondary p-2">
                    {userInfo && (
                      <Image
                        className="rounded-full"
                        src={userInfo.profileImage}
                        alt={userInfo.name}
                        width={72}
                        height={72}
                      />
                    )}
                    <Typography className="flex items-center gap-1 lowercase ">
                      {userInfo?.name}.unicorn.eth <Copy />
                    </Typography>
                    <Typography className="text-text-secondary">
                      {userInfo?.email}
                    </Typography>
                  </div>
                  <Button onClick={() => router.push('/dashboard')}>
                    Go to wallet
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
