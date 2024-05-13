'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button, Input, Typography } from '@ensdomains/thorin'
import { GoogleIcon } from '@/components/Icons/Google'
import { ArrowLeft } from '@/components/Icons/ArrowLeft'
import { SigningInPage } from '@/components/SigningInPage'
import { Copy } from '@/components/Icons/Copy'
import { SignUpButton } from '@/components/SignUp/inde'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import cn from 'classnames'
import { UserNameInput } from '@/components/Styled'
import { useEnsResolver } from '@/hooks/useEnsResolver'
import { useActiveWallet, useConnect, useDisconnect } from 'thirdweb/react'
import { createSmartWallet } from '@/lib/third-web/methods'
import { useIsAutoConnecting } from '@/lib/third-web/AutoConnect'
import { useAtom } from 'jotai'
import { isSettingEnsInfoAtom } from '@/store'

const enum LoginSteps {
  WELCOME_SCREEN,
  PICK_USERNAME,
  PROFILE_PREVIEW,
}

export default function Login() {
  const router = useRouter()
  const [step, setStep] = useState(LoginSteps.WELCOME_SCREEN)
  const [isSigning, setIsSigning] = useState(false)
  const [chosenUsername, setChosenUsername] = useState('')
  const [error, setError] = useState('')
  const { isAutoConnecting } = useIsAutoConnecting()
  const [isSettingEnsInfo] = useAtom(isSettingEnsInfoAtom)

  const { connect } = useConnect()
  const { disconnect } = useDisconnect()

  const wallet = useActiveWallet()

  const {
    username,
    userProfilePicture,
    userEmail,
    setUsername,
    clearUserInfo,
  } = useAuth()

  const {
    isRegistering,
    isNameAvailable,
    setIsNameAvailable,
    debouncedCheckUserName,
    createEnsSubname,
  } = useEnsResolver()

  useEffect(() => {
    if (wallet && step !== LoginSteps.PICK_USERNAME) {
      setStep(LoginSteps.PICK_USERNAME)
    }
  }, [wallet, step])
  const login = async () => {
    setIsSigning(true)
    try {
      await connect(createSmartWallet)
    } finally {
      setIsSigning(false)
    }
  }

  const logout = async () => {
    if (wallet) {
      disconnect(wallet)
      clearUserInfo()
    }
  }

  const handleBack = () => {
    if (step === LoginSteps.PICK_USERNAME) {
      logout()
    }
    setStep(Math.max(step - 1, 0))
  }

  return (
    <>
      {(isSigning ||
        isAutoConnecting ||
        isSettingEnsInfo ||
        (wallet && Boolean(username))) && <SigningInPage />}
      <div className="relative h-full max-h-screen w-full grow">
        <div className="absolute mb-28 flex h-4/5 w-full">
          {step >= LoginSteps.PICK_USERNAME && (
            <ArrowLeft
              className="absolute left-5 top-10 z-10"
              onClick={handleBack}
            />
          )}
          <Image src="/img/login-bg.png" alt="Unicorn" fill />
        </div>
        <div className="absolute inset-x-0 bottom-0 rounded-t-[32px] border-b bg-white px-4 py-12">
          <div className="flex flex-col gap-10">
            <Image
              src="/img/logo.svg"
              alt="Unicorn"
              width={170}
              height={48}
              className={cn('mx-auto object-cover', {
                'mt-[57px]': step === LoginSteps.WELCOME_SCREEN,
              })}
            />
            <div className="flex flex-col gap-6">
              {step === LoginSteps.WELCOME_SCREEN && (
                <>
                  <SignUpButton disabled={isAutoConnecting} onClick={login}>
                    <GoogleIcon />
                    <Typography fontVariant="body">
                      {isAutoConnecting
                        ? `Welcome back...`
                        : `Sign in with Google`}
                    </Typography>
                  </SignUpButton>
                </>
              )}
              {step === LoginSteps.PICK_USERNAME && (
                <>
                  <Typography fontVariant="extraLarge">
                    Choose your wallet domain.
                  </Typography>
                  <UserNameInput
                    varient={
                      isNameAvailable === false
                        ? 'error'
                        : isNameAvailable === true
                          ? 'success'
                          : undefined
                    }>
                    <Input
                      description={
                        chosenUsername && isNameAvailable
                          ? 'Great choice! That’s available.'
                          : 'Hide'
                      }
                      value={chosenUsername}
                      onChange={(e) => {
                        setChosenUsername(e.target.value)
                        setIsNameAvailable(null)
                        debouncedCheckUserName(e.target.value)
                      }}
                      label=""
                      name="username"
                      placeholder="username"
                      suffix=".account.eth"
                      size="large"
                      error={
                        isNameAvailable === false && "Oops! That's unavailable."
                      }
                    />
                  </UserNameInput>

                  <Button
                    loading={isRegistering}
                    disabled={!chosenUsername || !Boolean(isNameAvailable)}
                    onClick={() => {
                      createEnsSubname(chosenUsername).then(() => {
                        setStep(LoginSteps.PROFILE_PREVIEW)
                      })
                    }}>
                    Next
                  </Button>
                </>
              )}
              {step === LoginSteps.PROFILE_PREVIEW && (
                <>
                  <Typography fontVariant="extraLarge">
                    Welcome to the web3
                  </Typography>
                  <div className="flex flex-col items-center justify-center gap-2 rounded-[40px] bg-background-secondary p-2">
                    {userProfilePicture && (
                      <Image
                        className="rounded-full"
                        src={userProfilePicture || '/img/ens.png'}
                        alt={username!}
                        width={72}
                        height={72}
                      />
                    )}
                    <Typography className="flex items-center gap-1 lowercase ">
                      {chosenUsername}.unicorn.eth <Copy />
                    </Typography>
                    <Typography className="text-text-secondary">
                      {userEmail}
                    </Typography>
                  </div>
                  <Button
                    onClick={() => {
                      setUsername(chosenUsername.toLowerCase())
                      router.push('/dashboard')
                    }}>
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
