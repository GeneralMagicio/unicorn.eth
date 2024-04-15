import { AUTH_STATUS } from '@/hooks/useAuth'
// import {
//   AuthKitSignInData,
//   SafeAuthPack,
//   SafeAuthUserInfo,
// } from '@safe-global/auth-kit'
import { BrowserProvider, Provider, Signer } from 'ethers'
import { atom } from 'jotai'

interface UserInfo {
  userName: string;
  address: string;
  email: string;
  profilePicture?: string;
  name?: string;
}

export const userInfoAtom = atom<UserInfo | null>(null)
// export const userNameAtom = atom<string>('')
export const isAutoConnectingAtom = atom<boolean | undefined>(undefined)
// export const safeAuthPackAtom = atom<SafeAuthPack | null>(null)
// export const safeAuthSignInInfoAtom = atom<AuthKitSignInData | null>(null)
// export const isAuthenticatedAtom = atom<boolean>(false)
// export const authStatusAtom = atom<AUTH_STATUS>(0)
// export const providerAtom = atom<BrowserProvider | null>(null)
export const mainnetProviderAtom = atom<Provider | null>(null)
// export const signerAtom = atom<Signer | null>(null)
export const ethBalanceAtom = atom<string>('')
// export const userAddressAtom = atom<string>('')
