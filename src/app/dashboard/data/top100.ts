import { SupportedChainIds } from './supported_tokens'

export type SupportedNFT = {
  symbol: string
  addresses: {
    chainId:
      | SupportedChainIds.Mainnet
      | SupportedChainIds.Polygon
      | SupportedChainIds.BSC
    address: string
  }[]
  name: string
  website: string
  logo: {
    src: string
    width: number
    height: number
    ipfs_hash: string
  }
  iterationFunction?: "N-tokensOfOwner" | "W-tokensOfOwner" | "W-tokensOfOwnerByIndex" | "N-tokensOfOwnerByIndex",
}

// @ts-ignore
// export const supportedNFTs: SupportedNFT[] = data.data.collections.map((item) => ({
//   symbol: item.symbol,
//   name: item.name,
//   addresses: [
//     {
//       chainId:
//         item.blockchain === 'Ethereum'
//           ? SupportedChainIds.Mainnet
//           : item.blockchain === 'Polygon'
//             ? SupportedChainIds.Polygon
//             : item.blockchain === 'BNB Chain'
//               ? SupportedChainIds.BSC
//               : SupportedChainIds.Mainnet,
//       address: item.contractAddress,
//     },
//   ],
//   logo: {src: item.logo || '', width: -1, height: -1, ipfs_hash: ''},
//   website: item.website || '',
// }))

