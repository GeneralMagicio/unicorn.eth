import { Provider } from 'ethers'
import { atom } from 'jotai'

// export const userInfoAtom = atom<UserInfo | null>(null)
export const usernameAtom = atom<string>('')
export const userAddressAtom = atom<string>('')
export const userEmailAtom = atom<string>('')
export const userProfilePictureAtom = atom<string>('')
export const isAutoConnectingAtom = atom<boolean | undefined>(undefined)
export const isSettingEnsInfoAtom = atom<boolean | undefined>(false)
// export const safeAuthPackAtom = atom<SafeAuthPack | null>(null)
// export const safeAuthSignInInfoAtom = atom<AuthKitSignInData | null>(null)
// export const isAuthenticatedAtom = atom<boolean>(false)
// export const authStatusAtom = atom<AUTH_STATUS>(0)
// export const providerAtom = atom<BrowserProvider | null>(null)
export const mainnetProviderAtom = atom<Provider | null>(null)
// export const signerAtom = atom<Signer | null>(null)
export const ethBalanceAtom = atom<string>('')
