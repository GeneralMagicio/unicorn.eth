export enum SupportedChainIds {
  Mainnet = 1,
  Arbitrum = 42161,
  OP = 10,
  Gnosis = 100,
  BSC = 56,
  Polygon = 137,
  Base = 8453,
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

// export const mapChainIdsToNames = () =>
// export const mapChainNamesToIds = () =>

export type SupportedToken = {
  symbol: string
  addresses: {
    chainId: SupportedChainIds
    address: string
  }[]
  decimals: number
  name: string
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

const mergeableTokens = {
  ETH: ['stETH', 'WETH'],
  USDC: ['USDC.e'],
  DAI: ['xDAI'],
}

export const getAggregateSymbol = (symbol: string) => {
  let aggregateSymbol : keyof typeof mergeableTokens;
  for (aggregateSymbol in mergeableTokens) {
    if (mergeableTokens[aggregateSymbol].includes(symbol)) return aggregateSymbol
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
    ens_address: '',
    website: 'https://ethereum.org',
    logo: {
      src: 'https://etherscan.io/token/images/ether28_2.png',
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
    website: 'https://weth.io/',
    logo: {
      src: '',
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
    website: 'https://stake.lido.fi',
    logo: {
      src: '',
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
    ens_address: '',
    website: 'https://tether.to',
    logo: {
      src: 'https://etherscan.io/token/images/tether28_2.png',
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
    name: 'USD//Coin',
    ens_address: '',
    website: 'https://www.centre.io',
    logo: {
      src: '',
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
    name: 'USD//Coin',
    ens_address: '',
    website: 'https://www.centre.io',
    logo: {
      src: '',
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
    website: 'https://www.binance.com',
    logo: {
      src: 'https://etherscan.io/token/images/binance_28.png',
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
    website: 'https://link.smartcontract.com',
    logo: {
      src: '',
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
    website: 'https://polygon.technology/',
    logo: {
      src: '',
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
    website: 'https://shibatoken.com',
    logo: {
      src: 'https://i.ibb.co/bQqBbSH/shib-logo.png',
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
      },
    ],
    decimals: 18,
    ens_address: '',
    website: 'https://giveth.io/',
    logo: {
      src: 'https://raw.githubusercontent.com/Giveth/giveth-design-assets/master/02-logos/GIV%20Token/GIVToken_200x200.png',
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
    ens_address: 'cardano.eth',
    website: 'https://cardano.org',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/12170/large/cardano.png',
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
    website: 'http://avax.network',
    logo: {
      src: 'https://assets.coingecko.com/coins/images/4648/large/Ripple.png',
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
    website: '',
    logo: { src: '', width: 64, height: 64, ipfs_hash: '' },
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
    website: '',
    logo: { src: '', width: 64, height: 64, ipfs_hash: '' },
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
    name: 'TRON',
    decimals: 6,
    website: 'https://tron.network/',
    logo: { src: '', width: 64, height: 64, ipfs_hash: '' },
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
    website: 'https://polkadot.network',
    logo: { src: '', width: 64, height: 64, ipfs_hash: '' },
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
    name: 'Dai Stablecoin v2.0',
    ens_address: '',
    website: 'https://makerdao.com',
    logo: {
      src: '',
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
    ens_address: '',
    logo: {
      src: '',
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
    website: 'https://app.optimism.io/governance',
    logo: {
      src: '',
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
    website: 'https://arbitrum.foundation/',
    logo: {
      src: '',
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
    website: 'https://ens.domains',
    logo: {
      src: '',
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
]