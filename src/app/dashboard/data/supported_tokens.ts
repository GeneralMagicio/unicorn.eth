import {
  arbitrum,
  base,
  ethereum,
  optimism,
  polygon,
  sepolia,
} from 'thirdweb/chains'
import IPermittableToken from '@/lib/abi/IPermittableToken.json'

export enum SupportedChainIds {
  Mainnet = 1,
  Arbitrum = 42161,
  OP = 10,
  Gnosis = 100,
  BSC = 56,
  Polygon = 137,
  Base = 8453,
  Sepolia = 11155111,
}

export const SupportedChains = {
  1: {
    ...ethereum,
  },
  42161: {
    ...arbitrum,
  },
  10: {
    ...optimism,
  },
  100: {
    id: 100,
    name: 'Gnosis Chain',
    rpc: 'https://gnosis-rpc.publicnode.com',
    nativeCurrency: { name: 'xDAI', symbol: 'XDAI', decimals: 18 },
    blockExplorers: [
      {
        name: 'Gnosis Blockscout',
        url: 'https://gnosis.blockscout.com',
        apiUrl: 'https://api-gnosis.blockscout.com',
      },
    ],
  },
  56: {
    id: 56,
    name: 'Binance Smart Chain',
    rpc: 'wss://bsc-rpc.publicnode.com',
    nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
    blockExplorers: [
      {
        name: 'Binance Scan',
        url: 'https://bscscan.com/',
        apiUrl: 'https://api-bscscan.com',
      },
    ],
  },
  137: {
    ...polygon,
  },
  8453: {
    ...base,
  },
  11155111: {
    ...sepolia,
  },
}

export const getChainIds = () => {
  const result: number[] = []
  for (let item in SupportedChainIds) {
    if (!isNaN(Number(item))) {
      result.push(Number(item))
    }
  }
  return result
}

export const getChainNames = () => {
  const result: string[] = []
  for (let item in SupportedChainIds) {
    if (isNaN(Number(item))) {
      result.push(item)
    }
  }
  return result
}

export type SupportedToken = {
  symbol: string
  addresses: {
    chainId: SupportedChainIds
    address: string
    abi?: any // TODO: Change this to ABI type
  }[]
  decimals: number
  name: string
  description: string
  ens_address?: string
  website: string
  logo: {
    src: string
    width: number
    height: number
    ipfs_hash: string
  }
  support?: {
    email: string
    url: string
  }
  social: {
    blog?: string
    chat?: string
    facebook?: string
    forum?: string
    github?: string
    gitter?: string
    instagram?: string
    linkedin?: string
    reddit?: string
    slack?: string
    telegram?: string
    twitter?: string
    youtube?: string
  }
}

const mergeableTokens: Record<SupportedChainIds, Record<string, string[]>> = {
  [SupportedChainIds.Mainnet]: {
    ETH: ['stETH', 'WETH'],
  },
  [SupportedChainIds.Sepolia]: {
    ETH: ['stETH', 'WETH'],
  },
  [SupportedChainIds.Arbitrum]: {
    ETH: ['WETH'],
    USDC: ['USDC.e'],
  },
  [SupportedChainIds.OP]: {
    ETH: ['WETH'],
    USDC: ['USDC.e'],
  },
  [SupportedChainIds.Polygon]: {
    ETH: ['WETH'],
    USDC: ['USDC.e'],
  },
  [SupportedChainIds.Gnosis]: {
    ETH: ['WETH'],
    DAI: ['xDAI'],
  },
  [SupportedChainIds.Base]: {
    ETH: ['WETH'],
  },
  [SupportedChainIds.BSC]: {
    ETH: ['WETH'],
  },
}

export const getAggregateSymbol = (
  symbol: string,
  chainId: SupportedChainIds
) => {
  for (const aggregateSymbol in mergeableTokens[chainId]) {
    if (mergeableTokens[chainId][aggregateSymbol].includes(symbol))
      return aggregateSymbol
  }
  return symbol
}

