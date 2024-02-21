import { AUTH_STATUS } from '@/hooks/useSafeAuth'
import {
  AuthKitSignInData,
  SafeAuthPack,
  SafeAuthUserInfo,
} from '@safe-global/auth-kit'
import { atom } from 'jotai'

//
export const userInfoAtom = atom<SafeAuthUserInfo | null>(null)
export const userNameAtom = atom<string>('')
export const safeAuthPackAtom = atom<SafeAuthPack | null>(null)
export const safeAuthSignInInfoAtom = atom<AuthKitSignInData | null>(null)
export const isAuthenticatedAtom = atom<boolean>(false)
export const authStatusAtom = atom<AUTH_STATUS>(0)