'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { Button, Input, Typography } from '@ensdomains/thorin'
import { GoogleIcon } from '@/components/Icons/Google'
import { ArrowLeft } from '@/components/Icons/ArrowLeft'
import { SigningInPage } from '@/components/SigningInPage'
import { Copy } from '@/components/Icons/Copy'
import { SignUpButton } from '@/components/SignUp/inde'
import { useRouter } from 'next/navigation'
import { nsService } from '@/services/enService'
import { debounce } from '@/utils/debounce'
import { useSafeAuth } from '@/hooks/useSafeAuth'
import styled from 'styled-components'

const UserNameWrapper = styled.div<{ varient?: 'success' | 'error' }>(
  ({ theme, varient }) => ({
    '.sc-jNJODI': {
      borderColor:
        varient === 'success' ? `${theme.colors.green} !important` : undefined,
    },
    '.sc-eDvShL': {
      color:
        varient === 'success' ? `${theme.colors.green} !important` : undefined,
    },
  })
)

export default function Login() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [isSigning, setIsSigning] = useState(false)
  const [isNameAvailable, setisNameAvailable] = useState<boolean | null>(null)
  const {
    safeAuthPack,
    isAuthenticated,
    setIsAuthenticated,
    setUserInfo,
    userInfo,
    setSafeAuthSignInInfo,
    userName,
    setUserName,
  } = useSafeAuth()

  useEffect(() => {
    if (!safeAuthPack || !isAuthenticated) return
    ;(async () => {
      const userInfo = await safeAuthPack.getUserInfo()
      setUserInfo(userInfo)
      setStep(1)
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

  const logout = async () => {
    if (isAuthenticated) {
      await safeAuthPack?.signOut()
      setSafeAuthSignInInfo(null)
      setIsAuthenticated(false)
      setUserInfo(null)
    }
  }

  const checkUserName = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const res = await nsService.getIsNameAvailable(e.target.value)
      setisNameAvailable(e.target.value ? res : null)
    } catch (err) {
      setisNameAvailable(false)
    }
  }
  const debouncedCheckUserName = useCallback(debounce(checkUserName, 300), [])

  const handleBack = () => {
    if (step === 1) {
      logout()
    }
    setStep(Math.max(step - 1, 0))
  }
  return (
    <>
      {isSigning && <SigningInPage />}
      <div className="relative h-full w-full grow">
        <div className="absolute mb-28 flex h-2/3 w-full">
          {isAuthenticated && userInfo && (
            <ArrowLeft
              className="absolute left-5 top-10 z-10"
              onClick={handleBack}
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
                  <UserNameWrapper
                    varient={
                      isNameAvailable && userName ? 'success' : undefined
                    }>
                    <Input
                      description={
                        userName && isNameAvailable
                          ? 'Great choice! That’s available.'
                          : ''
                      }
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
                      error={
                        isNameAvailable === false && "Oops! That's unavailable."
                      }
                    />
                  </UserNameWrapper>

                  <Button
                    // disabled={!userName || !Boolean(isNameAvailable)}
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
                      {userName}.unicorn.eth <Copy />
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
    </>
  )
}
