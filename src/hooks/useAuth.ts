import { useAtom } from 'jotai'
import {
  mainnetProviderAtom,
  ethBalanceAtom,
  userAddressAtom,
  usernameAtom,
  userEmailAtom,
  userProfilePictureAtom,
} from '@/store'

export const enum AUTH_STATUS {
  PENDING,
  RESOLVED,
}
export const useAuth = () => {
  const [username, setUsername] = useAtom(usernameAtom)
  const [userAddress, setUserAddress] = useAtom(userAddressAtom)
  const [userEmail, setUserEmail] = useAtom(userEmailAtom)
  const [userProfilePicture, setUserProfilePicture] = useAtom(
    userProfilePictureAtom
  )
  // const [userInfo, setUserInfo] = useAtom(userInfoAtom)
  // const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom)
  // const [signInInfo, setSafeAuthSignInInfo] = useAtom(safeAuthSignInInfoAtom)
  // const [safeAuthPack, setSafeAuthPack] = useAtom(safeAuthPackAtom)
  // const [authStatus, setAuthStatus] = useAtom(authStatusAtom)
  const [mainnetProvider, setMainnetProvider] = useAtom(mainnetProviderAtom)
  // const [provider, setProvider] = useAtom(providerAtom)
  // const [signer, setSigner] = useAtom(signerAtom)
  const [ethBalance, setEthBalance] = useAtom(ethBalanceAtom)
  // const [profileImage, setProfileImage] = useAtom(userProfileImg)
  const clearUserInfo = () => {
    setUsername('')
    setUserEmail('')
    setUserProfilePicture('')
    setUserAddress('')
  }

  return {
    // safeAuthPack,
    // setSafeAuthPack,
    // signInInfo,
    // setSafeAuthSignInInfo,
    // isAuthenticated,
    // setIsAuthenticated,
    userProfilePicture,
    setUserProfilePicture,
    setUserAddress,
    userAddress,
    setUserEmail,
    userEmail,
    setUsername,
    username,
    // authStatus,
    // setAuthStatus,
    // provider,
    mainnetProvider,
    // setProvider,
    setMainnetProvider,
    // signer,
    // setSigner,
    ethBalance,
    setEthBalance,
    clearUserInfo,
    // userAddress,
    // setUserAddress,
  }
}