export const supportedTokens: SupportedToken[] = [
  {
    symbol: 'ETH',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '',
      },
      {
        chainId: SupportedChainIds.Sepolia,
        address: '',
      },
      {
        chainId: SupportedChainIds.Arbitrum,
        address: '',
      },
      {
        chainId: SupportedChainIds.OP,
        address: '',
      },
      {
        chainId: SupportedChainIds.Base,
        address: '',
      },
      {
        chainId: SupportedChainIds.BSC,
        address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
      },
      {
        chainId: SupportedChainIds.Gnosis,
        address: '0xa5c7cb68cd81640D40c85b2e5Ec9E4Bb55Be0214',
      },
    ],
    decimals: 18,
    name: 'Ether',
    description:
      'Ethereum (ETH) is a decentralized platform that enables smart contracts and decentralized applications (DApps) to be built and run without any downtime, fraud, control, or interference from a third party.',
    ens_address: '',
    website: 'https://ethereum.org',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
      width: 28,
      height: 28,
      ipfs_hash: '',
    },
    support: {
      email: '',
      url: '',
    },
    social: {},
  },
  {
    symbol: 'WETH',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      },
      {
        chainId: SupportedChainIds.Arbitrum,
        address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
      },
      {
        chainId: SupportedChainIds.OP,
        address: '0x4200000000000000000000000000000000000006',
      },
      {
        chainId: SupportedChainIds.Polygon,
        address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
      },
      {
        chainId: SupportedChainIds.Base,
        address: '0x4200000000000000000000000000000000000006',
      },
      {
        chainId: SupportedChainIds.BSC,
        address: '0x4DB5a66E937A9F4473fA95b1cAF1d1E1D62E29EA',
      },
      {
        chainId: SupportedChainIds.Gnosis,
        address: '0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1',
      },
    ],
    decimals: 18,
    name: 'Wrapped Ether',
    ens_address: '',
    description:
      'Wrapped Ether (WETH) is a token that represents Ethereum (ETH) on the Ethereum blockchain. WETH enables the use of ETH in decentralized finance (DeFi) applications by providing compatibility with ERC-20 tokens.',
    website: 'https://weth.io/',
    logo: {
      src: '/img/ens.png',
      width: 28,
      height: 28,
      ipfs_hash: '',
    },
    support: {
      email: 'support@makerdao.com',
      url: 'https://chat.makerdao.com',
    },
    social: {},
  },
  {
    symbol: 'stETH',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
      },
    ],
    decimals: 18,
    name: 'stETH',
    description:
      'Staked Ether (stETH) is a token that represents staked ETH in the Ethereum 2.0 network. It allows users to earn rewards on their ETH holdings while maintaining liquidity through the stETH token.',
    website: 'https://stake.lido.fi',
    logo: {
      src: '/img/ens.png',
      width: 64,
      height: 64,
      ipfs_hash: '',
    },
    support: {
      email: 'support@makerdao.com',
      url: 'https://chat.makerdao.com',
    },
    social: {},
  },
  {
    symbol: 'USDT',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      },
      {
        chainId: SupportedChainIds.Arbitrum,
        address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
      },
      {
        chainId: SupportedChainIds.OP,
        address: '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58',
      },
      {
        chainId: SupportedChainIds.BSC,
        address: '0x55d398326f99059ff775485246999027b3197955',
      },
      {
        chainId: SupportedChainIds.Gnosis,
        address: '0x4ECaBa5870353805a9F068101A40E0f32ed605C6',
      },
      {
        chainId: SupportedChainIds.Polygon,
        address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
      },
    ],
    decimals: 6,
    name: 'USD Tether',
    description:
      'Tether (USDT) is a stablecoin pegged to the US dollar, designed to maintain a stable value by being backed 1:1 with USD reserves. It is widely used for trading and transferring value within the crypto ecosystem.',
    ens_address: '',
    website: 'https://tether.to',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
      width: 28,
      height: 28,
      ipfs_hash: '',
    },
    support: {
      email: 'billy@tether.to',
      url: '',
    },
    social: {
      twitter: 'https://twitter.com/tether_to',
    },
  },
  {
    symbol: 'USDC.e',
    addresses: [
      {
        chainId: SupportedChainIds.Arbitrum,
        address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
      },
      {
        chainId: SupportedChainIds.OP,
        address: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
      },
      {
        chainId: SupportedChainIds.Polygon,
        address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      },
    ],
    decimals: 6,
    description:
      'USD Coin (USDC.e) is a version of USDC, a stablecoin fully backed by US dollar reserves, issued on the Avalanche blockchain. It ensures fast, secure, and low-cost transactions.',
    name: 'USD//Coin',
    ens_address: '',
    website: 'https://www.centre.io',
    logo: {
      src: '/img/ens.png',
      width: 28,
      height: 28,
      ipfs_hash: '',
    },
    support: {
      email: '',
      url: 'https://www.centre.io',
    },
    social: {
      github: 'https://github.com/centrehq/centre-tokens',
    },
  },
  {
    symbol: 'USDC',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      },
      {
        chainId: SupportedChainIds.Arbitrum,
        address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
      },
      {
        chainId: SupportedChainIds.OP,
        address: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
      },
      {
        chainId: SupportedChainIds.BSC,
        address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      },
      {
        chainId: SupportedChainIds.Gnosis,
        address: '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
      },
      {
        chainId: SupportedChainIds.Polygon,
        address: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
      },
      {
        chainId: SupportedChainIds.Base,
        address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
      },
    ],
    decimals: 6,
    name: 'USD Coin',
    description:
      'USD Coin (USDC) is a fully collateralized stablecoin pegged to the US dollar. It is widely used for trading, lending, and as a stable store of value in the cryptocurrency ecosystem.',
    ens_address: '',
    website: 'https://www.centre.io',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/6319/large/usdc.png',
      width: 28,
      height: 28,
      ipfs_hash: '',
    },
    support: {
      email: '',
      url: 'https://www.centre.io',
    },
    social: {
      github: 'https://github.com/centrehq/centre-tokens',
    },
  },
  {
    symbol: 'BNB',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
      },
      {
        chainId: SupportedChainIds.BSC,
        address: '',
      },
    ],
    decimals: 18,
    name: 'Binance Coin',
    ens_address: '',
    description:
      'Binance Coin (BNB) is the native cryptocurrency of the Binance exchange. It is used to pay for transaction fees on the platform and can also be used for various applications on the Binance Chain.',
    website: 'https://www.binance.com',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png',
      width: 28,
      height: 28,
      ipfs_hash: '',
    },
    support: {
      email: 'support@binance.zendesk.com',
      url: '',
    },
    social: {
      facebook: 'https://www.facebook.com/binance2017',
      reddit: 'https://www.reddit.com/r/binance',
      twitter: 'https://twitter.com/binance_2017',
    },
  },
  {
    symbol: 'LINK',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
      },
      {
        chainId: SupportedChainIds.Arbitrum,
        address: '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4',
      },
      {
        chainId: SupportedChainIds.OP,
        address: '0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6',
      },
      {
        chainId: SupportedChainIds.BSC,
        address: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
      },
      {
        chainId: SupportedChainIds.Gnosis,
        address: '0xE2e73A1c69ecF83F464EFCE6A5be353a37cA09b2',
      },
    ],
    decimals: 18,
    name: 'LINK Chainlink',
    ens_address: '',
    description:
      'Chainlink (LINK) is a decentralized oracle network that provides real-world data to smart contracts on the blockchain. LINK tokens are used to pay for data services within the Chainlink ecosystem.',
    website: 'https://link.smartcontract.com',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png',
      width: 28,
      height: 28,
      ipfs_hash: '',
    },
    support: {
      email: 'support@smartcontract.com',
      url: '',
    },
    social: {
      slack: 'https://chainlinknetwork.slack.com',
    },
  },
  {
    symbol: 'MATIC',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
      },
      {
        chainId: SupportedChainIds.Polygon,
        address: '',
      },
      {
        chainId: SupportedChainIds.BSC,
        address: '0xcc42724c6683b7e57334c4e856f4c9965ed682bd',
      },
    ],
    decimals: 18,
    name: 'Matic Token',
    ens_address: '',
    description:
      'Polygon (MATIC) is a layer 2 scaling solution for Ethereum, providing faster and cheaper transactions. MATIC tokens are used for staking, transaction fees, and governance within the Polygon network.',
    website: 'https://polygon.technology/',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/4713/large/polygon.png',
      width: 28,
      height: 28,
      ipfs_hash: '',
    },
    support: {
      email: '',
      url: '',
    },
    social: {},
  },
  {
    symbol: 'WBTC',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      },
      {
        chainId: SupportedChainIds.Arbitrum,
        address: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
      },
      {
        chainId: SupportedChainIds.OP,
        address: '0x68f180fcce6836688e9084f035309e29bf0a2095',
      },
    ],
    decimals: 8,
    name: 'Wrapped Bitcoin',
    ens_address: '',
    description:
      "Wrapped Bitcoin (WBTC) is an ERC-20 token representing Bitcoin (BTC) on the Ethereum blockchain. It allows Bitcoin holders to participate in Ethereum's decentralized finance (DeFi) ecosystem.",
    website: 'https://wbtc.network',
    logo: {
      src: 'https://www.wbtc.network/assets/BitGo-favicon.ico',
      width: 48,
      height: 48,
      ipfs_hash: '',
    },
    support: {
      email: '',
      url: '',
    },
    social: {
      github: 'https://github.com/WrappedBTC',
    },
  },
  {
    symbol: 'TON',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x6a6c2ada3ce053561c2fbc3ee211f23d9b8c520a',
      },
      {
        chainId: SupportedChainIds.BSC,
        address: '0x76a797a59ba2c17726896976b7b3747bfd1d220f',
      },
    ],
    decimals: 18,
    name: 'TONToken',
    description:
      'TON (The Open Network) is a blockchain platform originally developed by Telegram. It aims to enable fast and secure transactions, along with supporting smart contracts and decentralized applications.',
    ens_address: '',
    website: 'https://toncommunity.org',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/12334/large/ton.jpg',
      width: 48,
      height: 48,
      ipfs_hash: '',
    },
    support: {
      email: '',
      url: '',
    },
    social: {},
  },
  {
    symbol: 'SHIB',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
      },
    ],
    decimals: 18,
    name: 'SHIBA INU',
    ens_address: '',
    description:
      'Shiba Inu (SHIB) is a decentralized meme token that grew into a vibrant ecosystem. It is inspired by the Shiba Inu dog breed and aims to create a fun and community-driven project in the crypto space.',
    website: 'https://shibatoken.com',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/11939/large/shiba.png',
      width: 128,
      height: 128,
      ipfs_hash: '',
    },
    support: {
      url: 'https://shibatoken.com',
      email: 'shibaswap@shibatoken.com',
    },
    social: {
      telegram: 'https://t.me/shibainuthedogecoinkiller',
      twitter: 'https://twitter.com/shibtoken',
    },
  },
  {
    symbol: 'GIV',
    name: 'Giveth',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x900dB999074d9277c5DA2A43F252D74366230DA0',
      },
      {
        chainId: SupportedChainIds.OP,
        address: '0x528CDc92eAB044E1E39FE43B9514bfdAB4412B98',
      },
      {
        chainId: SupportedChainIds.Gnosis,
        address: '0x4f4f9b8d5b4d0dc10506e5551b0513b61fd59e75',
        abi: IPermittableToken.abi,
      },
    ],
    decimals: 18,
    ens_address: '',
    description:
      'Giveth (GIV) is a cryptocurrency designed to support the Giveth ecosystem, which focuses on creating a decentralized, transparent platform for charitable giving and social impact projects.',
    website: 'https://giveth.io/',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/21792/large/GIVToken_200x200.png',
      width: 226,
      height: 226,
      ipfs_hash: '',
    },
    support: {
      email: 'info@giveth.io',
      url: 'https://giveth.io/support',
    },
    social: {
      blog: 'https://medium.com/giveth',
      // discord: 'https://discord.giveth.io/',
      facebook: 'https://www.facebook.com/givethio',
      forum: 'https://forum.giveth.io/',
      github: 'https://github.com/Giveth',
      instagram: 'https://www.instagram.com/giveth.io/',
      linkedin: 'https://www.linkedin.com/company/givethio/',
      reddit: 'https://www.reddit.com/r/giveth/',
      telegram: 'https://t.me/Givethio',
      twitter: 'https://twitter.com/Givethio',
      youtube: 'https://www.youtube.com/channel/UClfutpRoY0WTVnq0oB0E0wQ',
    },
  },
  {
    symbol: 'ADA',
    addresses: [
      {
        chainId: SupportedChainIds.BSC,
        address: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
      },
    ],
    decimals: 6,
    name: 'Cardano',
    description:
      "Cardano (ADA) is a blockchain platform for changemakers, innovators, and visionaries. ADA is the native token, used for transactions, staking, and participating in the platform's governance.",
    ens_address: 'cardano.eth',
    website: 'https://cardano.org',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/975/large/cardano.png',
      width: 128,
      height: 128,
      ipfs_hash: 'QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq',
    },
    support: {
      email: 'support@cardano.org',
      url: 'https://cardano.org/support',
    },
    social: {
      blog: 'https://cardano.org/blog',
      chat: 'https://cardano.org/community',
      facebook: 'https://facebook.com/cardano',
      forum: 'https://forum.cardano.org',
      github: 'https://github.com/input-output-hk/cardano-node',
      reddit: 'https://reddit.com/r/cardano',
      slack: 'https://cardano.org/slack',
      twitter: 'https://twitter.com/cardano',
      youtube: 'https://youtube.com/cardano',
    },
  },
  {
    symbol: 'XRP',
    addresses: [
      {
        chainId: SupportedChainIds.BSC,
        address: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
      },
    ],
    decimals: 6,
    name: 'Ripple',
    ens_address: 'ripple.eth',
    website: 'https://ripple.com',
    description:
      'XRP is the native cryptocurrency of the Ripple network, designed to facilitate fast and low-cost international money transfers. It is used by financial institutions for cross-border payments.',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/4648/large/Ripple.png',
      width: 128,
      height: 128,
      ipfs_hash: 'QmXK9QxNCPx4tPQgYx2QgRQEjLZkjMGy6kxqx4Yxgq4PqP',
    },
    support: {
      email: 'support@ripple.com',
      url: 'https://ripple.com/support/',
    },
    social: {
      blog: 'https://ripple.com/blog',
      chat: 'https://ripple.com/community',
      facebook: 'https://facebook.com/ripple',
      forum: 'https://forum.ripple.com',
      github: 'https://github.com/ripple',
      reddit: 'https://reddit.com/r/ripple',
      slack: 'https://ripple.com/slack',
      twitter: 'https://twitter.com/ripple',
      youtube: 'https://youtube.com/ripple',
    },
  },
  {
    symbol: 'AVAX',
    addresses: [
      {
        chainId: SupportedChainIds.BSC,
        address: '0x1CE0c2827e2eF14D5C4f29a091d735A204794041',
      },
    ],
    decimals: 18,
    description:
      'Avalanche (AVAX) is a high-performance blockchain platform designed for decentralized applications and enterprise solutions. AVAX tokens are used for transaction fees, staking, and governance.',
    website: 'http://avax.network',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png',
      width: 128,
      height: 128,
      ipfs_hash: 'QmXK9QxNCPx4tPQgYx2QgRQEjLZkjMGy6kxqx4Yxgq4PqP',
    },
    name: 'Binance-Peg Avalanche Token',
    social: {
      github: 'https://github.com/ava-labs',
    },
  },
  {
    symbol: 'SOL',
    addresses: [
      {
        chainId: SupportedChainIds.BSC,
        address: '0x570A5D26f7765Ecb712C0924E4De545B89fD43dF',
      },
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xD31a59c85aE9D8edEFeC411D448f90841571b89c',
      },
    ],
    decimals: 18,
    name: 'Solana',
    description:
      'Solana (SOL) is a high-performance blockchain supporting developers around the world in building decentralized applications and marketplaces. SOL is the native token used for transaction fees and staking.',
    website: '',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
      width: 64,
      height: 64,
      ipfs_hash: '',
    },
    support: { email: '', url: '' },
    social: {},
  },
  {
    symbol: 'DOGE',
    addresses: [
      {
        chainId: SupportedChainIds.BSC,
        address: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
      },
    ],
    name: 'Dogecoin',
    ens_address: '',
    decimals: 8,
    description:
      "Dogecoin (DOGE) is a peer-to-peer cryptocurrency featuring a likeness of the Shiba Inu dog from the 'Doge' meme as its logo. It started as a joke but has gained a large and enthusiastic community.",
    website: '',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png',
      width: 64,
      height: 64,
      ipfs_hash: '',
    },
    support: { email: '', url: '' },
    social: {},
  },
  {
    symbol: 'TRX',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x50327c6c5a14dcade707abad2e27eb517df87ab5',
      },
      {
        chainId: SupportedChainIds.BSC,
        address: '0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e3',
      },
    ],
    description:
      'TRON (TRX) is a blockchain platform designed to decentralize the web and enable the creation and sharing of content without intermediaries. TRX is the native token used for transactions and network operations.',
    name: 'TRON',
    decimals: 6,
    website: 'https://tron.network/',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/1094/large/tron-logo.png',
      width: 64,
      height: 64,
      ipfs_hash: '',
    },
    social: {
      twitter: 'https://twitter.com/Tronfoundation',
      telegram: 'https://t.me/tronnetworkEN',
    },
  },
  {
    symbol: 'DOT',
    addresses: [
      {
        chainId: SupportedChainIds.BSC,
        address: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
      },
    ],
    name: 'BNB pegged Polkadot Token',
    decimals: 18,
    description:
      'Polkadot (DOT) is a multi-chain blockchain platform designed to enable different blockchains to interoperate. DOT tokens are used for governance, staking, and bonding within the Polkadot ecosystem.',
    website: 'https://polkadot.network',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png',
      width: 64,
      height: 64,
      ipfs_hash: '',
    },
    social: {},
  },
  {
    symbol: 'DAI',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      },
      {
        chainId: SupportedChainIds.OP,
        address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
      },
      {
        chainId: SupportedChainIds.Gnosis,
        address: '0x44fA8E6f47987339850636F88629646662444217',
      },
      {
        chainId: SupportedChainIds.BSC,
        address: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
      },
      {
        chainId: SupportedChainIds.Arbitrum,
        address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
      },
      {
        chainId: SupportedChainIds.Polygon,
        address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
      },
      {
        chainId: SupportedChainIds.Base,
        address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
      },
    ],
    decimals: 18,
    name: 'Dai Stablecoin',
    description:
      'Dai (DAI) is a decentralized stablecoin pegged to the US dollar, maintained by the MakerDAO system. It is generated through collateralized debt positions and is used in various DeFi applications.',
    ens_address: '',
    website: 'https://makerdao.com',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/9956/large/Badge_Dai.png',
      width: 64,
      height: 64,
      ipfs_hash: '',
    },
    support: {
      email: 'support@makerdao.com',
      url: 'https://chat.makerdao.com',
    },
    social: {
      chat: 'https://chat.makerdao.com',
      github: 'https://github.com/makerdao',
      reddit: 'https://www.reddit.com/r/MakerDAO',
      twitter: 'https://twitter.com/MakerDAO',
    },
  },
  {
    symbol: 'xDAI',
    addresses: [
      {
        chainId: SupportedChainIds.Gnosis,
        address: '',
      },
    ],
    decimals: 18,
    name: 'xDai',
    description:
      'xDai (xDAI) is a stablecoin pegged to the US dollar and used on the xDai Chain, which is designed for fast and inexpensive transactions. It is popular for payments and decentralized finance (DeFi) applications.',
    ens_address: '',
    logo: {
      src: '/img/ens.png',
      width: 64,
      height: 64,
      ipfs_hash: '',
    },
    website: 'https://xdaichain.com',
    social: {
      github: 'https://github.com/xdaichain',
      twitter: 'https://twitter.com/xdaichain',
    },
  },
  {
    name: 'Optimism',
    symbol: 'OP',
    addresses: [
      {
        chainId: SupportedChainIds.OP,
        address: '0x4200000000000000000000000000000000000042',
      },
    ],
    decimals: 18,
    description:
      'Optimism (OP) is a layer 2 scaling solution for Ethereum, aimed at reducing transaction costs and increasing throughput. OP tokens are used for governance and to incentivize network participants.',
    website: 'https://app.optimism.io/governance',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/25244/large/Optimism.png',
      width: 64,
      height: 64,
      ipfs_hash: '',
    },
    social: {
      twitter: 'https://twitter.com/optimismPBC',
      github: 'https://github.com/ethereum-optimism/',
    },
  },
  {
    name: 'Arbitrum',
    symbol: 'ARB',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1',
      },
      {
        chainId: SupportedChainIds.Arbitrum,
        address: '0x912ce59144191c1204e64559fe8253a0e49e6548',
      },
    ],
    decimals: 18,
    description:
      'Arbitrum (ARB) is a layer 2 scaling solution for Ethereum, designed to enhance the speed and reduce the cost of transactions. ARB tokens are used within the network for transaction fees and governance.',
    website: 'https://arbitrum.foundation/',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/16547/large/photo_2023-03-29_21.47.00.jpeg',
      width: 64,
      height: 64,
      ipfs_hash: '',
    },
    social: {
      twitter: 'https://twitter.com/arbitrum',
    },
  },
  {
    name: 'Ethereum Name Service',
    symbol: 'ENS',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72',
      },
    ],
    decimals: 18,
    description:
      'Ethereum Name Service (ENS) is a distributed, open, and extensible naming system based on the Ethereum blockchain. ENS tokens are used for governance and incentivizing participants in the ecosystem.',
    website: 'https://ens.domains',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/19785/large/acatxTm8_400x400.jpg',
      width: 64,
      height: 64,
      ipfs_hash: '',
    },
    social: {
      twitter: 'https://twitter.com/ensdomains',
      github: 'https://github.com/ensdomains',
      blog: 'https://medium.com/the-ethereum-name-service',
    },
  },
  {
    name: 'UnicornTestToken',
    symbol: 'MT',
    description:
      'MyToken (MT) is a cryptocurrency designed to support the MyToken ecosystem, which aims to provide real-time market data, news, and insights to cryptocurrency investors and enthusiasts.',
    addresses: [
      {
        chainId: SupportedChainIds.Sepolia,
        address: '0x87e42ef3f93e764ecc4f6179be71b667d2f35ac2',
      },
    ],
    decimals: 18,
    website: '',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
      width: 28,
      height: 28,
      ipfs_hash: '',
    },
    support: {
      email: '',
      url: '',
    },
    social: {},
  },
]
