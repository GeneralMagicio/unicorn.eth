import { ethers } from 'ethers'
import { useAtom } from 'jotai'
import {
  authStatusAtom,
  isAuthenticatedAtom,
  safeAuthPackAtom,
  safeAuthSignInInfoAtom,
  userInfoAtom,
  userNameAtom,
  userAddressAtom,
  providerAtom,
  mainnetProviderAtom,
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
  const [userAddress, setUserAddress] = useAtom(userAddressAtom)
  const [userInfo, setUserInfo] = useAtom(userInfoAtom)
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom)
  const [signInInfo, setSafeAuthSignInInfo] = useAtom(safeAuthSignInInfoAtom)
  const [safeAuthPack, setSafeAuthPack] = useAtom(safeAuthPackAtom)
  const [authStatus, setAuthStatus] = useAtom(authStatusAtom)
  const [mainnetProvider, setMainnetProvider] = useAtom(mainnetProviderAtom)
  const [provider, setProvider] = useAtom(providerAtom)
  const [signer, setSigner] = useAtom(signerAtom)
  const [ethBalance, setEthBalance] = useAtom(ethBalanceAtom)
  const [profileImage, setProfileImage] = useAtom(userProfileImg)

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
        return txResponse.hash
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

        // TODO: ADAPT THIS FOR ERC20 UNITS
        const amountInWei = ethers.parseUnits(amount, 'ether') // Assuming token has 18 decimals
        const txResponse = await tokenContract.transfer(toAddress, amountInWei)
        await txResponse.wait()
        console.log(
          `ERC20 token transfer successful with hash: ${txResponse.hash}`
        )
        return txResponse.hash
      }
    } catch (error) {
      console.error('Transaction failed:', error)
      return false
    }
  }

  const estimateGasFee = async (
    toAddress: string,
    amount: string,
    tokenAddress = ''
  ) => {
    try {
      if (!signer) return
      let estimatedGasLimit
      let transaction

      if (tokenAddress === '') {
        transaction = {
          to: toAddress,
          value: ethers.parseEther(amount),
        }
        estimatedGasLimit = await signer.estimateGas(transaction)
      } else {
        const tokenContract = new ethers.Contract(
          tokenAddress,
          [
            'function estimateTransferGas(address to, uint amount) returns (uint256)',
          ],
          signer
        )
        // TODO: ADAPT THIS FOR ERC20 UNITS
        const amountInWei = ethers.parseUnits(amount, 'ether') // Assuming token has 18 decimals
        estimatedGasLimit = await tokenContract.transfer.call(
          toAddress,
          amountInWei
        )
      }
      const gasPrice = (await mainnetProvider?.getFeeData())?.gasPrice

      const totalFee =
        !!gasPrice && !!estimatedGasLimit
          ? estimatedGasLimit * gasPrice
          : BigInt(0)
      return parseFloat(ethers.formatEther(totalFee)).toFixed(6)
    } catch (error) {
      console.error('Failed to estimate gas fee:', error)
      return null
    }
  }

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
    estimateGasFee,
    provider,
    mainnetProvider,
    setProvider,
    setMainnetProvider,
    signer,
    setSigner,
    ethBalance,
    setEthBalance,
    userAddress,
    setUserAddress,
  }
}