export const supportedNFTs: SupportedNFT[] = [
  {
    symbol: 'CKITTY',
    name: 'CryptoKitties',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x06012c8cf97bead5deae237070f9587f8e7a266d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x06012c8cf97bead5deae237070f9587f8e7a266d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.cryptokitties.co/',
    iterationFunction: "N-tokensOfOwner"
  },
  {
    symbol: 'OPENSTORE',
    name: 'OpenSea Shared Storefront',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x495f947276749ce646f68ac8c248420045cb7b5e',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x495f947276749ce646f68ac8c248420045cb7b5e.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: '',
    name: 'ENS',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://ens.domains',
  },
  {
    symbol: '',
    name: 'Rarible',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xd07dc4262bcdbf85190c01c996b4c06a461d2430',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xd07dc4262bcdbf85190c01c996b4c06a461d2430.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://rarible.com/',
  },
  {
    symbol: 'PANDORA',
    name: 'Pandora',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x9e9fbde7c7a83c43913bddc8779158f1368f0413',
      },
    ],
    logo: {
      src: 'https://i.seadn.io/s/raw/files/2468501bd3676a7f618f4ba9a619efec.gif?w=500&auto=format',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'PUNK',
    name: 'CryptoPunks',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://cryptopunks.app/',
  },
  {
    symbol: 'BLOCKS',
    name: 'Art Blocks',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://artblocks.io',
    iterationFunction: "W-tokensOfOwner",
  },
  {
    symbol: 'KODA',
    name: 'KnownOriginDigitalAsset',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xfbeef911dc5821886e1dda71586d90ed28174b7d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xfbeef911dc5821886e1dda71586d90ed28174b7d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://knownorigin.io',
    iterationFunction: "W-tokensOfOwnerByIndex",
  },
  {
    symbol: 'PIONEER',
    name: 'Matr1x Pioneer Badge',
    addresses: [
      {
        chainId: SupportedChainIds.Polygon,
        address: '0x0f3284bfebc5f55b849c8cf792d39cc0f729e0bc',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0x0f3284bfebc5f55b849c8cf792d39cc0f729e0bc.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://matr1x.io/',
  },
  {
    symbol: 'BAYC',
    name: 'BoredApeYachtClub',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://www.boredapeyachtclub.com/',
  },
  {
    symbol: 'WPUNKS',
    name: 'Wrapped Cryptopunks',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xb7f7f6c52f2e2fdb1963eab30438024864c313f6',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xb7f7f6c52f2e2fdb1963eab30438024864c313f6.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://wrappedpunks.com/',
  },
  {
    symbol: 'PPG',
    name: 'PudgyPenguins',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xbd3531da5cf5857e7cfaa92426877b022e612cf8',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xbd3531da5cf5857e7cfaa92426877b022e612cf8.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.pudgypenguins.com/',
  },
  {
    symbol: 'BLOCKS',
    name: 'Art Blocks',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x059edd72cd353df5106d2b9cc5ab83a52287ac3a',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x059edd72cd353df5106d2b9cc5ab83a52287ac3a.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://artblocks.io',
  },
  {
    symbol: 'MAYC',
    name: 'MutantApeYachtClub',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x60e4d786628fea6478f785a6d7e704777c86a7c6.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'Captainz',
    name: 'Captainz',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x769272677fab02575e84945f03eca517acc544cc',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x769272677fab02575e84945f03eca517acc544cc.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://memeland.com/captainz',
  },
  {
    symbol: 'MIL',
    name: 'Milady',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x5af0d9827e0c53e4799bb226655a1de152a425a5',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x5af0d9827e0c53e4799bb226655a1de152a425a5.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://miladymaker.net',
  },
  {
    symbol: 'AZUKI',
    name: 'Azuki',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xed5af388653567af2f388e6224dc7c4b3241c544',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xed5af388653567af2f388e6224dc7c4b3241c544.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://www.azuki.com',
  },
  {
    symbol: 'PIX',
    name: 'PlanetIX',
    addresses: [
      {
        chainId: SupportedChainIds.Polygon,
        address: '0xb2435253c71fca27be41206eb2793e44e1df6b6d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0xb2435253c71fca27be41206eb2793e44e1df6b6d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://www.planetix.com',
  },
  {
    symbol: 'OTHR',
    name: 'Otherdeed',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://otherside.xyz',
  },
  {
    symbol: 'CBC',
    name: 'Cold Blooded Creepz',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xfe8c6d19365453d26af321d0e8c910428c23873f',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xfe8c6d19365453d26af321d0e8c910428c23873f.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'CBC',
    name: 'Creepz by OVERLORD',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x5946aeaab44e65eb370ffaa6a7ef2218cff9b47d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x5946aeaab44e65eb370ffaa6a7ef2218cff9b47d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://www.overlord.xyz',
  },
  {
    symbol: 'ASYNC-BLUEPRINT',
    name: 'Async Blueprints',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xc143bbfcdbdbed6d454803804752a064a622c1f3',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xc143bbfcdbdbed6d454803804752a064a622c1f3.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://async.art/blueprints',
  },
  {
    symbol: 'MOCA',
    name: 'Mocaverse',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x59325733eb952a92e069c87f0a6168b29e80627f',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x59325733eb952a92e069c87f0a6168b29e80627f.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://mocaverse.xyz/',
  },
  {
    symbol: 'ASYNC-V2',
    name: 'Async Art',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xb6dae651468e9593e4581705a09c10a76ac1e0c8',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xb6dae651468e9593e4581705a09c10a76ac1e0c8.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://async.art',
  },
  {
    symbol: 'LP',
    name: 'Lil Pudgys',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x524cab2ec69124574082676e6f654a18df49a048',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x524cab2ec69124574082676e6f654a18df49a048.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.pudgypenguins.com/',
  },
  {
    symbol: 'MB4',
    name: 'Matthew Box 404',
    addresses: [
      {
        chainId: SupportedChainIds.BSC,
        address: '0x4536819095a8969c94362ba130ee0bb1cda714cb',
      },
    ],
    logo: {
      src: '',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'LAND',
    name: 'The Sandbox',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x5cc5b05a8a13e3fbdb0bb9fccd98d38e50f90c38',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x5cc5b05a8a13e3fbdb0bb9fccd98d38e50f90c38.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.sandbox.game/',
  },
  {
    symbol: '⚇',
    name: 'Meebits',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://meebits.app/',
  },
  {
    symbol: 'DEFROGS',
    name: 'DeFrogs',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xd555498a524612c67f286df0e0a9a64a73a7cdc7',
      },
    ],
    logo: {
      src: 'https://i.seadn.io/s/raw/files/d7ce6c3701d0e6e773a36cfd14ebabdd.png?w=500&auto=format',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'MVP',
    name: 'YOU THE REAL MVP',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x6efc003d3f3658383f06185503340c2cf27a57b6',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x6efc003d3f3658383f06185503340c2cf27a57b6.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://memeland.com',
  },
  {
    symbol: '',
    name: 'NameWrapper',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://ens.domains',
  },
  {
    symbol: 'SPORTSBOT',
    name: 'Sports Rollbots',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x1de7abda2d73a01aa8dca505bdcb773841211daf',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x1de7abda2d73a01aa8dca505bdcb773841211daf.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://rollbot.com/',
  },
  {
    symbol: 'PXLMN',
    name: 'Pixelmon',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x32973908faee0bf825a343000fe412ebe56f802a',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x32973908faee0bf825a343000fe412ebe56f802a.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://pixelmon.club/',
  },
  {
    symbol: 'YKPS',
    name: 'Yakuza Pandas',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xacf63e56fd08970b43401492a02f6f38b6635c91',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xacf63e56fd08970b43401492a02f6f38b6635c91.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://kanpaipandas.io/',
  },
  {
    symbol: 'Potatoz',
    name: 'Potatoz',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x39ee2c7b3cb80254225884ca001f57118c8f21b6',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x39ee2c7b3cb80254225884ca001f57118c8f21b6.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.memeland.com/potatoz',
  },
  {
    symbol: 'DOODLE',
    name: 'Doodles',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x8a90cab2b38dba80c64b7734e58ee1db38b8992e.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://web3.doodles.app',
  },
  {
    symbol: 'CloneX',
    name: 'CloneX',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://www.rtfkt.com',
  },
  {
    symbol: 'MKT2',
    name: 'MakersPlace',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://makersplace.com',
  },
  {
    symbol: 'AIRT',
    name: 'AirNFTs',
    addresses: [
      {
        chainId: SupportedChainIds.BSC,
        address: '0xf5db804101d8600c26598a1ba465166c33cdaa4b',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0xf5db804101d8600c26598a1ba465166c33cdaa4b.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'FT',
    name: 'ForgedToken',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x52a043ec29fbb9a1b142b8913a76c0bc592d0849',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x52a043ec29fbb9a1b142b8913a76c0bc592d0849.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://rtfkt.com/',
  },
  {
    symbol: 'DEBT',
    name: 'DEBT',
    addresses: [
      {
        chainId: SupportedChainIds.BSC,
        address: '0xd8287c59fc9c26c6916b1a3bcd9579b22e7cf77f',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0xd8287c59fc9c26c6916b1a3bcd9579b22e7cf77f.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.thedebtbox.com/debt-token',
  },
  {
    symbol: 'DEGODS',
    name: 'DeGods',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x8821bee2ba0df28761afff119d66390d594cd280',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x8821bee2ba0df28761afff119d66390d594cd280.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://degods.com',
  },
  {
    symbol: 'LAND',
    name: 'Decentraland LAND',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://decentraland.org/',
  },
  {
    symbol: 'ES',
    name: 'ElectricSheep',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x3fd36d72f05fb1af76ee7ce9257ca850faba91ed',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x3fd36d72f05fb1af76ee7ce9257ca850faba91ed.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://es.ultiverse.io/',
  },
  {
    symbol: 'WPV1',
    name: 'CryptoPunks V1 (wrapped)',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x282bdd42f4eb70e7a9d9f40c8fea0825b7f68c5d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x282bdd42f4eb70e7a9d9f40c8fea0825b7f68c5d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.v1punks.io/',
  },
  {
    symbol: 'OCMONK',
    name: 'OnChainMonkey',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x960b7a6bcd451c9968473f7bbfd9be826efd549a',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x960b7a6bcd451c9968473f7bbfd9be826efd549a.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://onchainmonkey.com/',
  },
  {
    symbol: 'TERRAFORMS',
    name: 'Terraforms',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x4e1f41613c9084fdb9e34e11fae9412427480e56',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x4e1f41613c9084fdb9e34e11fae9412427480e56.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://mathcastles.xyz',
  },
  {
    symbol: 'MBEAN',
    name: 'Azuki Elemental Beans',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x3af2a97414d1101e2107a70e7f33955da1346305',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x3af2a97414d1101e2107a70e7f33955da1346305.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'TEST',
    name: 'Redacted Remilio Babies',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xd3d9ddd0cf0a5f0bfb8f7fceae075df687eaebab',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xd3d9ddd0cf0a5f0bfb8f7fceae075df687eaebab.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://remilio.org',
  },
  {
    symbol: 'KUKU',
    name: 'MATR1X KUKU',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x596a5cd859ad53fec23cd3fcd77522f0b407920d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x596a5cd859ad53fec23cd3fcd77522f0b407920d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.matr1x.io/',
  },
  {
    symbol: 'VFT',
    name: 'VeeFriends',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xa3aee8bce55beea1951ef834b99f3ac60d1abeeb',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xa3aee8bce55beea1951ef834b99f3ac60d1abeeb.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://veefriends.com/',
  },
  {
    symbol: '',
    name: 'Synergy of Serra',
    addresses: [
      {
        chainId: SupportedChainIds.Polygon,
        address: '0xcf30aeebf2ef45fbc27e4761e2b842313dfbf99b',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0xcf30aeebf2ef45fbc27e4761e2b842313dfbf99b.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://synergyofserra.com/',
  },
  {
    symbol: 'm',
    name: 'merge.',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xc3f8a0f5841abff777d3eefa5047e8d413a1c9ab',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xc3f8a0f5841abff777d3eefa5047e8d413a1c9ab.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: '$WORLDBUILDERS',
    name: 'EigenLayer World Builders',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x36b73d268a441164ea0e4e5560a579573a475ebf',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x36b73d268a441164ea0e4e5560a579573a475ebf.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'BLOCKS',
    name: 'Art Blocks',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x99a9b7c1116f9ceeb1652de04d5969cce509b069',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x99a9b7c1116f9ceeb1652de04d5969cce509b069.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://artblocks.io',
  },
  {
    symbol: 'MPH',
    name: 'My Pet Hooligan',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x09233d553058c2f42ba751c87816a8e9fae7ef10',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x09233d553058c2f42ba751c87816a8e9fae7ef10.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://mypethooligan.com',
  },
  {
    symbol: 'RevoNFT',
    name: 'RevomonNFT',
    addresses: [
      {
        chainId: SupportedChainIds.BSC,
        address: '0xee35ab1effe4db2344348e3a98a6ef2687f43392',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0xee35ab1effe4db2344348e3a98a6ef2687f43392.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://revomon.io/',
  },
  {
    symbol: 'LLPPL',
    name: 'Parallel Avatars',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x0fc3dd8c37880a297166bed57759974a157f0e74',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x0fc3dd8c37880a297166bed57759974a157f0e74.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://parallel.life/avatars/landing/',
  },
  {
    symbol: 'IO',
    name: 'Imaginary Ones',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x716f29b8972d551294d9e02b3eb0fc1107fbf4aa',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x716f29b8972d551294d9e02b3eb0fc1107fbf4aa.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://imaginaryones.com',
  },
  {
    symbol: 'KONGZ',
    name: 'CyberKongz',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x57a204aa1042f6e66dd7730813f4024114d74f37',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x57a204aa1042f6e66dd7730813f4024114d74f37.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://cyberkongz.com',
  },
  {
    symbol: 'ASTX',
    name: 'Asterix',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x0000000000c26fabfe894d13233d5ec73f61cc72',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x0000000000c26fabfe894d13233d5ec73f61cc72.gif',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'LL',
    name: 'loomlocknft',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x1d20a51f088492a0f1c57f047a9e30c9ab5c07ea',
      },
    ],
    logo: {
      src: 'https://i.seadn.io/gae/ju6vDR0sbEvqT0bAb4QPEzYMzpReEllDZ5MlICtxqJu76G5UrZ0cT-w6X3Mzf9e8KXZXJGNIyXGDRAoL-qlaApiJsj27ZdbOY5VvCA?auto=format&dpr=1&w=256',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://loomlock.com',
  },
  {
    symbol: 'OAT',
    name: 'Galaxy OAT',
    addresses: [
      {
        chainId: SupportedChainIds.Polygon,
        address: '0x5d666f215a85b87cb042d59662a7ecd2c8cc44e6',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0x5d666f215a85b87cb042d59662a7ecd2c8cc44e6.webp',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://galxe.com',
  },
  {
    symbol: 'SID',
    name: 'SPACE ID',
    addresses: [
      {
        chainId: SupportedChainIds.BSC,
        address: '0xe3b1d32e43ce8d658368e2cbff95d57ef39be8a6',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0xe3b1d32e43ce8d658368e2cbff95d57ef39be8a6.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://space.id',
  },
  {
    symbol: 'YATC',
    name: 'YouAreTheChampion',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x00723c39194f7f449be736da0d1c4ec809dde793',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x00723c39194f7f449be736da0d1c4ec809dde793.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.matr1x.io/NFT',
  },
  {
    symbol: 'OPENSTORE',
    name: 'OpenSea Collections',
    addresses: [
      {
        chainId: SupportedChainIds.Polygon,
        address: '0x2953399124f0cbb46d2cbacd8a89cf0599974963',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0x2953399124f0cbb46d2cbacd8a89cf0599974963.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'SAPS',
    name: 'Sappy Seals',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x364c828ee171616a39897688a831c2499ad972ec',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x364c828ee171616a39897688a831c2499ad972ec.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://sappyseals.io',
  },
  {
    symbol: 'BITB',
    name: 'Bit Bears',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x32bb5a147b5371fd901aa4a72b7f82c58a87e36d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x32bb5a147b5371fd901aa4a72b7f82c58a87e36d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://berachain.com',
  },
  {
    symbol: 'MOONBIRD',
    name: 'Moonbirds',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x23581767a106ae21c074b2276d25e5c3e136a68b',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x23581767a106ae21c074b2276d25e5c3e136a68b.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://proof.xyz/moonbirds',
  },
  {
    symbol: 'SUPR',
    name: 'SuperRare',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://superrare.co',
  },
  {
    symbol: 'GOOF',
    name: 'GOOFIES',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xbff94df17c24c7911f1da4902117363a67633831',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xbff94df17c24c7911f1da4902117363a67633831.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://goofies.party/index.html',
  },
  {
    symbol: 'FLUF',
    name: 'FLUF',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xccc441ac31f02cd96c153db6fd5fe0a2f4e6a68d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xccc441ac31f02cd96c153db6fd5fe0a2f4e6a68d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://fluf.world/',
  },
  {
    symbol: 'RARI',
    name: 'Rarible',
    addresses: [
      {
        chainId: SupportedChainIds.Polygon,
        address: '0x35f8aee672cde8e5fd09c93d2bfe4ff5a9cf0756',
      },
    ],
    logo: {
      src: '',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'GRDS3D',
    name: 'Grados',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x6a10313c77ac58ab5bf102f74b3c4e298e5b34b1',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x6a10313c77ac58ab5bf102f74b3c4e298e5b34b1.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://gradis.art',
  },
  {
    symbol: 'KOLECTIV',
    name: 'Kolectiv',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x4764bc088a27f490353e8cf1558ba02fdc418c65',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x4764bc088a27f490353e8cf1558ba02fdc418c65.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://kolectiv.gg/',
  },
  {
    symbol: 'ELEM',
    name: '\r\nAzuki Elementals',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xb6a37b5d14d502c3ab0ae6f3a0e058bc9517786e',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xb6a37b5d14d502c3ab0ae6f3a0e058bc9517786e.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'FARM',
    name: 'Farm Land by Pixels',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x5c1a0cc6dadf4d0fb31425461df35ba80fcbc110',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x5c1a0cc6dadf4d0fb31425461df35ba80fcbc110.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://pixels.xyz',
  },
  {
    symbol: 'BAKC',
    name: 'BoredApeKennelClub',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xba30e5f9bb24caa003e9f2f0497ad287fdf95623',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xba30e5f9bb24caa003e9f2f0497ad287fdf95623.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://boredapeyachtclub.com/#/kennel-club',
  },
  {
    symbol: 'LOKI',
    name: 'League of Kingdoms ITEM',
    addresses: [
      {
        chainId: SupportedChainIds.Polygon,
        address: '0x4d544035500d7ac1b42329c70eb58e77f8249f0f',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0x4d544035500d7ac1b42329c70eb58e77f8249f0f.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.leagueofkingdoms.com',
  },
  {
    symbol: 'Yogapetz',
    name: 'Yogapetz',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x142e03367ede17cd851477a4287d1f35676e6dc2',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x142e03367ede17cd851477a4287d1f35676e6dc2.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://yogapetz.com',
  },
  {
    symbol: 'Greever NFT',
    name: 'Greever NFT',
    addresses: [
      {
        chainId: SupportedChainIds.Polygon,
        address: '0x53e587e46e9a55454be1e0228a929d20655ced93',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0x53e587e46e9a55454be1e0228a929d20655ced93.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.greever.io',
  },
  {
    symbol: 'INCARNA',
    name: 'OVERWORLD INCARNA',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xfdf5acd92840e796955736b1bb9cc832740744ba',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xfdf5acd92840e796955736b1bb9cc832740744ba.jpg',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'BANDB',
    name: 'Band Bears',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xb4e570232d3e55d2ee850047639dc74da83c7067',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xb4e570232d3e55d2ee850047639dc74da83c7067.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://bongbears.com',
  },
  {
    symbol: 'WOW',
    name: 'World Of Women',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xe785e82358879f061bc3dcac6f0444462d4b5330',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xe785e82358879f061bc3dcac6f0444462d4b5330.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://worldofwomen.art',
  },
  {
    symbol: 'UD',
    name: 'Unstoppable Domains',
    addresses: [
      {
        chainId: SupportedChainIds.Polygon,
        address: '0xa9a6a3626993d487d2dbda3173cf58ca1a9d9e9f',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0xa9a6a3626993d487d2dbda3173cf58ca1a9d9e9f.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://unstoppabledomains.com/',
  },
  {
    symbol: 'SOUL',
    name: 'Seraph Soul Series',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xbb3f21dd9b16741e9822392f753d07da4c6b6cd6',
      },
    ],
    logo: {
      src: 'https://i.seadn.io/s/raw/files/9f73f61f58c68be21565e6451feb9980.jpg?w=500&auto=format',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.seraph.game/',
  },
  {
    symbol: 'OPEPEN',
    name: 'Opepen Edition',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x6339e5e072086621540d0362c4e3cea0d643e114',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x6339e5e072086621540d0362c4e3cea0d643e114.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://opepen.art',
  },
  {
    symbol: 'BABYB',
    name: 'Baby Bears',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x9e629d779be89783263d4c4a765c38eb3f18671c',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x9e629d779be89783263d4c4a765c38eb3f18671c.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://berachain.com',
  },
  {
    symbol: 'LPK',
    name: 'Legendary Pandra King',
    addresses: [
      {
        chainId: SupportedChainIds.BSC,
        address: '0xf250bf5953b601e42e93226f7a9e4e8b9e7435af',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0xf250bf5953b601e42e93226f7a9e4e8b9e7435af.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'Rektguy',
    name: 'Rektguy',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xb852c6b5892256c264cc2c888ea462189154d8d7',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xb852c6b5892256c264cc2c888ea462189154d8d7.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://rektguy.com',
  },
  {
    symbol: 'BRAIN',
    name: 'BrainDrops',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xdfde78d2baec499fe18f2be74b6c287eed9511d7',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xdfde78d2baec499fe18f2be74b6c287eed9511d7.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://braindrops.cloud/',
  },
  {
    symbol: 'NOUN',
    name: 'Nouns',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://nouns.wtf',
  },
  {
    symbol: 'MOMENT',
    name: 'Bright Moments',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x0a1bbd57033f57e7b6743621b79fcb9eb2ce3676',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x0a1bbd57033f57e7b6743621b79fcb9eb2ce3676.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://brightmoments.io/',
  },
  {
    symbol: 'OCS',
    name: 'OnChainShiba',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xe6313d1776e4043d906d5b7221be70cf470f5e87',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xe6313d1776e4043d906d5b7221be70cf470f5e87.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'CHECKS',
    name: 'Checks',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x34eebee6942d8def3c125458d1a86e0a897fd6f9',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x34eebee6942d8def3c125458d1a86e0a897fd6f9.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://checks.art',
  },
  {
    symbol: 'VXTITEMS',
    name: 'Voxie Tactics Items',
    addresses: [
      {
        chainId: SupportedChainIds.Polygon,
        address: '0x8f8e18dbebb8ca4fc2bc7e3425fcdfd5264e33e8',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0x8f8e18dbebb8ca4fc2bc7e3425fcdfd5264e33e8.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://voxies.io',
  },
  {
    symbol: 'COOL',
    name: 'Cool Cats',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x1a92f7381b9f03921564a437210bb9396471050c',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x1a92f7381b9f03921564a437210bb9396471050c.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://coolcatsnft.com',
  },
  {
    symbol: 'COMIC3',
    name: 'PUNKS Comic 3',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xb716600ed99b4710152582a124c697a7fe78adbf',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xb716600ed99b4710152582a124c697a7fe78adbf.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://punkscomic.com/',
  },
  {
    symbol: 'BEANZ',
    name: 'Beanz',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'AP',
    name: 'ALPHA PRESTIGE',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xcbeb9b45ba9fbfbbccc289ee48dadd6fb65ae2a7',
      },
    ],
    logo: {
      src: 'https://logo.nftscan.com/logo/0xcbeb9b45ba9fbfbbccc289ee48dadd6fb65ae2a7.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://ap.fusionist.io/',
  },
]
