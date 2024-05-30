import { clientId } from './constants'

// STORAGE_KEYS
export const LAST_CONNECT_PERSONAL_WALLET_ID = 'last-connect-personal-wallet-id'
export const WALLET_TOKEN_ID = `walletToken-${clientId}`
export const THIRD_WEB_EWS_WALLET_USER_ID = `thirdwebEwsWalletUserId-${clientId}`
export const getAccountTokenKey = (id: string) => `a-${clientId}-${id}`

type StorageType = WindowLocalStorage['localStorage'] | URLSearchParams
interface ThirdWebStorage {
  storage: WindowLocalStorage['localStorage'] | URLSearchParams
  get(key: string): string | null
  set(key: string, value: string): void
}

const thirdWebStorge: ThirdWebStorage = {
  storage: new URLSearchParams(),
  get(key: string) {
    if (this.storage instanceof URLSearchParams) {
      return this.storage.get(key)
    } else {
      return this.storage.getItem(key)
    }
  },
  set(key: string, value: string) {
    if (this.storage instanceof URLSearchParams) {
      this.storage.set(key, value)
    } else {
      this.storage.setItem(key, value)
    }
  },
}

export const getThirdWebStorageValues = (storage: StorageType) => {
  thirdWebStorge.storage = storage
  const walletToken = thirdWebStorge.get(WALLET_TOKEN_ID)
  const lastConnectorPersonalWalletId = thirdWebStorge.get(
    LAST_CONNECT_PERSONAL_WALLET_ID
  )
  const thirdWebEwsUserID = thirdWebStorge.get(THIRD_WEB_EWS_WALLET_USER_ID)
  const accountTokenKey = getAccountTokenKey(thirdWebEwsUserID!)
  const accountTokenValue = thirdWebStorge.get(accountTokenKey)
  return {
    walletToken,
    accountTokenValue,
    accountTokenKey,
    thirdWebEwsUserID,
    lastConnectorPersonalWalletId,
  }
}

export const setThirdWebStorageValues = (
  storage: StorageType,
  {
    accountTokenValue,
    accountTokenKey,
    walletToken,
    thirdWebEwsUserID,
    lastConnectorPersonalWalletId,
  }: ReturnType<typeof getThirdWebStorageValues>
) => {
  if (!walletToken) return
  thirdWebStorge.storage = storage
  thirdWebStorge.set(WALLET_TOKEN_ID, walletToken!)
  thirdWebStorge.set(
    LAST_CONNECT_PERSONAL_WALLET_ID,
    lastConnectorPersonalWalletId!
  )
  thirdWebStorge.set(THIRD_WEB_EWS_WALLET_USER_ID, thirdWebEwsUserID!)
  thirdWebStorge.set(accountTokenKey, accountTokenValue!)
}

export const clearThirdWebStorage = () => {
  localStorage.removeItem(WALLET_TOKEN_ID)
  localStorage.removeItem(LAST_CONNECT_PERSONAL_WALLET_ID)
  localStorage.removeItem(THIRD_WEB_EWS_WALLET_USER_ID)
}
