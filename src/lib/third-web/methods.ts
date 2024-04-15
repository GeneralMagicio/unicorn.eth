import { inAppWallet, smartWallet } from "thirdweb/wallets";
import { LAST_CONNECT_PERSONAL_WALLET_ID } from "./constants";
import { client, smartWalletConfig } from "./provider";

export const createSmartWallet = async () => {
  const socialEOA = inAppWallet();
  await socialEOA.connect({
    client,
    strategy: "google",
  });
  localStorage.setItem(LAST_CONNECT_PERSONAL_WALLET_ID, socialEOA.id)
  const wallet = smartWallet(smartWalletConfig);
  const EoaAccount = socialEOA.getAccount()
  await wallet.connect({
    personalAccount: EoaAccount!,
    client,
  })

  return wallet
}