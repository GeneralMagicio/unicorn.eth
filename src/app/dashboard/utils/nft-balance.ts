import { JsonRpcProvider, ethers } from 'ethers'
import { SupportedChainIds } from '../data/supported_tokens'
import { supportedNFTs } from '../data/supported_nft_collections'
import { getProviderUrl } from './balance'

// const NftChainIds = [
//   SupportedChainIds.Mainnet,
//   SupportedChainIds.BSC,
//   SupportedChainIds.Polygon,
// ]

// const PrecisionDigits = 4

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
    // const [balance, tokens] = await Promise.all([contract.balanceOf(walletAddress), contract.tokensOfOwner(walletAddress)])
    const balance = await contract.balanceOf(walletAddress)
    console.log('Balance of worked', balance)
    const tokens = await contract.tokensOfOwner(walletAddress)
    console.log('tokensOfOwner', tokens)
    for (let i = 0; i < balance; i++) {
      console.log('In here!!!')
      const tokenId = tokens[i]
      console.log('Token of owner by index worked')
      nfts.push(tokenId.toString())
    }
  } catch (e) {
    console.error(`Error for ${contractAddress}`, e)
    // console.error(e.reason)
  }
  return nfts
}

export const findAllNFTs = async (walletAddress: string) => {
  let allNFTs: string[] = []

  for (const collection of supportedNFTs) {
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
