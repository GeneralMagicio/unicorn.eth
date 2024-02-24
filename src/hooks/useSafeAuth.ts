import { ethers } from 'ethers'
import { useAtom } from 'jotai'
import {
  authStatusAtom,
  isAuthenticatedAtom,
  safeAuthPackAtom,
  safeAuthSignInInfoAtom,
  userInfoAtom,
  userNameAtom,
  providerAtom,
  signerAtom,
  ethBalanceAtom,
} from '@/store'
import { userProfileImg } from '@/store/settings'

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
  const [provider, setProvider] = useAtom(providerAtom)
  const [signer, setSigner] = useAtom(signerAtom)
  const [ethBalance, setEthBalance] = useAtom(ethBalanceAtom)

  const sendToken = async (
    toAddress: string,
    amount: string,
    tokenAddress = ''
  ) => {
    if (!signer) {
      console.error('Signer is not initialized')
      return
    }
    if (!ethers.isAddress(toAddress)) {
      console.error('Invalid address')
      return
    }

    try {
      if (tokenAddress === '') {
        // Sending Ether
        const transaction = {
          to: toAddress,
          value: ethers.parseEther(amount),
        }
        const txResponse = await signer.sendTransaction(transaction)
        await txResponse.wait() // Wait for the transaction to be mined
        console.log(`Ether transfer successful with hash: ${txResponse.hash}`)
      } else {
        // Sending ERC20 token
        if (!ethers.isAddress(tokenAddress)) {
          console.error('Invalid token address')
          return
        }
        const tokenContract = new ethers.Contract(
          tokenAddress,
          [
            // The minimal ABI to perform an ERC20 token transfer
            'function transfer(address to, uint amount) returns (bool)',
          ],
          signer
        )

        const amountInWei = ethers.parseUnits(amount, 'ether') // Assuming token has 18 decimals, adjust if needed
        const txResponse = await tokenContract.transfer(toAddress, amountInWei)
        await txResponse.wait() // Wait for the transaction to be mined
        console.log(
          `ERC20 token transfer successful with hash: ${txResponse.hash}`
        )
      }
    } catch (error) {
      console.error('Transaction failed:', error)
    }
  }
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
    sendToken,
    setProvider,
    setSigner,
    ethBalance,
    setEthBalance,
  }
}
