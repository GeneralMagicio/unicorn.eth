import {
  authStatusAtom,
  isAuthenticatedAtom,
  safeAuthPackAtom,
  safeAuthSignInInfoAtom,
  userInfoAtom,
  userNameAtom,
} from '@/store'
import { useAtom } from 'jotai'

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
    authStatus,
    setAuthStatus,
  }
}
