import { JsonRpcProvider, ethers } from "ethers";
import { SupportedToken } from "../data/supported_tokens";

const PrecisionDigits = 4

function getProviderUrl(chainId: number) {

  // This is a public api key so don't worry.
  const infuraApiKey = "75268e971ab6449981ac429cf62c5fb7"

  const urls : Record<number, string> = {
    // Ethereum Mainnet
    1: `https://mainnet.infura.io/v3/${infuraApiKey}`,
    // Optimism Mainnet
    10: `https://optimism-mainnet.infura.io/v3/${infuraApiKey}`,
    // gnosis
    100: `https://rpc.gnosischain.com`,
    // Arbitrum One Layer  2
    42161: `https://arbitrum-mainnet.infura.io/v3/${infuraApiKey}`,
    // BSC
    56: `https://bsc-dataseed3.binance.org`,
    // Add other chain IDs and their corresponding Infura URLs here
    // For example:
    //  34: `https://scai-mainnet.infura.io/v3/${infuraApiKey}`, // SCAI Mainnet
   
  };

  return urls[chainId] || 'Chain ID not supported';
}

async function getTokenBalance(chainId: number, tokenAddress: string, walletAddress: string) {
  const provider = new JsonRpcProvider(getProviderUrl(chainId));
  // when token is the native token of the chain
  if (tokenAddress === '') {
    const balance = await provider.getBalance(walletAddress);
    return balance
  }
  const abi = [
    "function balanceOf(address owner) view returns (uint256 balance)"
  ];
  const contract = new ethers.Contract(tokenAddress, abi, provider);
  const balance = await contract.balanceOf(walletAddress);
  return balance;
}

export async function getTotalBalance(supportedTokens: SupportedToken[], walletAddress: string) {
  let totalBalance : Record<string, bigint> = supportedTokens.reduce((acc, curr, i) => ({...acc, [curr.symbol] : BigInt(0)}), {});
  for (const token of supportedTokens) {
    for (const address of token.addresses) {
      const balance = await getTokenBalance(address.chainId, address.address, walletAddress);
      totalBalance = {...totalBalance, [token.symbol]: totalBalance[token.symbol] +  (balance / BigInt(Math.pow(10, token.decimals - PrecisionDigits)))};
    }
  }
  const result : Record<string, number> = {}
  Object.keys(totalBalance).forEach((key) => result[key] = Number(totalBalance[key]) / (Math.pow(10, PrecisionDigits)))
  return result;
}