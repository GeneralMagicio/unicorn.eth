import {
  isAuthenticatedAtom,
  safeAuthPackAtom,
  safeAuthSignInInfoAtom,
  userInfoAtom,
  userNameAtom,
} from '@/store/atoms'
import { useAtom } from 'jotai'

export const useSafeAuth = () => {
  const [userName, setUserName] = useAtom(userNameAtom)
  const [userInfo, setUserInfo] = useAtom(userInfoAtom)
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom)
  const [signInInfo, setSafeAuthSignInInfo] = useAtom(safeAuthSignInInfoAtom)
  const [safeAuthPack, setSafeAuthPack] = useAtom(safeAuthPackAtom)
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
  }
}
