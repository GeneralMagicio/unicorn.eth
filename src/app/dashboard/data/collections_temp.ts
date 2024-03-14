import { data } from './data'
import { data2 } from './data2'
import { data3 } from './data3'
import { data4 } from './data4'
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
}

// export const supportedNFTs = (): SupportedNFT[] => {
//   const collections = [
//     ...data.data.collections,
//     ...data2.data.collections,
//     ...data3.data.collections,
//     ...data4.data.collections,
//   ]
//   // @ts-ignore
//   return collections.map((item) => ({
//     symbol: item.symbol,
//     name: item.name,
//     addresses: [
//       {
//         chainId:
//           item.blockchain === 'Ethereum'
//             ? SupportedChainIds.Mainnet
//             : item.blockchain === 'Polygon'
//               ? SupportedChainIds.Polygon
//               : item.blockchain === 'BNB Chain'
//                 ? SupportedChainIds.BSC
//                 : SupportedChainIds.Mainnet,
//         address: item.contractAddress,
//       },
//     ],
//     logo: { src: item.logo || '', width: -1, height: -1, ipfs_hash: '' },
//     website: item.website || '',
//   }))
// }

export const supportedNFTs: SupportedNFT[] = [
  {
    symbol: 'CKITTY',
    name: 'CryptoKitties',
    addresses: [
      {
        chainId: 1,
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
  },
  {
    symbol: 'OPENSTORE',
    name: 'OpenSea Shared Storefront',
    addresses: [
      {
        chainId: 1,
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
        chainId: 1,
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
        chainId: 1,
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
        chainId: 1,
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
        chainId: 1,
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
        chainId: 1,
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
  },
  {
    symbol: 'KODA',
    name: 'KnownOriginDigitalAsset',
    addresses: [
      {
        chainId: 1,
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
  },
  {
    symbol: 'BAYC',
    name: 'BoredApeYachtClub',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'PPG',
    name: 'PudgyPenguins',
    addresses: [
      {
        chainId: 1,
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
        chainId: 1,
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
        chainId: 1,
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
        chainId: 1,
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
        chainId: 1,
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
        chainId: 1,
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
    symbol: 'OTHR',
    name: 'Otherdeed',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'PIX',
    name: 'PlanetIX',
    addresses: [
      {
        chainId: 137,
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
    symbol: 'CBC',
    name: 'Creepz by OVERLORD',
    addresses: [
      {
        chainId: 1,
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
        chainId: 1,
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
        chainId: 1,
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
        chainId: 1,
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
        chainId: 1,
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
        chainId: 56,
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
        chainId: 1,
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
    symbol: 'MVP',
    name: 'YOU THE REAL MVP',
    addresses: [
      {
        chainId: 1,
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
    symbol: '⚇',
    name: 'Meebits',
    addresses: [
      {
        chainId: 1,
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
        chainId: 1,
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
    symbol: 'YKPS',
    name: 'Yakuza Pandas',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'SPORTSBOT',
    name: 'Sports Rollbots',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'Potatoz',
    name: 'Potatoz',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'PXLMN',
    name: 'Pixelmon',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'DEBT',
    name: 'DEBT',
    addresses: [
      {
        chainId: 56,
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
    symbol: 'DOODLE',
    name: 'Doodles',
    addresses: [
      {
        chainId: 1,
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
    symbol: '',
    name: 'NameWrapper',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'BRNFT',
    name: 'Binance Regular NFT',
    addresses: [
      {
        chainId: 56,
        address: '0x1ddb2c0897daf18632662e71fdd2dbdc0eb3a9ec',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0x1ddb2c0897daf18632662e71fdd2dbdc0eb3a9ec.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'AIRT',
    name: 'AirNFTs',
    addresses: [
      {
        chainId: 56,
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
    symbol: 'CloneX',
    name: 'CloneX',
    addresses: [
      {
        chainId: 1,
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
    symbol: '$WORLDBUILDERS',
    name: 'EigenLayer World Builders',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'FT',
    name: 'ForgedToken',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'LAND',
    name: 'Decentraland LAND',
    addresses: [
      {
        chainId: 1,
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
        chainId: 1,
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
    symbol: 'DEGODS',
    name: 'DeGods',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'OCMONK',
    name: 'OnChainMonkey',
    addresses: [
      {
        chainId: 1,
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
        chainId: 1,
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
    symbol: 'WPV1',
    name: 'CryptoPunks V1 (wrapped)',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'MKT2',
    name: 'MakersPlace',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'MBEAN',
    name: 'Azuki Elemental Beans',
    addresses: [
      {
        chainId: 1,
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
        chainId: 1,
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
        chainId: 1,
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
    symbol: '',
    name: 'Synergy of Serra',
    addresses: [
      {
        chainId: 137,
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
    symbol: 'VFT',
    name: 'VeeFriends',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'm',
    name: 'merge.',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'BLOCKS',
    name: 'Art Blocks',
    addresses: [
      {
        chainId: 1,
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
        chainId: 1,
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
    symbol: 'SID',
    name: 'SPACE ID',
    addresses: [
      {
        chainId: 56,
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
    symbol: 'OAT',
    name: 'Galaxy OAT',
    addresses: [
      {
        chainId: 137,
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
    symbol: 'LLPPL',
    name: 'Parallel Avatars',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'KONGZ',
    name: 'CyberKongz',
    addresses: [
      {
        chainId: 1,
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
        chainId: 1,
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
    symbol: 'IO',
    name: 'Imaginary Ones',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'LL',
    name: 'loomlocknft',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'YATC',
    name: 'YouAreTheChampion',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'BITB',
    name: 'Bit Bears',
    addresses: [
      {
        chainId: 1,
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
        chainId: 1,
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
    symbol: 'SAPS',
    name: 'Sappy Seals',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'SUPR',
    name: 'SuperRare',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'RARI',
    name: 'Rarible',
    addresses: [
      {
        chainId: 137,
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
    symbol: 'OPENSTORE',
    name: 'OpenSea Collections',
    addresses: [
      {
        chainId: 137,
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
    symbol: 'GOOF',
    name: 'GOOFIES',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'GRDS3D',
    name: 'Grados',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'FLUF',
    name: 'FLUF',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'KOLECTIV',
    name: 'Kolectiv',
    addresses: [
      {
        chainId: 1,
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
    name: 'Azuki Elementals',
    addresses: [
      {
        chainId: 1,
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
        chainId: 1,
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
    symbol: 'Greever NFT',
    name: 'Greever NFT',
    addresses: [
      {
        chainId: 137,
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
        chainId: 1,
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
    symbol: 'UD',
    name: 'Unstoppable Domains',
    addresses: [
      {
        chainId: 137,
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
    symbol: 'BAKC',
    name: 'BoredApeKennelClub',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'SOUL',
    name: 'Seraph Soul Series',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'BANDB',
    name: 'Band Bears',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'Yogapetz',
    name: 'Yogapetz',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'WOW',
    name: 'World Of Women',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'OPEPEN',
    name: 'Opepen Edition',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'BRAIN',
    name: 'BrainDrops',
    addresses: [
      {
        chainId: 1,
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
        chainId: 1,
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
    symbol: 'LOKI',
    name: 'League of Kingdoms ITEM',
    addresses: [
      {
        chainId: 137,
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
    symbol: 'OCS',
    name: 'OnChainShiba',
    addresses: [
      {
        chainId: 1,
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
        chainId: 1,
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
        chainId: 137,
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
    symbol: 'Rektguy',
    name: 'Rektguy',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'MOMENT',
    name: 'Bright Moments',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'BHERO',
    name: 'Bomber Hero',
    addresses: [
      {
        chainId: 56,
        address: '0x30cc0553f6fa1faf6d7847891b9b36eb559dc618',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0x30cc0553f6fa1faf6d7847891b9b36eb559dc618.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'LAND',
    name: "Sandbox's LANDs",
    addresses: [
      {
        chainId: 137,
        address: '0x9d305a42a3975ee4c1c57555bed5919889dce63f',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0x9d305a42a3975ee4c1c57555bed5919889dce63f.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.sandbox.game/',
  },
  {
    symbol: 'COMIC3',
    name: 'PUNKS Comic 3',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'COOL',
    name: 'Cool Cats',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'BEANZ',
    name: 'Beanz',
    addresses: [
      {
        chainId: 1,
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
    symbol: 'MZ',
    name: 'MetaZellys ETH',
    addresses: [
      {
        chainId: 1,
        address: '0x6ca10bc06de5af062cfd1dedde85b46ef43ec8d3',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x6ca10bc06de5af062cfd1dedde85b46ef43ec8d3.gif',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://metazellys.com',
  },
  {
    symbol: '',
    name: 'SuperFarm Genesis Series',
    addresses: [
      {
        chainId: 1,
        address: '0xe4597f9182ba947f7f3bf8cbc6562285751d5aee',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xe4597f9182ba947f7f3bf8cbc6562285751d5aee.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.superfarm.com/',
  },
  {
    symbol: 'XENT',
    name: 'XEN Torrent',
    addresses: [
      {
        chainId: 1,
        address: '0x0a252663dbcc0b073063d6420a40319e438cfa59',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x0a252663dbcc0b073063d6420a40319e438cfa59.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://xen.network/mainnet/xenft',
  },
  {
    symbol: 'DIDA',
    name: 'DigiDaigaku',
    addresses: [
      {
        chainId: 1,
        address: '0xd1258db6ac08eb0e625b75b371c023da478e94a9',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xd1258db6ac08eb0e625b75b371c023da478e94a9.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://digidaigaku.com/',
  },
  {
    symbol: 'SDOJ',
    name: 'SAVAGE DOGS OMEGA JR',
    addresses: [
      {
        chainId: 137,
        address: '0x2d5196d3b8f039f8d4a1b6ede151f726d17d3f8c',
      },
    ],
    logo: {
      src: 'https://i.seadn.io/s/raw/files/c7230af70ef8414e9f8662922e8c5ed0.png?w=500&auto=format',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'WIZARDS',
    name: 'ForgottenRunesWizardsCult',
    addresses: [
      {
        chainId: 1,
        address: '0x521f9c7505005cfa19a8e5786a9c3c9c9f5e6f42',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x521f9c7505005cfa19a8e5786a9c3c9c9f5e6f42.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://forgottenrunes.com',
  },
  {
    symbol: 'BURROWS',
    name: 'FLUF World: Burrows',
    addresses: [
      {
        chainId: 1,
        address: '0xe51aac67b09eaed6d3d43e794d6bae679cbe09d8',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xe51aac67b09eaed6d3d43e794d6bae679cbe09d8.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.fluf.world',
  },
  {
    symbol: 'YAWANAWA',
    name: 'Winds of Yawanawa by Yawanawa and Refik Anadol',
    addresses: [
      {
        chainId: 1,
        address: '0x7a63d17f5a59bca04b6702f461b1f1a1c59b100b',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x7a63d17f5a59bca04b6702f461b1f1a1c59b100b.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'BOX',
    name: 'RENGA Black Box',
    addresses: [
      {
        chainId: 1,
        address: '0x64ad353bc90a04361c4810ae7b3701f3beb48d7e',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x64ad353bc90a04361c4810ae7b3701f3beb48d7e.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.renga.app',
  },
  {
    symbol: 'DOME_GENESIS',
    name: 'Everdome Genesis Collection',
    addresses: [
      {
        chainId: 1,
        address: '0x475bfaa1848591ae0e6ab69600f48d828f61a80e',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x475bfaa1848591ae0e6ab69600f48d828f61a80e.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://everdome.io',
  },
  {
    symbol: 'CHECKS',
    name: 'Checks',
    addresses: [
      {
        chainId: 1,
        address: '0x036721e5a769cc48b3189efbb9cce4471e8a48b1',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x036721e5a769cc48b3189efbb9cce4471e8a48b1.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://checks.art',
  },
  {
    symbol: 'SEEKERS',
    name: 'Seekers',
    addresses: [
      {
        chainId: 1,
        address: '0xaaf03a65cbd8f01b512cd8d530a675b3963de255',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xaaf03a65cbd8f01b512cd8d530a675b3963de255.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://seekers.xyz/',
  },
  {
    symbol: 'DSC',
    name: '《甲辰年》數字郵票',
    addresses: [
      {
        chainId: 137,
        address: '0xc202401e17e976bbd1749dc209bff0598a8909d1',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0xc202401e17e976bbd1749dc209bff0598a8909d1.jpg',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://stamp.dgsfintech.com',
  },
  {
    symbol: 'VF2',
    name: 'VeeFriends Series 2',
    addresses: [
      {
        chainId: 1,
        address: '0x9378368ba6b85c1fba5b131b530f5f5bedf21a18',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x9378368ba6b85c1fba5b131b530f5f5bedf21a18.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://series2.veefriends.com',
  },
  {
    symbol: 'WBVS',
    name: 'Webverse',
    addresses: [
      {
        chainId: 1,
        address: '0x0cefc093a5b3964f3230d7de8dc07e3b531c48fc',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x0cefc093a5b3964f3230d7de8dc07e3b531c48fc.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'TRNR',
    name: 'Trainers',
    addresses: [
      {
        chainId: 1,
        address: '0x8a3749936e723325c6b645a0901470cd9e790b94',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x8a3749936e723325c6b645a0901470cd9e790b94.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://pixelmon.ai/',
  },
  {
    symbol: 'KODA',
    name: 'KnownOriginDigitalAsset',
    addresses: [
      {
        chainId: 1,
        address: '0xabb3738f04dc2ec20f4ae4462c3d069d02ae045b',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xabb3738f04dc2ec20f4ae4462c3d069d02ae045b.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://knownorigin.io',
  },
  {
    symbol: 'GHC',
    name: 'Gas Hero Coupon NFT',
    addresses: [
      {
        chainId: 137,
        address: '0x903d8caa9c94075a08d3e7758b7a20b9fc604854',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0x903d8caa9c94075a08d3e7758b7a20b9fc604854.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://gashero.com',
  },
  {
    symbol: 'HONEYCOMB',
    name: 'Honey Comb',
    addresses: [
      {
        chainId: 1,
        address: '0xcb0477d1af5b8b05795d89d59f4667b59eae9244',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xcb0477d1af5b8b05795d89d59f4667b59eae9244.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.0xhoneyjar.xyz/',
  },
  {
    symbol: 'AZP',
    name: 'Urbit ID',
    addresses: [
      {
        chainId: 1,
        address: '0x33eecbf908478c10614626a9d304bfe18b78dd73',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x33eecbf908478c10614626a9d304bfe18b78dd73.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://urbit.org/primer',
  },
  {
    symbol: 'TRV',
    name: 'Treeverse',
    addresses: [
      {
        chainId: 1,
        address: '0x1b829b926a14634d36625e60165c0770c09d02b2',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x1b829b926a14634d36625e60165c0770c09d02b2.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.treeverse.net/',
  },
  {
    symbol: 'BG Dice',
    name: 'BlockGames Dice',
    addresses: [
      {
        chainId: 1,
        address: '0x0581ddf7a136c6837429a46c6cb7b388a3e52971',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x0581ddf7a136c6837429a46c6cb7b388a3e52971.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://BlockGames.com',
  },
  {
    symbol: 'MFER',
    name: 'mfer',
    addresses: [
      {
        chainId: 1,
        address: '0x79fcdef22feed20eddacbb2587640e45491b757f',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x79fcdef22feed20eddacbb2587640e45491b757f.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'CTC',
    name: 'ChameleonTravelClub',
    addresses: [
      {
        chainId: 1,
        address: '0x9f6dad7762ce8181efe3352cd1d1978ef143be72',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x9f6dad7762ce8181efe3352cd1d1978ef143be72.jpg',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.chameleontravel.club',
  },
  {
    symbol: 'KARMA',
    name: 'Karma',
    addresses: [
      {
        chainId: 1,
        address: '0x86cc280d0bac0bd4ea38ba7d31e895aa20cceb4b',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x86cc280d0bac0bd4ea38ba7d31e895aa20cceb4b.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://onchainmonkey.com/',
  },
  {
    symbol: 'FROG',
    name: 'The Plague',
    addresses: [
      {
        chainId: 1,
        address: '0xc379e535caff250a01caa6c3724ed1359fe5c29b',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xc379e535caff250a01caa6c3724ed1359fe5c29b.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.plaguebrands.io/',
  },
  {
    symbol: 'LAND',
    name: 'Mavia Land',
    addresses: [
      {
        chainId: 1,
        address: '0x4a537f61ef574153664c0dbc8c8f4b900cacbe5d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x4a537f61ef574153664c0dbc8c8f4b900cacbe5d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://mavia.com',
  },
  {
    symbol: 'MPB',
    name: 'Matrix Plus Box',
    addresses: [
      {
        chainId: 56,
        address: '0x34087bdd107c288f98fd76bf4e61c849860643ba',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0x34087bdd107c288f98fd76bf4e61c849860643ba.jpg',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'QART',
    name: 'Quantum Art',
    addresses: [
      {
        chainId: 1,
        address: '0x46ac8540d698167fcbb9e846511beb8cf8af9bd8',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x46ac8540d698167fcbb9e846511beb8cf8af9bd8.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://quantum.art',
  },
  {
    symbol: 'PS',
    name: 'Pancake Squad',
    addresses: [
      {
        chainId: 56,
        address: '0x0a8901b0e25deb55a87524f0cc164e9644020eba',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0x0a8901b0e25deb55a87524f0cc164e9644020eba.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'MHC',
    name: 'Mutant Hound Collars',
    addresses: [
      {
        chainId: 1,
        address: '0xae99a698156ee8f8d07cbe7f271c31eeaac07087',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xae99a698156ee8f8d07cbe7f271c31eeaac07087.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.mutantdao.com/',
  },
  {
    symbol: 'TOADZ',
    name: 'Cryptoadz',
    addresses: [
      {
        chainId: 1,
        address: '0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://cryptoadz.io',
  },
  {
    symbol: '0N1',
    name: '0N1 Force',
    addresses: [
      {
        chainId: 1,
        address: '0x3bf2922f4520a8ba0c2efc3d2a1539678dad5e9d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x3bf2922f4520a8ba0c2efc3d2a1539678dad5e9d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://0N1force.com',
  },
  {
    symbol: 'KONGZ VX',
    name: 'CyberKongz VX',
    addresses: [
      {
        chainId: 1,
        address: '0x7ea3cca10668b8346aec0bf1844a49e995527c8b',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x7ea3cca10668b8346aec0bf1844a49e995527c8b.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://cyberkongz.com',
  },
  {
    symbol: 'FfC',
    name: 'Flyfish Club',
    addresses: [
      {
        chainId: 1,
        address: '0xc9d8f15803c645e98b17710a0b6593f097064bef',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xc9d8f15803c645e98b17710a0b6593f097064bef.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.flyfishclub.com/',
  },
  {
    symbol: 'ZED',
    name: 'ZED Horse',
    addresses: [
      {
        chainId: 137,
        address: '0x67f4732266c7300cca593c814d46bee72e40659f',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0x67f4732266c7300cca593c814d46bee72e40659f.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://zed.run',
  },
  {
    symbol: 'fvSOLV',
    name: 'SOLV Flexible Date Vesting Voucher',
    addresses: [
      {
        chainId: 56,
        address: '0xfed93e410a6a45bc045bc91deaae1fd642e4af7a',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0xfed93e410a6a45bc045bc91deaae1fd642e4af7a.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'IMPOSTORS',
    name: 'Impostors Genesis',
    addresses: [
      {
        chainId: 1,
        address: '0x3110ef5f612208724ca51f5761a69081809f03b7',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x3110ef5f612208724ca51f5761a69081809f03b7.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://impostors.gg',
  },
  {
    symbol: 'NKMGS',
    name: 'Nakamigos',
    addresses: [
      {
        chainId: 1,
        address: '0xd774557b647330c91bf44cfeab205095f7e6c367',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xd774557b647330c91bf44cfeab205095f7e6c367.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://nakamigos.io/',
  },
  {
    symbol: 'KAIJU',
    name: 'KaijuKingz',
    addresses: [
      {
        chainId: 1,
        address: '0x0c2e57efddba8c768147d1fdf9176a0a6ebd5d83',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x0c2e57efddba8c768147d1fdf9176a0a6ebd5d83.gif',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://kaijukingz.io/#/',
  },
  {
    symbol: 'aD',
    name: 'alignDRAW',
    addresses: [
      {
        chainId: 1,
        address: '0x9cf0ab1cc434db83097b7e9c831a764481dec747',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x9cf0ab1cc434db83097b7e9c831a764481dec747.svg',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://aligndraw.fellowship.xyz/',
  },
  {
    symbol: 'PIRATE',
    name: 'Pirate',
    addresses: [
      {
        chainId: 1,
        address: '0x1b41d54b3f8de13d58102c50d7431fd6aa1a2c48',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x1b41d54b3f8de13d58102c50d7431fd6aa1a2c48.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://piratenation.game',
  },
  {
    symbol: '2061',
    name: 'Matr1x 2061',
    addresses: [
      {
        chainId: 1,
        address: '0x9a27d13a4896baa03843a0728dff6007d665f8ee',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x9a27d13a4896baa03843a0728dff6007d665f8ee.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://matr1x.io/',
  },
  {
    symbol: 'Worlds',
    name: 'L3E7 Worlds',
    addresses: [
      {
        chainId: 1,
        address: '0x20577896ea6113ed8c94b2f08f3893bdc08eba22',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x20577896ea6113ed8c94b2f08f3893bdc08eba22.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.l3e7.io/',
  },
  {
    symbol: 'GHCH',
    name: 'Gas Hero Common Heroes',
    addresses: [
      {
        chainId: 137,
        address: '0x834160ca762bc929152333fb909f670f17a3dd44',
      },
    ],
    logo: {
      src: 'https://i.seadn.io/s/raw/files/caaf0a4eb9e38e40e37181d8fa7af2e7.png?w=500&auto=format',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'HOPE',
    name: 'HOPE',
    addresses: [
      {
        chainId: 1,
        address: '0xc4973de5ee925b8219f1e74559fb217a8e355ecf',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xc4973de5ee925b8219f1e74559fb217a8e355ecf.gif',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://azragames.com',
  },
  {
    symbol: 'ASSET',
    name: 'The Sandbox ASSETS',
    addresses: [
      {
        chainId: 1,
        address: '0xa342f5d851e866e18ff98f351f2c6637f4478db5',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xa342f5d851e866e18ff98f351f2c6637f4478db5.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'KILLABEARS',
    name: 'KILLABEARS',
    addresses: [
      {
        chainId: 1,
        address: '0xc99c679c50033bbc5321eb88752e89a93e9e83c5',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xc99c679c50033bbc5321eb88752e89a93e9e83c5.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://killabears.com',
  },
  {
    symbol: 'LootRealm',
    name: 'Realms (for Adventurers)',
    addresses: [
      {
        chainId: 1,
        address: '0x7afe30cb3e53dba6801aa0ea647a0ecea7cbe18d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x7afe30cb3e53dba6801aa0ea647a0ecea7cbe18d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://realms.world/',
  },
  {
    symbol: 'MON',
    name: 'SOMO Monoliths',
    addresses: [
      {
        chainId: 1,
        address: '0x761c54a53d273ebfd087bd6476e32814caed49db',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x761c54a53d273ebfd087bd6476e32814caed49db.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://monolith.somo.xyz/',
  },
  {
    symbol: 'DPB',
    name: 'DeepBlack',
    addresses: [
      {
        chainId: 1,
        address: '0xd70f41dd5875eee7fa9dd8048567bc932124a8d2',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xd70f41dd5875eee7fa9dd8048567bc932124a8d2.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://deepblack.io/',
  },
  {
    symbol: 'AIFACharacter',
    name: 'ASMAIFAAllStarsCharacter',
    addresses: [
      {
        chainId: 1,
        address: '0x96be46c50e882dbd373081d08e0cde2b055adf6c',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x96be46c50e882dbd373081d08e0cde2b055adf6c.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://aifa.football',
  },
  {
    symbol: 'DEFIAPES',
    name: 'DeFiApes',
    addresses: [
      {
        chainId: 1,
        address: '0x3c6fbc94288f5af5201085948ddb18aded2e6879',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x3c6fbc94288f5af5201085948ddb18aded2e6879.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://ape.fi',
  },
  {
    symbol: 'UNI-V3-POS',
    name: 'Uniswap V3 Positions NFT-V1',
    addresses: [
      {
        chainId: 137,
        address: '0xc36442b4a4522e871399cd717abdd847ab11fe88',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0xc36442b4a4522e871399cd717abdd847ab11fe88.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'DEAD',
    name: 'DeadHeads',
    addresses: [
      {
        chainId: 1,
        address: '0x6fc355d4e0ee44b292e50878f49798ff755a5bbc',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x6fc355d4e0ee44b292e50878f49798ff755a5bbc.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://deadheads.io',
  },
  {
    symbol: 'SSTITN',
    name: 'Steady Stack Titans',
    addresses: [
      {
        chainId: 1,
        address: '0x916c6af08bf922eaf80c05975886c0a421c78a35',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x916c6af08bf922eaf80c05975886c0a421c78a35.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://linktr.ee/steadystack',
  },
  {
    symbol: 'Kubz',
    name: 'Kubz',
    addresses: [
      {
        chainId: 1,
        address: '0xeb2dfc54ebafca8f50efcc1e21a9d100b5aeb349',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xeb2dfc54ebafca8f50efcc1e21a9d100b5aeb349.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://keungz.com',
  },
  {
    symbol: 'LOOT',
    name: 'Loot',
    addresses: [
      {
        chainId: 1,
        address: '0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://lootproject.com',
  },
  {
    symbol: '$SGNG',
    name: 'NexianGems',
    addresses: [
      {
        chainId: 1,
        address: '0x7bfd9a55f4c00783b5a8ea18f7735e1a405dd520',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x7bfd9a55f4c00783b5a8ea18f7735e1a405dd520.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://skybornegenesis.com/',
  },
  {
    symbol: 'PRSN',
    name: 'Persona',
    addresses: [
      {
        chainId: 1,
        address: '0xbabafdd8045740449a42b788a26e9b3a32f88ac1',
      },
    ],
    logo: {
      src: 'https://i.seadn.io/s/raw/files/0b6b937e62ff764713c2961af0b5e80b.png?w=500&auto=format',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://personajourney.io/',
  },
  {
    symbol: '✺RUGNFT',
    name: 'RugGenesis NFT',
    addresses: [
      {
        chainId: 1,
        address: '0x8ff1523091c9517bc328223d50b52ef450200339',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x8ff1523091c9517bc328223d50b52ef450200339.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.rug.fm/',
  },
  {
    symbol: 'OAT',
    name: 'Galaxy OAT',
    addresses: [
      {
        chainId: 137,
        address: '0x1871464f087db27823cff66aa88599aa4815ae95',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0x1871464f087db27823cff66aa88599aa4815ae95.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://galxe.com',
  },
  {
    symbol: 'CATGIRLNFT',
    name: 'Catgirl NFT',
    addresses: [
      {
        chainId: 56,
        address: '0xe796f4b5253a4b3edb4bb3f054c03f147122bacd',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0xe796f4b5253a4b3edb4bb3f054c03f147122bacd.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://catgirl.io',
  },
  {
    symbol: '',
    name: 'Galxe OAT',
    addresses: [
      {
        chainId: 137,
        address: '0xbf232a580c3306f7a7ca90d09ec241f6818d06fa',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0xbf232a580c3306f7a7ca90d09ec241f6818d06fa.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://galxe.com',
  },
  {
    symbol: 'LPK',
    name: 'Legendary Pandra King',
    addresses: [
      {
        chainId: 56,
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
    symbol: 'Egg',
    name: 'RTFKT Animus Egg 🥚',
    addresses: [
      {
        chainId: 1,
        address: '0x6c410cf0b8c113dc6a7641b431390b11d5515082',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x6c410cf0b8c113dc6a7641b431390b11d5515082.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'SBSH',
    name: 'SHIBOSHIS',
    addresses: [
      {
        chainId: 1,
        address: '0x11450058d796b02eb53e65374be59cff65d3fe7f',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x11450058d796b02eb53e65374be59cff65d3fe7f.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://shiboshis.shibaswap.com/#/',
  },
  {
    symbol: 'GOTCHI',
    name: 'Aavegotchi',
    addresses: [
      {
        chainId: 137,
        address: '0x86935f11c86623dec8a25696e1c19a8659cbf95d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0x86935f11c86623dec8a25696e1c19a8659cbf95d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://aavegotchi.com',
  },
  {
    symbol: 'KZG',
    name: 'Keungz Genesis',
    addresses: [
      {
        chainId: 1,
        address: '0x76cc4742f7eaa89a93576505dec37c2c66a76ab7',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x76cc4742f7eaa89a93576505dec37c2c66a76ab7.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://keungz.com',
  },
  {
    symbol: 'POETS',
    name: 'Lost Poets',
    addresses: [
      {
        chainId: 1,
        address: '0x4b3406a41399c7fd2ba65cbc93697ad9e7ea61e5',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x4b3406a41399c7fd2ba65cbc93697ad9e7ea61e5.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://lostpoets.xyz/',
  },
  {
    symbol: 'PMONC',
    name: 'PolkamonOfficialCollection',
    addresses: [
      {
        chainId: 56,
        address: '0x85f0e02cb992aa1f9f47112f815f519ef1a59e2d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0x85f0e02cb992aa1f9f47112f815f519ef1a59e2d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://polychainmonsters.com',
  },
  {
    symbol: 'DINOSTY',
    name: 'Age of Dino - Dinosty',
    addresses: [
      {
        chainId: 1,
        address: '0xf4ecc1c74d120649f6598c7a217abaffdf76cd4f',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xf4ecc1c74d120649f6598c7a217abaffdf76cd4f.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://ageofdino.com',
  },
  {
    symbol: 'NOBODY',
    name: 'Nobody',
    addresses: [
      {
        chainId: 1,
        address: '0xa28d6a8eb65a41f3958f1de62cbfca20b817e66a',
      },
    ],
    logo: {
      src: 'https://raw.seadn.io/files/8a1d041699c74e88931bf6b06556e179.jpg',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://nobody.xyz',
  },
  {
    symbol: 'TENDER',
    name: 'TheCurrency',
    addresses: [
      {
        chainId: 1,
        address: '0xaadc2d4261199ce24a4b0a57370c4fcf43bb60aa',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xaadc2d4261199ce24a4b0a57370c4fcf43bb60aa.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://currency.nft.heni.com/',
  },
  {
    symbol: 'TTC',
    name: 'Travel Tiger Club',
    addresses: [
      {
        chainId: 1,
        address: '0x55700cd2e91f39bc56f589b346dac12a7907ea08',
      },
    ],
    logo: {
      src: 'https://logo.nftscan.com/logo/0x55700cd2e91f39bc56f589b346dac12a7907ea08.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.travala.com/nft',
  },
  {
    symbol: 'PXQ',
    name: 'PXQuest Adventurer',
    addresses: [
      {
        chainId: 1,
        address: '0x17ed38f5f519c6ed563be6486e629041bed3dfbc',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x17ed38f5f519c6ed563be6486e629041bed3dfbc.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://chronoforge.gg',
  },
  {
    symbol: 'TREE',
    name: 'NFTrees',
    addresses: [
      {
        chainId: 1,
        address: '0xeaa4c58427c184413b04db47889b28b5c98ebb7b',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xeaa4c58427c184413b04db47889b28b5c98ebb7b.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://treeverse.net',
  },
  {
    symbol: 'AVG',
    name: 'adidas Virtual Gear',
    addresses: [
      {
        chainId: 1,
        address: '0xba0c9cf4da821dba98407cc4f9c11f6c7a5f9bbc',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xba0c9cf4da821dba98407cc4f9c11f6c7a5f9bbc.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.adidas.com/metaverse',
  },
  {
    symbol: 'GHB',
    name: 'Gas Hero Badge (Official)',
    addresses: [
      {
        chainId: 137,
        address: '0x39ad68c0ca12907c5f60a50c5b5f045cab16a3eb',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0x39ad68c0ca12907c5f60a50c5b5f045cab16a3eb.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://gashero.com',
  },
  {
    symbol: 'PP',
    name: 'PudgyPresent',
    addresses: [
      {
        chainId: 1,
        address: '0x062e691c2054de82f28008a8ccc6d7a1c8ce060d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x062e691c2054de82f28008a8ccc6d7a1c8ce060d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://pudgypenguins.com',
  },
  {
    symbol: 'AS',
    name: 'Astrobot Society',
    addresses: [
      {
        chainId: 1,
        address: '0xf845e3d7ae916ca50c7db40808e9cc579b5f6705',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xf845e3d7ae916ca50c7db40808e9cc579b5f6705.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://astrobot.tokenmetrics.com',
  },
  {
    symbol: 'TENJIN',
    name: 'TENJIN',
    addresses: [
      {
        chainId: 1,
        address: '0xd0f6a80064580b685e71359277370d6d4eece3a4',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xd0f6a80064580b685e71359277370d6d4eece3a4.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.skyarkchronicles.com',
  },
  {
    symbol: 'P22',
    name: 'PHOTOPIA 2022 - Genesis Edition',
    addresses: [
      {
        chainId: 1,
        address: '0xaf555c317608d4f9aebae2c97bb2984656f408df',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xaf555c317608d4f9aebae2c97bb2984656f408df.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://nft.photopia-hamburg.com/',
  },
  {
    symbol: 'CDB',
    name: 'CryptoDickbutts S3',
    addresses: [
      {
        chainId: 1,
        address: '0x42069abfe407c60cf4ae4112bedead391dba1cdb',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x42069abfe407c60cf4ae4112bedead391dba1cdb.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://cryptodickbutts.com/',
  },
  {
    symbol: 'MintID',
    name: 'MintID',
    addresses: [
      {
        chainId: 1,
        address: '0x9236ca1d6e59f8ab672269443e13669d0bd5b353',
      },
    ],
    logo: {
      src: 'https://logo.nftscan.com/logo/0x8fb956ce2921954c45cb3bb41978c4c6c9736af2.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://mintchain.io',
  },
  {
    symbol: 'BNKLR',
    name: 'Bonkler',
    addresses: [
      {
        chainId: 1,
        address: '0xabfae8a54e6817f57f9de7796044e9a60e61ad67',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xabfae8a54e6817f57f9de7796044e9a60e61ad67.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'PB',
    name: 'Pancake Bunnies',
    addresses: [
      {
        chainId: 56,
        address: '0xdf7952b35f24acf7fc0487d01c8d5690a60dba07',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0xdf7952b35f24acf7fc0487d01c8d5690a60dba07.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'SHEB',
    name: 'Sheboshis',
    addresses: [
      {
        chainId: 1,
        address: '0x7b463415d67b013d5f1106fd3df048973bc214dd',
      },
    ],
    logo: {
      src: 'https://i.seadn.io/s/raw/files/696b947d650d031f1ee481ab561f5161.jpg?w=500&auto=format',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'CITIZEN',
    name: 'CryptoCitizens',
    addresses: [
      {
        chainId: 1,
        address: '0xbdde08bd57e5c9fd563ee7ac61618cb2ecdc0ce0',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xbdde08bd57e5c9fd563ee7ac61618cb2ecdc0ce0.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.brightmoments.io',
  },
  {
    symbol: 'DNA',
    name: 'Zerion DNA 1.0',
    addresses: [
      {
        chainId: 1,
        address: '0x932261f9fc8da46c4a22e31b45c4de60623848bf',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x932261f9fc8da46c4a22e31b45c4de60623848bf.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://zerion.io',
  },
  {
    symbol: 'Cat',
    name: 'LaserCat',
    addresses: [
      {
        chainId: 1,
        address: '0x08ba8cbbefa64aaf9df25e57fe3f15ecc277af74',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x08ba8cbbefa64aaf9df25e57fe3f15ecc277af74.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://lasercat.co/',
  },
  {
    symbol: 'TinFun',
    name: 'TinFun',
    addresses: [
      {
        chainId: 1,
        address: '0xc274a97f1691ef390f662067e95a6eff1f99b504',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xc274a97f1691ef390f662067e95a6eff1f99b504.jpg',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://tinfun.com',
  },
  {
    symbol: 'VVVS1',
    name: 'vVv Season 1',
    addresses: [
      {
        chainId: 1,
        address: '0xdbdef48f7546e279cf9253b6559f0573ea392e36',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xdbdef48f7546e279cf9253b6559f0573ea392e36.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.vvv.exchange/',
  },
  {
    symbol: 'MAXPAINANDFRENSOPENEDITIONBYXCOPY',
    name: '(MAX PAIN AND FRENS OPEN EDITION BY XCOPY',
    addresses: [
      {
        chainId: 1,
        address: '0xd1169e5349d1cb9941f3dcba135c8a4b9eacfdde',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xd1169e5349d1cb9941f3dcba135c8a4b9eacfdde.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://xcopy.art',
  },
  {
    symbol: 'GHITM',
    name: 'Gas Hero Items',
    addresses: [
      {
        chainId: 137,
        address: '0xf6011e7f61cc9154839f0b10af7372cea8000f71',
      },
    ],
    logo: {
      src: 'https://i.seadn.io/s/raw/files/a5505cd24ba4f42c2bdf903ee725b069.png?w=500&auto=format',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'ECF',
    name: 'Ether Cards Founder',
    addresses: [
      {
        chainId: 1,
        address: '0x97ca7fe0b0288f5eb85f386fed876618fb9b8ab8',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x97ca7fe0b0288f5eb85f386fed876618fb9b8ab8.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://sale.ether.cards',
  },
  {
    symbol: 'M.F',
    name: 'Murakami.Flowers',
    addresses: [
      {
        chainId: 1,
        address: '0x7d8820fa92eb1584636f4f5b8515b5476b75171a',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x7d8820fa92eb1584636f4f5b8515b5476b75171a.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://murakamiflowers.kaikaikiki.com/',
  },
  {
    symbol: 'INFA',
    name: 'Influence Asteroids',
    addresses: [
      {
        chainId: 1,
        address: '0x6e4c6d9b0930073e958abd2aba516b885260b8ff',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x6e4c6d9b0930073e958abd2aba516b885260b8ff.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.influenceth.io',
  },
  {
    symbol: 'CHIMP',
    name: 'Chimpers',
    addresses: [
      {
        chainId: 1,
        address: '0x80336ad7a747236ef41f47ed2c7641828a480baa',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x80336ad7a747236ef41f47ed2c7641828a480baa.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.chimpers.xyz/',
  },
  {
    symbol: 'OVR Land',
    name: 'OVRLand',
    addresses: [
      {
        chainId: 137,
        address: '0x93c46aa4ddfd0413d95d0ef3c478982997ce9861',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0x93c46aa4ddfd0413d95d0ef3c478982997ce9861.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.ovr.ai/',
  },
  {
    symbol: 'FSMC',
    name: 'FULL SEND METACARD',
    addresses: [
      {
        chainId: 1,
        address: '0x7ecb204fed7e386386cab46a1fcb823ec5067ad5',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x7ecb204fed7e386386cab46a1fcb823ec5067ad5.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://metacard.io',
  },
  {
    symbol: 'JNC',
    name: 'JRNY NFT Club',
    addresses: [
      {
        chainId: 1,
        address: '0x0b4b2ba334f476c8f41bfe52a428d6891755554d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x0b4b2ba334f476c8f41bfe52a428d6891755554d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://jrny.club',
  },
  {
    symbol: 'NINJA',
    name: 'Ninja Squad',
    addresses: [
      {
        chainId: 1,
        address: '0x8c186802b1992f7650ac865d4ca94d55ff3c0d17',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x8c186802b1992f7650ac865d4ca94d55ff3c0d17.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://ninjasquad.co',
  },
  {
    symbol: 'ELEPHANT-NFT-V1',
    name: 'Elephant Money Unlimited NFT-V1',
    addresses: [
      {
        chainId: 56,
        address: '0xb92afedc8f8618be4198fbe5d97adb7c60ab3198',
      },
    ],
    logo: {
      src: 'https://openseauserdata.com/files/33d33997fbd8718098d0cafa1c3fde06.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'BGLD',
    name: 'BlackGold',
    addresses: [
      {
        chainId: 56,
        address: '0x074f24ac119d84be82a386ca9decad38b81738fa',
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
    symbol: '',
    name: 'Somnium Space Land',
    addresses: [
      {
        chainId: 1,
        address: '0x913ae503153d9a335398d0785ba60a2d63ddb4e2',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x913ae503153d9a335398d0785ba60a2d63ddb4e2.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.somniumspace.com/',
  },
  {
    symbol: 'EIGENWORLDS',
    name: 'EigenWorlds',
    addresses: [
      {
        chainId: 1,
        address: '0x8d0802559775c70fb505f22988a4fd4a4f6d3b62',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x8d0802559775c70fb505f22988a4fd4a4f6d3b62.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'zNS',
    name: 'Zero Name Service',
    addresses: [
      {
        chainId: 1,
        address: '0xc2e9678a71e50e5aed036e00e9c5caeb1ac5987d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xc2e9678a71e50e5aed036e00e9c5caeb1ac5987d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://www.WilderWorld.com',
  },
  {
    symbol: 'QQL-MP',
    name: 'QQL Mint Pass',
    addresses: [
      {
        chainId: 1,
        address: '0xc73b17179bf0c59cd5860bb25247d1d1092c1088',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xc73b17179bf0c59cd5860bb25247d1d1092c1088.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://qql.art',
  },
  {
    symbol: 'RKL',
    name: 'RumbleKongLeague',
    addresses: [
      {
        chainId: 1,
        address: '0xef0182dc0574cd5874494a120750fd222fdb909a',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xef0182dc0574cd5874494a120750fd222fdb909a.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://www.rumblekongleague.com',
  },
  {
    symbol: 'SPP',
    name: 'SERAPHPriorityPass',
    addresses: [
      {
        chainId: 1,
        address: '0xa38b204ce561eb5af49614944e0129d9c8d43354',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xa38b204ce561eb5af49614944e0129d9c8d43354.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.seraph.game/',
  },
  {
    symbol: 'PGG',
    name: 'Project Godjira Genesis',
    addresses: [
      {
        chainId: 1,
        address: '0x9ada21a8bc6c33b49a089cfc1c24545d2a27cd81',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x9ada21a8bc6c33b49a089cfc1c24545d2a27cd81.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://pg-group.io/',
  },
  {
    symbol: 'SBU',
    name: 'Social BEES University',
    addresses: [
      {
        chainId: 1,
        address: '0x4848a07744e46bb3ea93ad4933075a4fa47b1162',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x4848a07744e46bb3ea93ad4933075a4fa47b1162.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://socialbees.io/',
  },
  {
    symbol: 'LIZARD',
    name: 'Ethlizards',
    addresses: [
      {
        chainId: 1,
        address: '0x7f312a75b62846033bc5471c5bcb94b1abfaf06d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x7f312a75b62846033bc5471c5bcb94b1abfaf06d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://ethlizards.io',
  },
  {
    symbol: 'BM',
    name: 'Bi-Mech',
    addresses: [
      {
        chainId: 56,
        address: '0x84eadf01bd0bcd90bd8eed1c610b24be1bc01260',
      },
    ],
    logo: {
      src: 'https://openseauserdata.com/files/e2367bd0183ad6d26a067001d10e73c1.jpg',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://ap.fusionist.io/',
  },
  {
    symbol: 'CANDYPILL',
    name: 'Candy Collective: Candy Pills',
    addresses: [
      {
        chainId: 1,
        address: '0x4dc5752e5efc04be91b2880ab3c0173e9d55ff74',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x4dc5752e5efc04be91b2880ab3c0173e9d55ff74.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.kollectiv.io',
  },
  {
    symbol: 'AOI',
    name: 'AOI Engine',
    addresses: [
      {
        chainId: 1,
        address: '0x8cdbd7010bd197848e95c1fd7f6e870aac9b0d3c',
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
    symbol: 'ASMBrain',
    name: 'ASMBrain',
    addresses: [
      {
        chainId: 1,
        address: '0xd0318da435dbce0b347cc6faa330b5a9889e3585',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xd0318da435dbce0b347cc6faa330b5a9889e3585.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.alteredstatemachine.xyz/',
  },
  {
    symbol: 'DOTS',
    name: 'DOTs',
    addresses: [
      {
        chainId: 1,
        address: '0xd07597b64b4878add0965bb1727247ced90c6ce8',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xd07597b64b4878add0965bb1727247ced90c6ce8.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'MMC',
    name: 'MonsterMyCity',
    addresses: [
      {
        chainId: 1,
        address: '0x81521a9cea2aeea9cdde68a3ff02d1943ab59ebd',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x81521a9cea2aeea9cdde68a3ff02d1943ab59ebd.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://monstermy.city',
  },
  {
    symbol: 'MERGE',
    name: 'Wonders of The First: Character Proofs',
    addresses: [
      {
        chainId: 1,
        address: '0x05f08b01971cf70bcd4e743a8906790cfb9a8fb8',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x05f08b01971cf70bcd4e743a8906790cfb9a8fb8.jpg',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.wondersotf.xyz/',
  },
  {
    symbol: 'DeBox',
    name: 'DeBox Guardians Penguin',
    addresses: [
      {
        chainId: 1,
        address: '0x58cff419613c00a4828f774df8c2ca134dea97ce',
      },
    ],
    logo: {
      src: 'https://logo.nftscan.com/logo/0x58cff419613c00a4828f774df8c2ca134dea97ce.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://debox.pro',
  },
  {
    symbol: 'TGLP GEN',
    name: 'TGLP Genesis',
    addresses: [
      {
        chainId: 1,
        address: '0x28ce223853d123b52c74439b10b43366d73fd3b5',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x28ce223853d123b52c74439b10b43366d73fd3b5.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.tenset.io/en',
  },
  {
    symbol: 'MH',
    name: 'Mutant Hounds',
    addresses: [
      {
        chainId: 1,
        address: '0x354634c4621cdfb7a25e6486cca1e019777d841b',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x354634c4621cdfb7a25e6486cca1e019777d841b.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'SPROTO',
    name: 'Sproto Gremlins',
    addresses: [
      {
        chainId: 1,
        address: '0xeeca64ea9fcf99a22806cd99b3d29cf6e8d54925',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xeeca64ea9fcf99a22806cd99b3d29cf6e8d54925.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://www.hpos10i.com',
  },
  {
    symbol: 'VOX',
    name: 'VOX Series 2',
    addresses: [
      {
        chainId: 1,
        address: '0xf76179bb0924ba7da8e7b7fc2779495d7a7939d8',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xf76179bb0924ba7da8e7b7fc2779495d7a7939d8.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://collectvox.com',
  },
  {
    symbol: 'EXPLORE',
    name: 'Art Blocks Explorations',
    addresses: [
      {
        chainId: 1,
        address: '0x942bc2d3e7a589fe5bd4a5c6ef9727dfd82f5c8a',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x942bc2d3e7a589fe5bd4a5c6ef9727dfd82f5c8a.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'MNM',
    name: 'Metamon',
    addresses: [
      {
        chainId: 56,
        address: '0xf24bf668aa087990f1d40ababf841456e771913c',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0xf24bf668aa087990f1d40ababf841456e771913c.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'TMLS',
    name: 'Timeless',
    addresses: [
      {
        chainId: 1,
        address: '0x704bf12276f5c4bc9349d0e119027ead839b081b',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x704bf12276f5c4bc9349d0e119027ead839b081b.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://treeverse.net',
  },
  {
    symbol: 'WGAME',
    name: 'Wolf Game',
    addresses: [
      {
        chainId: 1,
        address: '0x7f36182dee28c45de6072a34d29855bae76dbe2f',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x7f36182dee28c45de6072a34d29855bae76dbe2f.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://wolf.game',
  },
  {
    symbol: 'Ordinal Kubz',
    name: 'Ordinal Kubz',
    addresses: [
      {
        chainId: 1,
        address: '0xc589770757cd0d372c54568bf7e5e1d56b958015',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xc589770757cd0d372c54568bf7e5e1d56b958015.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://keungz.com',
  },
  {
    symbol: 'RONIN',
    name: 'Ragnarok',
    addresses: [
      {
        chainId: 1,
        address: '0x497a9a79e82e6fc0ff10a16f6f75e6fcd5ae65a8',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x497a9a79e82e6fc0ff10a16f6f75e6fcd5ae65a8.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://77-bit.com',
  },
  {
    symbol: 'KEY',
    name: 'CEDEN Keystone NFT Nodes',
    addresses: [
      {
        chainId: 1,
        address: '0x139025de5fcf3d21b89420ffea411fa00c6dcb34',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x139025de5fcf3d21b89420ffea411fa00c6dcb34.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://ceden.network',
  },
  {
    symbol: 'CVPA',
    name: 'Cryptovoxels Parcel',
    addresses: [
      {
        chainId: 1,
        address: '0x79986af15539de2db9a5086382daeda917a9cf0c',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x79986af15539de2db9a5086382daeda917a9cf0c.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.cryptovoxels.com/',
  },
  {
    symbol: 'MB',
    name: 'MetaBillionaire',
    addresses: [
      {
        chainId: 1,
        address: '0xc6c817cd60e17fed0af2a759624e02dd6c812e64',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xc6c817cd60e17fed0af2a759624e02dd6c812e64.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://metabillionaire.com',
  },
  {
    symbol: 'SNFT',
    name: 'STEPNNFT',
    addresses: [
      {
        chainId: 56,
        address: '0x69d60ad11feb699fe5feeeb16ac691df090bfd50',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0x69d60ad11feb699fe5feeeb16ac691df090bfd50.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'BRYC',
    name: 'Bored Ringers',
    addresses: [
      {
        chainId: 1,
        address: '0x37b0a5bd05fc53c4b9f8f3a3bd014ec55072c714',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x37b0a5bd05fc53c4b9f8f3a3bd014ec55072c714.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'CANDY',
    name: 'Candy Collective: Genesis Collection',
    addresses: [
      {
        chainId: 1,
        address: '0xabe9d0e4ad08e605d57a0c10f9d13e0e7283ea50',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xabe9d0e4ad08e605d57a0c10f9d13e0e7283ea50.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.kollectiv.io',
  },
  {
    symbol: 'seedworld',
    name: 'Seed Pod',
    addresses: [
      {
        chainId: 1,
        address: '0xa90b7861b734784e5eaf87bcd079b1edfed24555',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xa90b7861b734784e5eaf87bcd079b1edfed24555.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://seedworld.io',
  },
  {
    symbol: 'MuskNFTS',
    name: 'MuskNFTS',
    addresses: [
      {
        chainId: 56,
        address: '0xdda4e6c612cead1619fcd8ef32869c184698ef99',
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
    symbol: 'NLCS',
    name: 'NL crypto stamp',
    addresses: [
      {
        chainId: 137,
        address: '0x006ec7906a5467e9f657be0d81cf5cddc41e3a57',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0x006ec7906a5467e9f657be0d81cf5cddc41e3a57.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://cryptostamp.com',
  },
  {
    symbol: 'LOOKI',
    name: 'Looki',
    addresses: [
      {
        chainId: 1,
        address: '0xffc1131dda0299b804c97c436bc8cfea019e00a0',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xffc1131dda0299b804c97c436bc8cfea019e00a0.gif',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.looki.games/',
  },
  {
    symbol: 'MINERS',
    name: 'MERGE',
    addresses: [
      {
        chainId: 1,
        address: '0x3bcacb18f4d60c8cba68cd95860daf3e32bebcb6',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x3bcacb18f4d60c8cba68cd95860daf3e32bebcb6.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://blokpax.com',
  },
  {
    symbol: 'LION',
    name: 'Lazy Lions',
    addresses: [
      {
        chainId: 1,
        address: '0x8943c7bac1914c9a7aba750bf2b6b09fd21037e0',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x8943c7bac1914c9a7aba750bf2b6b09fd21037e0.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://lazylions.ai',
  },
  {
    symbol: 'NEXUS',
    name: 'Nexus Gaming Membership',
    addresses: [
      {
        chainId: 1,
        address: '0x8428cbdc4100fc7e1b14c2e4765a9a8133587f28',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x8428cbdc4100fc7e1b14c2e4765a9a8133587f28.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.nexuslabs.gg/',
  },
  {
    symbol: 'SPK',
    name: 'Supreme Kong',
    addresses: [
      {
        chainId: 1,
        address: '0x12787526c03d626aac88e6edc4d0fb930d86c631',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x12787526c03d626aac88e6edc4d0fb930d86c631.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://supremekong.com/',
  },
  {
    symbol: 'BEV',
    name: 'BEV',
    addresses: [
      {
        chainId: 56,
        address: '0x05c8faa4ff078afb1e26c0216ba58330a91d72b2',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0x05c8faa4ff078afb1e26c0216ba58330a91d72b2.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.thedebtbox.com/bev-token',
  },
  {
    symbol: 'BGANPUNKV2',
    name: 'BASTARD GAN PUNKS V2',
    addresses: [
      {
        chainId: 1,
        address: '0x31385d3520bced94f77aae104b406994d8f2168c',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x31385d3520bced94f77aae104b406994d8f2168c.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://bastardganpunks.club',
  },
  {
    symbol: 'CYBERBROKERS',
    name: 'CyberBrokers',
    addresses: [
      {
        chainId: 1,
        address: '0x892848074ddea461a15f337250da3ce55580ca85',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x892848074ddea461a15f337250da3ce55580ca85.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://cyberbrokers.io/',
  },
  {
    symbol: 'LASOG',
    name: 'Lasogette NFT',
    addresses: [
      {
        chainId: 1,
        address: '0xe90d8fb7b79c8930b5c8891e61c298b412a6e81a',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xe90d8fb7b79c8930b5c8891e61c298b412a6e81a.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'NE',
    name: 'NextEarth',
    addresses: [
      {
        chainId: 137,
        address: '0x828383b51514873cc937ee83f57fbbff0221700c',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0x828383b51514873cc937ee83f57fbbff0221700c.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://nextearth.io',
  },
  {
    symbol: 'HEDZ',
    name: 'Hedz by Matt Furie',
    addresses: [
      {
        chainId: 1,
        address: '0xefed2a58cc6a5b81f9158b231847f005cf086c01',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xefed2a58cc6a5b81f9158b231847f005cf086c01.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://www.hedz.fun',
  },
  {
    symbol: 'GENKAI',
    name: 'Genkai',
    addresses: [
      {
        chainId: 1,
        address: '0x1f7c16fce4fc894143afb5545bf04f676bf7dcf3',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x1f7c16fce4fc894143afb5545bf04f676bf7dcf3.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'BabyPandora',
    name: 'BabyPandora',
    addresses: [
      {
        chainId: 56,
        address: '0x38f2865142a4fc0f37f9dd833475c280bc3849ac',
      },
    ],
    logo: {
      src: 'https://i.seadn.io/s/raw/files/3a745548c86c358a44d66c5f40446adf.jpg?w=500&auto=format',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'theNFT',
    name: 'Thenian',
    addresses: [
      {
        chainId: 56,
        address: '0x2af749593978cb79ed11b9959cd82fd128ba4f8d',
      },
    ],
    logo: {
      src: 'https://openseauserdata.com/files/a8ebede26c8a0161dbd973649d7c0242.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.thena.fi/',
  },
  {
    symbol: 'IR',
    name: 'Imaginary Rides',
    addresses: [
      {
        chainId: 1,
        address: '0x878586da1ed007a4d19de3e7a59eca98814e2808',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x878586da1ed007a4d19de3e7a59eca98814e2808.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://rides.imaginaryones.com/',
  },
  {
    symbol: 'SCIAC',
    name: 'Super Creators By IAC',
    addresses: [
      {
        chainId: 1,
        address: '0x9c8d2f53f6bff84458f1c84fdaa1e4852ca958e3',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x9c8d2f53f6bff84458f1c84fdaa1e4852ca958e3.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://supercreators.io/',
  },
  {
    symbol: 'OAT',
    name: 'Galaxy OAT',
    addresses: [
      {
        chainId: 56,
        address: '0xadc466855ebe8d1402c5f7e6706fccc3aedb44a0',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0xadc466855ebe8d1402c5f7e6706fccc3aedb44a0.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://galxe.com',
  },
  {
    symbol: 'NEGATIVES',
    name: 'Negatives',
    addresses: [
      {
        chainId: 1,
        address: '0x05ffbb90241d2f9596ebd352323695127aedca30',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x05ffbb90241d2f9596ebd352323695127aedca30.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://ne.gativ.es',
  },
  {
    symbol: 'NEXTG',
    name: 'NextGen 6529',
    addresses: [
      {
        chainId: 1,
        address: '0x45882f9bc325e14fbb298a1df930c43a874b83ae',
      },
    ],
    logo: {
      src: 'https://i.seadn.io/s/raw/files/817dfa4f3c8ce3ee9d4f9fd3a87dd60a.png?w=500&auto=format',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'CRYPTOMORIES',
    name: 'CryptoMories',
    addresses: [
      {
        chainId: 1,
        address: '0x361a5881f18b968422e9258cb7c1fa53ff4cdd38',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x361a5881f18b968422e9258cb7c1fa53ff4cdd38.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://cryptomories.iwwon.com/home',
  },
  {
    symbol: 'Kitaro',
    name: 'Kitaro World',
    addresses: [
      {
        chainId: 1,
        address: '0x39d3230c84efcb5559d22f499151934476b5c16d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x39d3230c84efcb5559d22f499151934476b5c16d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://kitaro.world',
  },
  {
    symbol: 'ERCC',
    name: 'Early Retired Cats Club',
    addresses: [
      {
        chainId: 1,
        address: '0xc5990790f28aec6c5bda469cf7052b996c36ba7f',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xc5990790f28aec6c5bda469cf7052b996c36ba7f.gif',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://ercc.world',
  },
  {
    symbol: 'EXO',
    name: 'Exosama - Expect Chaos',
    addresses: [
      {
        chainId: 1,
        address: '0xac5c7493036de60e63eb81c5e9a440b42f47ebf5',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xac5c7493036de60e63eb81c5e9a440b42f47ebf5.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://exosama.com',
  },
  {
    symbol: 'SCHIZO',
    name: 'SchizoPosters',
    addresses: [
      {
        chainId: 1,
        address: '0xbfe47d6d4090940d1c7a0066b63d23875e3e2ac5',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xbfe47d6d4090940d1c7a0066b63d23875e3e2ac5.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://schizoposters.xyz/',
  },
  {
    symbol: 'ck',
    name: 'cryptokhat',
    addresses: [
      {
        chainId: 137,
        address: '0x098e1bc661398ed6858626ba5750e56ce03f9072',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0x098e1bc661398ed6858626ba5750e56ce03f9072.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://cryptokhat.com/',
  },
  {
    symbol: 'ML',
    name: 'Meta-Legends',
    addresses: [
      {
        chainId: 1,
        address: '0xf9c362cdd6eeba080dd87845e88512aa0a18c615',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xf9c362cdd6eeba080dd87845e88512aa0a18c615.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.meta-legends.com/',
  },
  {
    symbol: 'XBORG',
    name: 'Prometheus by XBorg',
    addresses: [
      {
        chainId: 1,
        address: '0x5a3e7fd48d9e88c22c391e0e4836c8e211daee66',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x5a3e7fd48d9e88c22c391e0e4836c8e211daee66.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://xborg.com/',
  },
  {
    symbol: 'LLAMA',
    name: 'The Llamas',
    addresses: [
      {
        chainId: 1,
        address: '0xe127ce638293fa123be79c25782a5652581db234',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xe127ce638293fa123be79c25782a5652581db234.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.thellamas.io/',
  },
  {
    symbol: 'GRAPES',
    name: 'The Grapes',
    addresses: [
      {
        chainId: 1,
        address: '0xe1dc516b1486aba548eecd2947a11273518434a4',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xe1dc516b1486aba548eecd2947a11273518434a4.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://www.joingrapes.com',
  },
  {
    symbol: 'RENGA',
    name: 'RENGA',
    addresses: [
      {
        chainId: 1,
        address: '0x394e3d3044fc89fcdd966d3cb35ac0b32b0cda91',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x394e3d3044fc89fcdd966d3cb35ac0b32b0cda91.gif',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://renga.app/',
  },
  {
    symbol: 'JBAB',
    name: 'JazDID BAB',
    addresses: [
      {
        chainId: 56,
        address: '0xff1ae60287ed0c8a32e6fc6f9afe35ea3a726efc',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0xff1ae60287ed0c8a32e6fc6f9afe35ea3a726efc.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'TPLRMP',
    name: 'TPL Revealed Mech Parts',
    addresses: [
      {
        chainId: 1,
        address: '0x7bc1e07cdfa283db7cf3c680d16ca7f161a64046',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x7bc1e07cdfa283db7cf3c680d16ca7f161a64046.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.cyberbrokers.com/',
  },
  {
    symbol: '',
    name: 'Cross the Ages - Arkhante Booster Premium Pack',
    addresses: [
      {
        chainId: 137,
        address: '0xb6041eae62c4591458af480679c6a497eda6cfcd',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0xb6041eae62c4591458af480679c6a497eda6cfcd.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://www.crosstheages.com',
  },
  {
    symbol: 'TRAITORSOPENEDITIONBYXCOPY',
    name: 'TRAITORS open edition by XCOPY',
    addresses: [
      {
        chainId: 1,
        address: '0x8a939fd297fab7388d6e6c634eee3c863626be57',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x8a939fd297fab7388d6e6c634eee3c863626be57.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://xcopy.art',
  },
  {
    symbol: 'PIXLP',
    name: 'Pixl Pets',
    addresses: [
      {
        chainId: 1,
        address: '0x4e76c23fe2a4e37b5e07b5625e17098baab86c18',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x4e76c23fe2a4e37b5e07b5625e17098baab86c18.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.thepixlverse.com/',
  },
  {
    symbol: 'SOMETHING',
    name: 'Something Token',
    addresses: [
      {
        chainId: 1,
        address: '0x05e7f2499ff153fea2f20bbde0b5584c911c0af1',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x05e7f2499ff153fea2f20bbde0b5584c911c0af1.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.americana.io/',
  },
  {
    symbol: 'SSL',
    name: 'Steady Stack Legends',
    addresses: [
      {
        chainId: 1,
        address: '0xea14fb44f85650d06d505966b1d02ca1f599b823',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xea14fb44f85650d06d505966b1d02ca1f599b823.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://steadystacknft.com/',
  },
  {
    symbol: 'HABBO',
    name: 'Habbo Avatars',
    addresses: [
      {
        chainId: 1,
        address: '0x8a1bbef259b00ced668a8c69e50d92619c672176',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x8a1bbef259b00ced668a8c69e50d92619c672176.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://nft.habbo.com/',
  },
  {
    symbol: 'PXLDY',
    name: 'Pixelady Maker',
    addresses: [
      {
        chainId: 1,
        address: '0x8fc0d90f2c45a5e7f94904075c952e0943cfccfd',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x8fc0d90f2c45a5e7f94904075c952e0943cfccfd.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://pixeladymaker.net/',
  },
  {
    symbol: 'DRIP',
    name: 'DRIP',
    addresses: [
      {
        chainId: 56,
        address: '0x125d71908f54d39a819e1a94d6eeaf40ed834ba8',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0x125d71908f54d39a819e1a94d6eeaf40ed834ba8.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.thedebtbox.com/drip-token',
  },
  {
    symbol: 'ORAS',
    name: 'Sugartown Oras',
    addresses: [
      {
        chainId: 1,
        address: '0xd564c25b760cb278a55bdd98831f4ff4b6c97b38',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xd564c25b760cb278a55bdd98831f4ff4b6c97b38.gif',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://visitsugartown.com/',
  },
  {
    symbol: 'PGX-Pega',
    name: 'Pegaxy|Pega',
    addresses: [
      {
        chainId: 137,
        address: '0xd50d167dd35d256e19e2fb76d6b9bf9f4c571a3e',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0xd50d167dd35d256e19e2fb76d6b9bf9f4c571a3e.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'STBYS',
    name: 'Sothebys Gen Art',
    addresses: [
      {
        chainId: 1,
        address: '0xe034bb2b1b9471e11cf1a0a9199a156fb227aa5d',
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
    symbol: 'PLOOSHY',
    name: 'The Plooshies',
    addresses: [
      {
        chainId: 1,
        address: '0x0e8d5ad992b37f145ed1985d4bffcbc3d5bd6be3',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x0e8d5ad992b37f145ed1985d4bffcbc3d5bd6be3.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://theplooshies.com',
  },
  {
    symbol: 'MICE',
    name: 'Anonymice',
    addresses: [
      {
        chainId: 1,
        address: '0xbad6186e92002e312078b5a1dafd5ddf63d3f731',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xbad6186e92002e312078b5a1dafd5ddf63d3f731.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.anonymice.com',
  },
  {
    symbol: 'MON',
    name: 'MoonBox',
    addresses: [
      {
        chainId: 56,
        address: '0x2d4c3f0cebe62f9af50fcb5361d66896271fd6a2',
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
    symbol: 'HAPE',
    name: 'HAPE PRIME',
    addresses: [
      {
        chainId: 1,
        address: '0x4db1f25d3d98600140dfc18deb7515be5bd293af',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x4db1f25d3d98600140dfc18deb7515be5bd293af.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://hape.io/',
  },
  {
    symbol: 'VANTA',
    name: 'Vanta Club',
    addresses: [
      {
        chainId: 1,
        address: '0xbb4e5e06479eacbfd008221d389f23b9a93eb2ce',
      },
    ],
    logo: {
      src: 'https://i.seadn.io/s/raw/files/e1b15ece730e7b0d4eb5df7c7c4e056a.png?w=500&auto=format',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.vanta.club/',
  },
  {
    symbol: 'overworld_key',
    name: 'Overworld Key',
    addresses: [
      {
        chainId: 1,
        address: '0x0f4129e27b759f7ca4ad854dd41b961a073fe089',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x0f4129e27b759f7ca4ad854dd41b961a073fe089.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://overworld.games/',
  },
  {
    symbol: 'ALFA',
    name: 'AlfaDAO',
    addresses: [
      {
        chainId: 1,
        address: '0xd1ad8ebfb0fb6306962e48260cf1e8062eb28cfa',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xd1ad8ebfb0fb6306962e48260cf1e8062eb28cfa.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://alfadao.xyz',
  },
  {
    symbol: 'ANARKEY',
    name: 'AnarKey',
    addresses: [
      {
        chainId: 1,
        address: '0xa88b82af76ecf08cf652846d10857eaeeca40c97',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xa88b82af76ecf08cf652846d10857eaeeca40c97.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'YKPS',
    name: 'Kanpai Pandas',
    addresses: [
      {
        chainId: 137,
        address: '0xacf63e56fd08970b43401492a02f6f38b6635c91',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0xacf63e56fd08970b43401492a02f6f38b6635c91.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://kanpaipandas.io/',
  },
  {
    symbol: 'WADE',
    name: 'WADE F&F',
    addresses: [
      {
        chainId: 1,
        address: '0xeea7c78b258bd908256a1afa4e2f311e26c992f3',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xeea7c78b258bd908256a1afa4e2f311e26c992f3.gif',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.worldwide-wade.com/',
  },
  {
    symbol: 'SHIBYARD',
    name: 'SHIB YARD',
    addresses: [
      {
        chainId: 1,
        address: '0xefaed650f1a94801806bb110019d9b0dc79531a8',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xefaed650f1a94801806bb110019d9b0dc79531a8.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://shib.io',
  },
  {
    symbol: 'GHOST',
    name: 'Weirdo Ghost Gang',
    addresses: [
      {
        chainId: 1,
        address: '0x9401518f4ebba857baa879d9f76e1cc8b31ed197',
      },
    ],
    logo: {
      src: 'https://logo.nftscan.com/logo/0x9401518f4ebba857baa879d9f76e1cc8b31ed197.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.weirdoghost.com/',
  },
  {
    symbol: 'ANATA',
    name: 'Anata NFT',
    addresses: [
      {
        chainId: 1,
        address: '0xf729f878f95548bc7f14b127c96089cf121505f8',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xf729f878f95548bc7f14b127c96089cf121505f8.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'WOWG',
    name: 'World Of Women Galaxy',
    addresses: [
      {
        chainId: 1,
        address: '0xf61f24c2d93bf2de187546b14425bf631f28d6dc',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xf61f24c2d93bf2de187546b14425bf631f28d6dc.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://worldofwomen.art/wow-galaxy',
  },
  {
    symbol: 'PartyBears',
    name: 'Party Bears',
    addresses: [
      {
        chainId: 1,
        address: '0x35471f47c3c0bc5fc75025b97a19ecdde00f78f8',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x35471f47c3c0bc5fc75025b97a19ecdde00f78f8.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://fluf.world',
  },
  {
    symbol: 'NARN',
    name: 'Proof of Narnian NFT',
    addresses: [
      {
        chainId: 1,
        address: '0x9d9ae1ad49be9b085fef04b9c835d484a6d099e3',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x9d9ae1ad49be9b085fef04b9c835d484a6d099e3.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://dropscapital.com/',
  },
  {
    symbol: 'MetaXNFT',
    name: 'MetaX-Creation',
    addresses: [
      {
        chainId: 56,
        address: '0x10b59602ed9ec41ca6646854c6b6a67901f951cd',
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
    symbol: 'KONGZ VX',
    name: 'Cyberkongz VX',
    addresses: [
      {
        chainId: 137,
        address: '0x05df72d911e52ab122f7d9955728bc96a718782c',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0x05df72d911e52ab122f7d9955728bc96a718782c.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://cyberkongz.com',
  },
  {
    symbol: 'LAND',
    name: 'Wolf Game - Genesis Land',
    addresses: [
      {
        chainId: 1,
        address: '0x2c88aa0956bc9813505d73575f653f69ada60923',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x2c88aa0956bc9813505d73575f653f69ada60923.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://wolf.game/',
  },
  {
    symbol: 'OSF',
    name: 'OSF',
    addresses: [
      {
        chainId: 1,
        address: '0x513cd71defc801b9c1aa763db47b5df223da77a2',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x513cd71defc801b9c1aa763db47b5df223da77a2.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://osf.art',
  },
  {
    symbol: 'CBW',
    name: 'CryptoBlades weapon',
    addresses: [
      {
        chainId: 56,
        address: '0x7e091b0a220356b157131c831258a9c98ac8031a',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0x7e091b0a220356b157131c831258a9c98ac8031a.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'TWT',
    name: 'The World Today',
    addresses: [
      {
        chainId: 1,
        address: '0x35df2b48a3137718f09afad405d4267cef538bc0',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x35df2b48a3137718f09afad405d4267cef538bc0.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://twt.obscura.io',
  },
  {
    symbol: 'PUNK2023',
    name: 'Punks2023',
    addresses: [
      {
        chainId: 1,
        address: '0x789e35a999c443fe6089544056f728239b8ffee7',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x789e35a999c443fe6089544056f728239b8ffee7.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://punks2023.com',
  },
  {
    symbol: 'ZORB',
    name: 'Zorbs',
    addresses: [
      {
        chainId: 1,
        address: '0xca21d4228cdcc68d4e23807e5e370c07577dd152',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xca21d4228cdcc68d4e23807e5e370c07577dd152.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://zorb.dev',
  },
  {
    symbol: 'PROOF',
    name: 'PROOF Collective',
    addresses: [
      {
        chainId: 1,
        address: '0x08d7c0242953446436f34b4c78fe9da38c73668d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x08d7c0242953446436f34b4c78fe9da38c73668d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://collective.proof.xyz',
  },
  {
    symbol: 'THEFUNGIBLEOPENEDITIONSBYPAK',
    name: '!The Fungible Open Editions by Pak',
    addresses: [
      {
        chainId: 1,
        address: '0xc0cf5b82ae2352303b2ea02c3be88e23f2594171',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xc0cf5b82ae2352303b2ea02c3be88e23f2594171.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://niftygateway.com/collections/paksothebysauction',
  },
  {
    symbol: 'LOUD',
    name: 'LoudPunx',
    addresses: [
      {
        chainId: 1,
        address: '0xcb45dce241a6f6f1e874e9925bea5840f3fd7d3a',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xcb45dce241a6f6f1e874e9925bea5840f3fd7d3a.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://loudpunx.com',
  },
  {
    symbol: 'The Proof of Attendance Protocol',
    name: 'POAP',
    addresses: [
      {
        chainId: 1,
        address: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x22c1f6050e56d2876009903609a2cc3fef83b415.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.poap.xyz/',
  },
  {
    symbol: '',
    name: 'ApeironPlanet',
    addresses: [
      {
        chainId: 137,
        address: '0x24f9b0837424c62d2247d8a11a6d6139e4ab5ed2',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0x24f9b0837424c62d2247d8a11a6d6139e4ab5ed2.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://apeironnft.com/',
  },
  {
    symbol: '10GON',
    name: 'Decagon',
    addresses: [
      {
        chainId: 1,
        address: '0xd93206bd0062cc054e397ecccdb8436c3fa5700e',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xd93206bd0062cc054e397ecccdb8436c3fa5700e.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://deca.art/decagon/mint',
  },
  {
    symbol: 'Seedworld Vanguards',
    name: 'Seedworld Vanguards',
    addresses: [
      {
        chainId: 1,
        address: '0x71d1e9741da1e25ffd377be56d133359492b9c3b',
      },
    ],
    logo: {
      src: 'https://openseauserdata.com/files/5646da7842d99f40b34c85c00c03aaeb.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://seedworld.io',
  },
  {
    symbol: 'GT',
    name: 'Golden Token CryptoCitizens | GT',
    addresses: [
      {
        chainId: 1,
        address: '0x985e1932ffd2aa4bc9ce611dfe12816a248cd2ce',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x985e1932ffd2aa4bc9ce611dfe12816a248cd2ce.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://brightmoments.io',
  },
  {
    symbol: 'PHUNK',
    name: 'CryptoPhunksV2',
    addresses: [
      {
        chainId: 1,
        address: '0xf07468ead8cf26c752c676e43c814fee9c8cf402',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xf07468ead8cf26c752c676e43c814fee9c8cf402.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.cryptophunks.com',
  },
  {
    symbol: 'LOBS',
    name: 'The Lobstars',
    addresses: [
      {
        chainId: 1,
        address: '0x87c4ba6f6ee73e0d420eb56c54243a5ae486e51b',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x87c4ba6f6ee73e0d420eb56c54243a5ae486e51b.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://thelobstars.com',
  },
  {
    symbol: 'DEADFELLAZ',
    name: 'DeadFellaz',
    addresses: [
      {
        chainId: 1,
        address: '0x2acab3dea77832c09420663b0e1cb386031ba17b',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x2acab3dea77832c09420663b0e1cb386031ba17b.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://deadfellaz.io',
  },
  {
    symbol: 'WADESIDE',
    name: 'WADESIDE Official',
    addresses: [
      {
        chainId: 1,
        address: '0xac2cfaf0c34af97804597a71f2e90e3632097b72',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xac2cfaf0c34af97804597a71f2e90e3632097b72.gif',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://wade.club/',
  },
  {
    symbol: 'SCGENZ',
    name: 'Super Creators - Gen Z',
    addresses: [
      {
        chainId: 1,
        address: '0xc2bae2cdef63bcb0ba60bb02cd67d912f8371c3d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xc2bae2cdef63bcb0ba60bb02cd67d912f8371c3d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.supercreators.io',
  },
  {
    symbol: 'AKU',
    name: 'Akutars',
    addresses: [
      {
        chainId: 1,
        address: '0xaad35c2dadbe77f97301617d82e661776c891fa9',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xaad35c2dadbe77f97301617d82e661776c891fa9.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.aku.world',
  },
  {
    symbol: 'HM',
    name: 'Hashmasks',
    addresses: [
      {
        chainId: 1,
        address: '0xc2c747e0f7004f9e8817db2ca4997657a7746928',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xc2c747e0f7004f9e8817db2ca4997657a7746928.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.thehashmasks.com/',
  },
  {
    symbol: 'OSP',
    name: 'Gemesis',
    addresses: [
      {
        chainId: 1,
        address: '0xbe9371326f91345777b04394448c23e2bfeaa826',
      },
    ],
    logo: {
      src: 'https://openseauserdata.com/files/7ed181433ee09174f09a0e31b563d313.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://pro.opensea.io',
  },
  {
    symbol: 'DeBox',
    name: 'DeBox Guardians Rabbit',
    addresses: [
      {
        chainId: 1,
        address: '0x5de07ebf22b49289d6cf676a8df9b959fe68db0e',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x5de07ebf22b49289d6cf676a8df9b959fe68db0e.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://debox.pro',
  },
  {
    symbol: 'DNFT',
    name: 'Decubate',
    addresses: [
      {
        chainId: 56,
        address: '0x302647f4c3d83f4498c4e11b19fdb3165eb7ea1b',
      },
    ],
    logo: {
      src: 'https://openseauserdata.com/files/2a9d4b3069400f1ea7d1d54611ad32cb.gif',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://linktr.ee/Decubate',
  },
  {
    symbol: '$RGBT',
    name: 'RG Bytes',
    addresses: [
      {
        chainId: 1,
        address: '0x6fd8e343c107a24bd6b8ac19b56d9aeb967c0131',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x6fd8e343c107a24bd6b8ac19b56d9aeb967c0131.gif',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.revolvinggames.com',
  },
  {
    symbol: 'APES',
    name: 'ApeironStar',
    addresses: [
      {
        chainId: 137,
        address: '0xc11be84957c265e3c4d0957dd293e57ca4b7d6b5',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0xc11be84957c265e3c4d0957dd293e57ca4b7d6b5.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://apeironnft.com/',
  },
  {
    symbol: 'NATG',
    name: 'NATG',
    addresses: [
      {
        chainId: 56,
        address: '0xf09fbc6be5101bb1e0762bf9ad11ba017eec4ed5',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0xf09fbc6be5101bb1e0762bf9ad11ba017eec4ed5.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.thedebtbox.com/natg-token',
  },
  {
    symbol: 'CBC',
    name: 'CryptoBlades character',
    addresses: [
      {
        chainId: 56,
        address: '0xc6f252c2cdd4087e30608a35c022ce490b58179b',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0xc6f252c2cdd4087e30608a35c022ce490b58179b.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'ALT',
    name: 'ALTS by adidas',
    addresses: [
      {
        chainId: 1,
        address: '0x749f5ddf5ab4c1f26f74560a78300563c34b417d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x749f5ddf5ab4c1f26f74560a78300563c34b417d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://collect.adidas.com',
  },
  {
    symbol: 'GEN1PASS',
    name: 'GEN1 Pass Holders',
    addresses: [
      {
        chainId: 1,
        address: '0xda7e6010618cf782280dd7eb107fd57c27d13035',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xda7e6010618cf782280dd7eb107fd57c27d13035.jpg',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'CPEP',
    name: 'CryptoPepes 2018',
    addresses: [
      {
        chainId: 1,
        address: '0xe59b419fac4b9b769c4439e7c4fde22418f11c89',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xe59b419fac4b9b769c4439e7c4fde22418f11c89.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://cryptopepes.wtf',
  },
  {
    symbol: 'CWOGS2',
    name: 'Common Wealth Genesis NFT Series 2',
    addresses: [
      {
        chainId: 1,
        address: '0xae2dfbddef17998a638b26b38aafd7e4625ca41a',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xae2dfbddef17998a638b26b38aafd7e4625ca41a.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://common-wealth.io/',
  },
  {
    symbol: 'TTOO',
    name: 'This Thing Of Ours',
    addresses: [
      {
        chainId: 1,
        address: '0xf6ee484f82f28d69688f37fe90af514ce212b7c3',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xf6ee484f82f28d69688f37fe90af514ce212b7c3.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://ttoonft.io/',
  },
  {
    symbol: 'ZNS',
    name: 'Zer0 Name Service',
    addresses: [
      {
        chainId: 1,
        address: '0x1a178cfd768f74b3308cbca9998c767f4e5b2cf8',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x1a178cfd768f74b3308cbca9998c767f4e5b2cf8.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://app.wilderworld.com/market/beasts.wolf',
  },
  {
    symbol: 'THINGIES',
    name: 'FLUF World: Thingies',
    addresses: [
      {
        chainId: 1,
        address: '0x1afef6b252cc35ec061efe6a9676c90915a73f18',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x1afef6b252cc35ec061efe6a9676c90915a73f18.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://fluf.world',
  },
  {
    symbol: 'HASH',
    name: 'Hashes',
    addresses: [
      {
        chainId: 1,
        address: '0xd07e72b00431af84ad438ca995fd9a7f0207542d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xd07e72b00431af84ad438ca995fd9a7f0207542d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.thehashes.xyz/',
  },
  {
    symbol: 'VRLAND',
    name: 'VR Land',
    addresses: [
      {
        chainId: 1,
        address: '0x080e92b26a1d93546d2f5a8ef05a8b823306c146',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x080e92b26a1d93546d2f5a8ef05a8b823306c146.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://victoriavr.com/',
  },
  {
    symbol: 'WEBBLAND',
    name: 'WebbLand',
    addresses: [
      {
        chainId: 1,
        address: '0xa1d4657e0e6507d5a94d06da93e94dc7c8c44b51',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xa1d4657e0e6507d5a94d06da93e94dc7c8c44b51.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://webb.game',
  },
  {
    symbol: 'DAP',
    name: 'DelabsAdventurePass',
    addresses: [
      {
        chainId: 1,
        address: '0xa7088ed1a460a154404adbfd7d6a3873e9f90340',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xa7088ed1a460a154404adbfd7d6a3873e9f90340.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://delabs.gg',
  },
  {
    symbol: 'IDOL',
    name: 'Idol',
    addresses: [
      {
        chainId: 1,
        address: '0x439cac149b935ae1d726569800972e1669d17094',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x439cac149b935ae1d726569800972e1669d17094.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://theidols.eth.limo/#/marketplace',
  },
  {
    symbol: 'INVSBLE',
    name: 'Invisible Friends',
    addresses: [
      {
        chainId: 1,
        address: '0x59468516a8259058bad1ca5f8f4bff190d30e066',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x59468516a8259058bad1ca5f8f4bff190d30e066.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://invisiblefriends.io',
  },
  {
    symbol: 'RVPCG',
    name: 'RealVisionProCryptoGenesis',
    addresses: [
      {
        chainId: 1,
        address: '0x76236b6f13f687d0bbedbbce0e30e9f07d071c1c',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x76236b6f13f687d0bbedbbce0e30e9f07d071c1c.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.realvision.com/pro-crypto-nft',
  },
  {
    symbol: 'BAPAPES',
    name: 'BAP APES',
    addresses: [
      {
        chainId: 1,
        address: '0x7f29b85834d6a2ba4bb1c64325686c6057b1b3c5',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x7f29b85834d6a2ba4bb1c64325686c6057b1b3c5.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.bullsandapesproject.com/',
  },
  {
    symbol: 'CryptoSkulls',
    name: 'CryptoSkulls',
    addresses: [
      {
        chainId: 1,
        address: '0xc1caf0c19a8ac28c41fe59ba6c754e4b9bd54de9',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xc1caf0c19a8ac28c41fe59ba6c754e4b9bd54de9.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://cryptoskulls.com',
  },
  {
    symbol: 'COMIC',
    name: 'PUNKS Comic',
    addresses: [
      {
        chainId: 1,
        address: '0x5ab21ec0bfa0b29545230395e3adaca7d552c948',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x5ab21ec0bfa0b29545230395e3adaca7d552c948.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://punkscomic.com/',
  },
  {
    symbol: 'TUBBY',
    name: 'Tubby Cats',
    addresses: [
      {
        chainId: 1,
        address: '0xca7ca7bcc765f77339be2d648ba53ce9c8a262bd',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xca7ca7bcc765f77339be2d648ba53ce9c8a262bd.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://tubbycats.xyz',
  },
  {
    symbol: 'SAMSPRATTLUCICHAPTERTHEMONUMENTGAME',
    name: 'Sam Spratt - LUCI: Chapter 5 - The Monument Game',
    addresses: [
      {
        chainId: 1,
        address: '0xda6558fa1c2452938168ef79dfd29c45aba8a32b',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xda6558fa1c2452938168ef79dfd29c45aba8a32b.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://www.samspratt.com',
  },
  {
    symbol: 'ZMSS',
    name: "Zinu's Zombie Mob Secret Society",
    addresses: [
      {
        chainId: 1,
        address: '0xc101916cd9ddeac5a6f915eed033b1b6e4a637cb',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xc101916cd9ddeac5a6f915eed033b1b6e4a637cb.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://www.wearezinu.com',
  },
  {
    symbol: 'NIPPY',
    name: 'Hello, Nippy!',
    addresses: [
      {
        chainId: 1,
        address: '0x9674739124d69d555712a30e0a44de648f494219',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x9674739124d69d555712a30e0a44de648f494219.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://frensville.co',
  },
  {
    symbol: 'OTS',
    name: 'OTSpaceship',
    addresses: [
      {
        chainId: 1,
        address: '0x13251ce31ac3330067c3acaf4bb3339dff765c76',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x13251ce31ac3330067c3acaf4bb3339dff765c76.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://outer.gg/',
  },
  {
    symbol: 'BMIL',
    name: 'BoredMilady',
    addresses: [
      {
        chainId: 1,
        address: '0xafe12842e3703a3cc3a71d9463389b1bf2c5bc1c',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xafe12842e3703a3cc3a71d9463389b1bf2c5bc1c.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://boredmiladymaker.net',
  },
  {
    symbol: 'AVBN',
    name: 'Auntieverse by Niceaunties',
    addresses: [
      {
        chainId: 1,
        address: '0x4507d017ffc59808476b0adb349335742939a51a',
      },
    ],
    logo: {
      src: 'https://i.seadn.io/s/raw/files/05368de529cccd26426d460bc27b81f0.jpg?w=500&auto=format',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://niceaunties.daily.xyz/',
  },
  {
    symbol: 'DeBox',
    name: 'DeBox Guardians Eagle',
    addresses: [
      {
        chainId: 1,
        address: '0x7bad7d55f82d237dbc24d7cd627ed13889e3f9f3',
      },
    ],
    logo: {
      src: 'https://logo.nftscan.com/logo/0x7bad7d55f82d237dbc24d7cd627ed13889e3f9f3.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://debox.pro',
  },
  {
    symbol: 'ZNS',
    name: 'Wilder Moto',
    addresses: [
      {
        chainId: 1,
        address: '0x51bd5948cf84a1041d2720f56ded5e173396fc95',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x51bd5948cf84a1041d2720f56ded5e173396fc95.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://app.wilderworld.com/market/moto.genesis',
  },
  {
    symbol: 'Voice NFT',
    name: 'Voice NFT',
    addresses: [
      {
        chainId: 137,
        address: '0xf1d8cab953241a635787ab54b924ad66ab2d5705',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/pls/logo/0xf1d8cab953241a635787ab54b924ad66ab2d5705.jpg',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://vcity.app',
  },
  {
    symbol: 'DOOPL',
    name: 'Dooplicator',
    addresses: [
      {
        chainId: 1,
        address: '0x466cfcd0525189b573e794f554b8a751279213ac',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x466cfcd0525189b573e794f554b8a751279213ac.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://web3.doodles.app',
  },
  {
    symbol: 'FLSoc',
    name: 'FameLadySociety',
    addresses: [
      {
        chainId: 1,
        address: '0x6cf4328f1ea83b5d592474f9fcdc714faafd1574',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x6cf4328f1ea83b5d592474f9fcdc714faafd1574.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://fameladysociety.com/',
  },
  {
    symbol: 'BUZZIES',
    name: 'FLUF World: Buzzies',
    addresses: [
      {
        chainId: 1,
        address: '0x2308742aa28cc460522ff855d24a365f99deba7b',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x2308742aa28cc460522ff855d24a365f99deba7b.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://fluf.world',
  },
  {
    symbol: 'CARTE',
    name: 'CryptoArte',
    addresses: [
      {
        chainId: 1,
        address: '0xbace7e22f06554339911a03b8e0ae28203da9598',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xbace7e22f06554339911a03b8e0ae28203da9598.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.cryptoarte.io',
  },
  {
    symbol: 'AVATARS',
    name: 'NFT Worlds Genesis Avatars',
    addresses: [
      {
        chainId: 1,
        address: '0x05745e72fb8b4a9b51118a168d956760e4a36444',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x05745e72fb8b4a9b51118a168d956760e4a36444.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://nftworlds.com/avatars',
  },
  {
    symbol: 'Cece',
    name: 'Metacene Cece Cube',
    addresses: [
      {
        chainId: 1,
        address: '0xca7c484cbaa83900ab91b6aefa1de0478ba71eb7',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xca7c484cbaa83900ab91b6aefa1de0478ba71eb7.gif',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: '',
    name: 'Bitchcoin',
    addresses: [
      {
        chainId: 1,
        address: '0x5e86f887ff9676a58f25a6e057b7a6b8d65e1874',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x5e86f887ff9676a58f25a6e057b7a6b8d65e1874.gif',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://sarahmeyohas.com/bitchcoin/',
  },
  {
    symbol: 'PGG2',
    name: 'Project Godjira Generation 2',
    addresses: [
      {
        chainId: 1,
        address: '0xedc3ad89f7b0963fe23d714b34185713706b815b',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xedc3ad89f7b0963fe23d714b34185713706b815b.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://pg-group.io/',
  },
  {
    symbol: 'EH',
    name: 'Edenhorde',
    addresses: [
      {
        chainId: 1,
        address: '0x9eeaecbe2884aa7e82f450e3fc174f30fc2a8de3',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x9eeaecbe2884aa7e82f450e3fc174f30fc2a8de3.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://edenhorde.world',
  },
  {
    symbol: 'GLXY',
    name: 'GalaxyEggs',
    addresses: [
      {
        chainId: 1,
        address: '0xa08126f5e1ed91a635987071e6ff5eb2aeb67c48',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xa08126f5e1ed91a635987071e6ff5eb2aeb67c48.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.galaxy-eggs.com/',
  },
  {
    symbol: 'GHWP',
    name: 'Gas Hero Weapon',
    addresses: [
      {
        chainId: 137,
        address: '0x00509e403ca5e24b91007472b79ca78e06c8268a',
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
    symbol: 'CLOAKS',
    name: 'CLOAKS',
    addresses: [
      {
        chainId: 1,
        address: '0x0c56f29b8d90eea71d57cadeb3216b4ef7494abc',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x0c56f29b8d90eea71d57cadeb3216b4ef7494abc.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://nakamigos.io/#cloaks',
  },
  {
    symbol: 'HERO',
    name: 'MetaHero',
    addresses: [
      {
        chainId: 1,
        address: '0x6dc6001535e15b9def7b0f6a20a2111dfa9454e2',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x6dc6001535e15b9def7b0f6a20a2111dfa9454e2.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://inhabitantsuniverse.com/',
  },
  {
    symbol: 'WPOUCH',
    name: 'Wolf Game - Wool Pouch',
    addresses: [
      {
        chainId: 1,
        address: '0xb76fbbb30e31f2c3bdaa2466cfb1cfe39b220d06',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xb76fbbb30e31f2c3bdaa2466cfb1cfe39b220d06.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://wolf.game',
  },
  {
    symbol: 'CFPD',
    name: 'ChronoForge Prospecting Deeds',
    addresses: [
      {
        chainId: 1,
        address: '0x5cb303856bb1622483128c08c5f78e82a0bcde1d',
      },
    ],
    logo: {
      src: 'https://i.seadn.io/s/raw/files/4b432774d7d57f2c62b116fbb57e656d.png?w=500&auto=format',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://chronoforge.gg',
  },
  {
    symbol: '99ORIG',
    name: '99 Originals',
    addresses: [
      {
        chainId: 1,
        address: '0x1c49ed56da6be87b804bc1b8b817a259aa3132ed',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x1c49ed56da6be87b804bc1b8b817a259aa3132ed.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://originals.com',
  },
  {
    symbol: 'DeBox',
    name: 'DeBox Guardians Cobra',
    addresses: [
      {
        chainId: 1,
        address: '0x191be5ee5a857c1cfdf76023f2b89a44cdaba008',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x191be5ee5a857c1cfdf76023f2b89a44cdaba008.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://debox.pro',
  },
  {
    symbol: 'SOC',
    name: 'Shrapnel Operators Collection',
    addresses: [
      {
        chainId: 1,
        address: '0xfc8a98c22a9e32948ab028414d67c62c49b16864',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xfc8a98c22a9e32948ab028414d67c62c49b16864.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://shrapnel.com',
  },
  {
    symbol: 'GHGH',
    name: 'Gas Hero Genesis Heroes',
    addresses: [
      {
        chainId: 137,
        address: '0x30f378ef04234f720d422e29d005788334e4d551',
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
    symbol: 'WU10K',
    name: 'Women Unite - 10k Assemble',
    addresses: [
      {
        chainId: 1,
        address: '0xbee7cb80dfd21a9eaae714208f361601f68eb746',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xbee7cb80dfd21a9eaae714208f361601f68eb746.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://womenunitenft.com/',
  },
  {
    symbol: 'NMS',
    name: 'MEMBERSHIP S',
    addresses: [
      {
        chainId: 1,
        address: '0x461a5e25b41395e15ac80a523e7edf763c908982',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x461a5e25b41395e15ac80a523e7edf763c908982.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://nft.notahotel.com',
  },
  {
    symbol: 'MTG',
    name: 'Mittaria Genesis',
    addresses: [
      {
        chainId: 1,
        address: '0x8ff2e72f8faf05384aeb501ba9644c9759d2fd5f',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x8ff2e72f8faf05384aeb501ba9644c9759d2fd5f.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://mittaria.io',
  },
  {
    symbol: 'INU',
    name: 'Sipher INU',
    addresses: [
      {
        chainId: 1,
        address: '0x9c57d0278199c931cf149cc769f37bb7847091e7',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x9c57d0278199c931cf149cc769f37bb7847091e7.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://playsipher.com/',
  },
  {
    symbol: 'WAR',
    name: 'The Warlords of Champions Tactics',
    addresses: [
      {
        chainId: 1,
        address: '0xe841e6e68becfc54b621a23a41f8c1a829a4cf44',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xe841e6e68becfc54b621a23a41f8c1a829a4cf44.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://championstactics.ubisoft.com/',
  },
  {
    symbol: 'CK2',
    name: 'CrystalKhat',
    addresses: [
      {
        chainId: 137,
        address: '0xe7488590221c696ed6c7596e9feb8afa5ad31c37',
      },
    ],
    logo: {
      src: 'https://i.seadn.io/s/raw/files/0b9361a3a9ef1c4b8be747f47d1fd532.gif?w=500&auto=format',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://crystalkhat.com/',
  },
  {
    symbol: 'TheMounts',
    name: 'The Mounts of Seedworld',
    addresses: [
      {
        chainId: 1,
        address: '0xe6115ada0452d6c48b292971e656bc07901b53f6',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xe6115ada0452d6c48b292971e656bc07901b53f6.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://seedworld.io',
  },
  {
    symbol: 'MOMENT-FLEX',
    name: 'Bright Moments Flex',
    addresses: [
      {
        chainId: 1,
        address: '0x7c3ea2b7b3befa1115ab51c09f0c9f245c500b18',
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
    symbol: 'SPTN',
    name: 'Spartan Unbreakable Pass',
    addresses: [
      {
        chainId: 1,
        address: '0x9b7e68482b20d7843201ebf6715b5e86e0114625',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x9b7e68482b20d7843201ebf6715b5e86e0114625.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://unbreakable.spartan.com/',
  },
  {
    symbol: 'UDZT',
    name: 'UndeadsZombies',
    addresses: [
      {
        chainId: 1,
        address: '0xd2fdfb3aae284f9f7308c596aa2eb6dc8af599ee',
      },
    ],
    logo: {
      src: 'https://logo.nftscan.com/logo/0xd2fdfb3aae284f9f7308c596aa2eb6dc8af599ee.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://undeads.com',
  },
  {
    symbol: 'LINKSDAO',
    name: 'LinksDAO',
    addresses: [
      {
        chainId: 1,
        address: '0x696115768bbef67be8bd408d760332a7efbee92d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x696115768bbef67be8bd408d760332a7efbee92d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://linksdao.io',
  },
  {
    symbol: 'MML',
    name: 'Musk USM LAND',
    addresses: [
      {
        chainId: 56,
        address: '0xb5665e1038c4e17c58ab55b5c591fab52ce83fc4',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0xb5665e1038c4e17c58ab55b5c591fab52ce83fc4.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'PNFT',
    name: 'MEO WORLD',
    addresses: [
      {
        chainId: 56,
        address: '0xbfe3578a8f7fa99a2386bf8af8f26956abc409f7',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/bsc/logo/0xbfe3578a8f7fa99a2386bf8af8f26956abc409f7.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://meo.world',
  },
  {
    symbol: 'MNB',
    name: 'MidnightBreeze',
    addresses: [
      {
        chainId: 1,
        address: '0xd9c036e9eef725e5aca4a22239a23feb47c3f05d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xd9c036e9eef725e5aca4a22239a23feb47c3f05d.gif',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://midnightbreeze.io',
  },
  {
    symbol: 'PLAYMEMARKETING',
    name: 'Play Me Marketing',
    addresses: [
      {
        chainId: 1,
        address: '0xa50b1b1957af772d561f62d003c6fe706de41a02',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xa50b1b1957af772d561f62d003c6fe706de41a02.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'MEMEWHALES',
    name: 'MemeWhales',
    addresses: [
      {
        chainId: 1,
        address: '0x70b4178ba7894286357267036d835ae5790358b6',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x70b4178ba7894286357267036d835ae5790358b6.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: '',
  },
  {
    symbol: 'NEKO',
    name: 'Sipher NEKO',
    addresses: [
      {
        chainId: 1,
        address: '0x09e0df4ae51111ca27d6b85708cfb3f1f7cae982',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x09e0df4ae51111ca27d6b85708cfb3f1f7cae982.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://playsipher.com/',
  },
  {
    symbol: 'FLOKITARS',
    name: 'Flokitars',
    addresses: [
      {
        chainId: 1,
        address: '0x23051fe0eb93fabe7b314fd56a95f395058c83b9',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x23051fe0eb93fabe7b314fd56a95f395058c83b9.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://theflokiinu.com/',
  },
  {
    symbol: 'MNL',
    name: 'Moonlight',
    addresses: [
      {
        chainId: 56,
        address: '0x50bd5cf91f81c54f24414b8d5f3f509d805613ca',
      },
    ],
    logo: {
      src: 'https://openseauserdata.com/files/2fd9dadf25d022abd83e1eb256272440.jpg',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://moonlight.ultiverse.io',
  },
  {
    symbol: 'MMC',
    name: 'MurMurCats',
    addresses: [
      {
        chainId: 1,
        address: '0x1fa8da0b63c639a7b53bae343e5761d56f898bac',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x1fa8da0b63c639a7b53bae343e5761d56f898bac.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://murmurcats.club/',
  },
  {
    symbol: 'INF',
    name: 'MetalCore Infantry',
    addresses: [
      {
        chainId: 1,
        address: '0x8e5324d34ee9ab2ed84ac9ba237ca0433e89130c',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x8e5324d34ee9ab2ed84ac9ba237ca0433e89130c.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.metalcore.gg/',
  },
  {
    symbol: 'NSK',
    name: 'NEOSTACKEY',
    addresses: [
      {
        chainId: 1,
        address: '0x998715a4ed2c41bbf4c9181120bb5857627816aa',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x998715a4ed2c41bbf4c9181120bb5857627816aa.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://neostackey.io/',
  },
  {
    symbol: 'gg',
    name: 'Gh0stlyGh0sts',
    addresses: [
      {
        chainId: 1,
        address: '0xa74ae2c6fca0cedbaef30a8ceef834b247186bcf',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xa74ae2c6fca0cedbaef30a8ceef834b247186bcf.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://linktr.ee/gh0stlygh0sts',
  },
  {
    symbol: 'alphagate',
    name: 'Alpha Gate',
    addresses: [
      {
        chainId: 1,
        address: '0xff2b4721f997c242ff406a626f17df083bd2c568',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xff2b4721f997c242ff406a626f17df083bd2c568.gif',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.spacenation.online/',
  },
  {
    symbol: 'ZB',
    name: 'ZuckBots',
    addresses: [
      {
        chainId: 1,
        address: '0xd7448ccba6e1c01a5fbe4748e062c500fcfdf4f2',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xd7448ccba6e1c01a5fbe4748e062c500fcfdf4f2.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'http://mypethooligan.com',
  },
  {
    symbol: 'GLXW',
    name: 'Galaxy-Warriors',
    addresses: [
      {
        chainId: 1,
        address: '0xdfb22066b609da04eddd6bda885b18d0b2153150',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0xdfb22066b609da04eddd6bda885b18d0b2153150.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.galaxy-eggs.com/',
  },
]
