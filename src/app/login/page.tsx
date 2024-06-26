'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Button, Input, Spinner, Typography } from '@ensdomains/thorin'
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
import { appConfig } from '@/config'
import { UploadIcon } from '@/components/Icons/Upload'
import { useUploadProfilePicture } from '@/hooks/useUploadProfilePicture'
import { UNICORN_MODE } from '@/store/settings'
import { useTheme } from 'styled-components'
import { UnicornButton } from '@/components/UnicornButton'
import { makeSubdominURL } from '@/utils/helpers'
import {
  LAST_CONNECT_PERSONAL_WALLET_ID,
  clearThirdWebStorage,
} from '@/lib/third-web/storage'

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
  const theme = useTheme()
  const { isAutoConnecting } = useIsAutoConnecting()

  const [isSettingEnsInfo] = useAtom(isSettingEnsInfoAtom)
  const { userProfilePicture, isUploading, handleFileChange, inputRef } =
    useUploadProfilePicture()

  const { connect } = useConnect()
  const { disconnect } = useDisconnect()

  const wallet = useActiveWallet()

  const { username, userEmail, setUsername, clearUserInfo } = useAuth()

  const {
    isRegistering,
    isNameAvailable,
    setIsNameAvailable,
    debouncedCheckUserName,
    createEnsSubname,
  } = useEnsResolver()

  useEffect(() => {
    if (
      wallet &&
      step !== LoginSteps.PICK_USERNAME &&
      step !== LoginSteps.PROFILE_PREVIEW
    ) {
      setStep(LoginSteps.PICK_USERNAME)
    }
  }, [wallet, step])

  useEffect(() => {
    // Check for signed in users
    if (wallet && username && !chosenUsername) {
      if (appConfig.isDevMode) {
        router.push('/dashboard')
      } else {
        const url = makeSubdominURL(username)
        if (url) window.location.replace(url)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet, username, chosenUsername])

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
      clearThirdWebStorage()
    }
  }

  const handleBack = () => {
    if (step === LoginSteps.PICK_USERNAME) {
      logout()
    }
    setStep(Math.max(step - 1, 0))
  }

  if (
    isSigning ||
    isAutoConnecting ||
    isSettingEnsInfo ||
    (wallet && Boolean(username))
  )
    return <SigningInPage />

  return (
    <>
      <div className="absolute -top-8 bottom-12 mb-32 h-4/5 w-full bg-accent-light">
        {step >= 1 && (
          <ArrowLeft
            className="absolute left-5 top-12 z-10"
            onClick={handleBack}
          />
        )}

        <Image
          className="bottom-4 "
          src={
            UNICORN_MODE
              ? '/img/logo-unicorn-landing.webp'
              : '/img/login-bg.png'
          }
          alt="Unicorn"
          fill
        />
      </div>

      <div
        className={`absolute inset-x-[-6px] bottom-0 flex min-h-[426px] flex-col justify-center rounded-t-[42px] border-[6px] bg-white ${
          UNICORN_MODE ? 'border-accent' : 'border-transparent'
        } border-b-transparent px-4 pb-12 pt-4`}>
        <div className="flex flex-col gap-10 ">
          <Image
            src={UNICORN_MODE ? '/img/unicorn-logo.svg' : '/img/logo.svg'}
            alt="Unicorn"
            width={UNICORN_MODE ? 231 : 170}
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
                        : ''
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
                    suffix={appConfig.ensDomain}
                    size="large"
                    error={
                      isNameAvailable === false && "Oops! That's unavailable."
                    }
                  />
                </UserNameInput>

                <UnicornButton
                  loading={isRegistering}
                  disabled={!chosenUsername || !Boolean(isNameAvailable)}
                  onClick={() => {
                    createEnsSubname(chosenUsername).then(() => {
                      setStep(LoginSteps.PROFILE_PREVIEW)
                    })
                  }}>
                  Next
                </UnicornButton>
              </>
            )}
            {step === LoginSteps.PROFILE_PREVIEW && (
              <>
                <Typography fontVariant="extraLarge">
                  Welcome to the web3
                </Typography>
                <div className="flex flex-col items-center justify-center gap-2 rounded-[40px] bg-background-secondary p-2">
                  <div className="relative">
                    <input
                      className="absolute inset-0 z-10 opacity-0"
                      type="file"
                      ref={inputRef}
                      onInput={handleFileChange}
                    />
                    <Image
                      className="max-h-[72px] max-w-[72px] rounded-full"
                      src={
                        userProfilePicture || UNICORN_MODE
                          ? '/img/unicorn-profile-placeholder.svg'
                          : 'public/img/profile-placeholder.svg'
                      }
                      alt={username || ''}
                      width={72}
                      height={72}
                    />
                    <div className="!absolute bottom-0 right-0 rounded-full bg-white p-1">
                      <UploadIcon />
                    </div>
                    {isUploading && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Spinner size="medium" color="indigoSurface" />
                      </div>
                    )}
                  </div>
                  <Typography className="flex items-center gap-1 lowercase ">
                    {chosenUsername || username}
                    {appConfig.ensDomain} <Copy />
                  </Typography>
                  <Typography className="text-text-secondary">
                    {userEmail}
                  </Typography>
                </div>
                <UnicornButton
                  onClick={() => {
                    setUsername(chosenUsername.toLowerCase())
                    if (appConfig.isDevMode) {
                      router.push('/dashboard')
                    } else {
                      const url = makeSubdominURL(chosenUsername)
                      if (url) window.location.replace(url)
                    }
                  }}>
                  Go to wallet
                </UnicornButton>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
