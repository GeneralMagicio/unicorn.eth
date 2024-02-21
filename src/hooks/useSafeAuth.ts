import {
  authStatusAtom,
  isAuthenticatedAtom,
  safeAuthPackAtom,
  safeAuthSignInInfoAtom,
  userInfoAtom,
  userNameAtom,
} from '@/store'
import { userProfileImg } from '@/store/settings'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

export const enum AUTH_STATUS {
  PENDING,
  RESOLVED,
}
export const useSafeAuth = () => {
  const [userName, setUserName] = useAtom(userNameAtom)
  const [userInfo, setUserInfo] = useAtom(userInfoAtom)
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom)
  const [signInInfo, setSafeAuthSignInInfo] = useAtom(safeAuthSignInInfoAtom)
  const [safeAuthPack, setSafeAuthPack] = useAtom(safeAuthPackAtom)
  const [authStatus, setAuthStatus] = useAtom(authStatusAtom)
  const [profileImage, setProfileImage] = useAtom(userProfileImg)

  return {
    safeAuthPack,
    setSafeAuthPack,
    signInInfo,
    setSafeAuthSignInInfo,
    isAuthenticated,
    setIsAuthenticated,
    userInfo,
    setUserInfo,
    userName,
    setUserName,
    profileImage,
    setProfileImage,
    authStatus,
    setAuthStatus,
  }
}
