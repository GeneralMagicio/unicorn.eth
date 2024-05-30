import { inAppWallet, smartWallet } from 'thirdweb/wallets'
import { client, smartWalletConfig } from './provider'
import {
  LAST_CONNECT_PERSONAL_WALLET_ID,
  getThirdWebStorageValues,
  setThirdWebStorageValues,
} from './storage'

export const createSmartWallet = async () => {
  const socialEOA = inAppWallet()
  await socialEOA.connect({
    client,
    strategy: 'google',
  })
  localStorage.setItem(LAST_CONNECT_PERSONAL_WALLET_ID, socialEOA.id)
  const wallet = smartWallet(smartWalletConfig)
  const EoaAccount = socialEOA.getAccount()
  await wallet.connect({
    personalAccount: EoaAccount!,
    client,
  })

  return wallet
}

export const createSubdomainSearchParams = () => {
  const searchParams = new URLSearchParams()
  setThirdWebStorageValues(searchParams, getThirdWebStorageValues(localStorage))
  return searchParams
}
