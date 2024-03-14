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


export const enumerableNFTs = [
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
]
