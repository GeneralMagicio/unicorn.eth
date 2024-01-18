import {
  isAuthenticatedAtom,
  safeAuthPackAtom,
  safeAuthSignInInfoAtom,
  userInfoAtom,
} from '@/store/atoms'
import { useAtom } from 'jotai'

export const useSafeAuth = () => {
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
  }
}
