import { JsonRpcProvider, ethers } from 'ethers'
import { SupportedNFT, supportedNFTs } from '../data/top100-nfts'
import { getProviderUrl } from './balance'
import { SupportedChainIds } from '../data/supported_tokens';

export const supportedNFTsWithFunctionSupport : SupportedNFT[] = []

async function getNFTs(
  chainId: number,
  contractAddress: string,
  walletAddress: string
): Promise<string[]> {
  const provider = new JsonRpcProvider(getProviderUrl(chainId))
  const abi = [
    'function balanceOf(address owner) view returns (uint256)',
    {
      constant: true,
      inputs: [{ name: '_owner', type: 'address' }],
      name: 'tokensOfOwner',
      outputs: [{ name: 'ownerTokens', type: 'uint256[]' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ]
  const contract = new ethers.Contract(contractAddress, abi, provider)
  let nfts: string[] = []
  try {
    const [balance, tokens] = await Promise.all([contract.balanceOf(walletAddress), contract.tokensOfOwner(walletAddress)])
    for (let i = 0; i < balance; i++) {
      const tokenId = tokens[i]
      nfts.push(tokenId.toString())
    }
  } catch (e) {
    console.error(`Error for ${contractAddress}`, e)
  }
  return nfts
}

export const findAllNFTs = async (enumerableNFTs: SupportedNFT[], walletAddress: string) => {
  let allNFTs: string[] = []

  for (const collection of enumerableNFTs) {
    for (const address of collection.addresses) {
      const nfts = await getNFTs(
        address.chainId,
        address.address,
        walletAddress
      )
      allNFTs = [...allNFTs, ...nfts]
    }
  }

  return allNFTs
}