// type SupportedChainIds = 1 | 42161 | 10 | 100

// type SupportedToken = {
//   symbol: string
//   addresses: {
//     chainId: SupportedChainIds
//     address: string
//   }[]
//   decimals: number
//   name: string
//   ens_address: string
//   website: string
//   logo: {
//     src: string
//     width: number
//     height: number
//     ipfs_hash: string
//   }
//   support: {
//     email: string
//     url: string
//   }
//   social: {
//     blog?: string
//     chat?: string
//     facebook?: string
//     forum?: string
//     github?: string
//     gitter?: string
//     instagram?: string
//     linkedin?: string
//     reddit?: string
//     slack?: string
//     telegram?: string
//     twitter?: string
//     youtube?: string
//   }
// }

// const supportedTokens: SupportedToken[] = [
//   {
//     symbol: 'ETH',
//     addresses: [
//       {
//         chainId: 1,
//         address: '',
//       },
//       {
//         chainId: 42161,
//         address: '',
//       },
//       {
//         chainId: 10,
//         address: '',
//       },
//       {
//         chainId: 100,
//         address: '',
//       },
//     ],
//     decimals: 18,
//     name: 'Ether',
//     ens_address: '',
//     website: 'https://ethereum.org',
//     logo: {
//       src: 'https://etherscan.io/token/images/ether28_2.png',
//       width: 28,
//       height: 28,
//       ipfs_hash: '',
//     },
//     support: {
//       email: '',
//       url: '',
//     },
//     social: {},
//   },
//   {
//     symbol: 'USDT',
//     addresses: [
//       {
//         chainId: 1,
//         address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
//       },
//       {
//         chainId: 42161,
//         address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
//       },
//       {
//         chainId: 10,
//         address: '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58',
//       },
//       {
//         chainId: 100,
//         address: '0x4ECaBa5870353805a9F068101A40E0f32ed605C6',
//       },
//     ],
//     decimals: 6,
//     name: 'USD Tether',
//     ens_address: '',
//     website: 'https://tether.to',
//     logo: {
//       src: 'https://etherscan.io/token/images/tether28_2.png',
//       width: 28,
//       height: 28,
//       ipfs_hash: '',
//     },
//     support: {
//       email: 'billy@tether.to',
//       url: '',
//     },
//     social: {
//       twitter: 'https://twitter.com/tether_to',
//     },
//   },
//   {
//     symbol: 'USDC',
//     addresses: [
//       {
//         chainId: 1,
//         address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
//       },
//       {
//         chainId: 42161,
//         address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
//       },
//       {
//         chainId: 10,
//         address: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
//       },
//       {
//         chainId: 100,
//         address: '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
//       },
//     ],
//     decimals: 6,
//     name: 'USD//Coin',
//     ens_address: '',
//     website: 'https://www.centre.io',
//     logo: {
//       src: '',
//       width: 28,
//       height: 28,
//       ipfs_hash: '',
//     },
//     support: {
//       email: '',
//       url: 'https://www.centre.io',
//     },
//     social: {
//       github: 'https://github.com/centrehq/centre-tokens',
//     },
//   },
//   {
//     symbol: 'BNB',
//     addresses: [
//       {
//         chainId: 1,
//         address: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
//       },
//     ],
//     decimals: 18,
//     name: 'Binance Coin',
//     ens_address: '',
//     website: 'https://www.binance.com',
//     logo: {
//       src: 'https://etherscan.io/token/images/binance_28.png',
//       width: 28,
//       height: 28,
//       ipfs_hash: '',
//     },
//     support: {
//       email: 'support@binance.zendesk.com',
//       url: '',
//     },
//     social: {
//       facebook: 'https://www.facebook.com/binance2017',
//       reddit: 'https://www.reddit.com/r/binance',
//       twitter: 'https://twitter.com/binance_2017',
//     },
//   },
//   {
//     symbol: 'LINK (Chainlink)',
//     addresses: [
//       {
//         chainId: 1,
//         address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
//       },
//       {
//         chainId: 42161,
//         address: '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4',
//       },
//       {
//         chainId: 10,
//         address: '0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6',
//       },
//       {
//         chainId: 100,
//         address: '0xE2e73A1c69ecF83F464EFCE6A5be353a37cA09b2',
//       },
//     ],
//     decimals: 18,
//     name: 'LINK Chainlink',
//     ens_address: '',
//     website: 'https://link.smartcontract.com',
//     logo: {
//       src: '',
//       width: 28,
//       height: 28,
//       ipfs_hash: '',
//     },
//     support: {
//       email: 'support@smartcontract.com',
//       url: '',
//     },
//     social: {
//       slack: 'https://chainlinknetwork.slack.com',
//     },
//   },
//   {
//     symbol: 'MATIC',
//     addresses: [
//       {
//         chainId: 1,
//         address: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
//       },
//     ],
//     decimals: 18,
//     name: 'Matic Token',
//     ens_address: '',
//     website: 'https://polygon.technology/',
//     logo: {
//       src: '',
//       width: 28,
//       height: 28,
//       ipfs_hash: '',
//     },
//     support: {
//       email: '',
//       url: '',
//     },
//     social: {},
//   },
//   {
//     symbol: 'WBTC',
//     addresses: [
//       {
//         chainId: 1,
//         address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
//       },
//       {
//         chainId: 42161,
//         address: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
//       },
//       {
//         chainId: 10,
//         address: '0x68f180fcce6836688e9084f035309e29bf0a2095',
//       },
//     ],
//     decimals: 8,
//     name: 'Wrapped Bitcoin',
//     ens_address: '',
//     website: 'https://wbtc.network',
//     logo: {
//       src: 'https://www.wbtc.network/assets/BitGo-favicon.ico',
//       width: 48,
//       height: 48,
//       ipfs_hash: '',
//     },
//     support: {
//       email: '',
//       url: '',
//     },
//     social: {
//       github: 'https://github.com/WrappedBTC',
//     },
//   },
//   {
//     symbol: 'TON',
//     addresses: [
//       {
//         chainId: 1,
//         address: '0x6a6c2ada3ce053561c2fbc3ee211f23d9b8c520a',
//       },
//     ],
//     decimals: 18,
//     name: 'TONToken',
//     ens_address: '',
//     website: 'https://toncommunity.org',
//     logo: {
//       src: 'https://assets.coingecko.com/coins/images/12334/large/ton.jpg',
//       width: 48,
//       height: 48,
//       ipfs_hash: '',
//     },
//     support: {
//       email: '',
//       url: '',
//     },
//     social: {},
//   },
//   {
//     symbol: 'SHIB',
//     addresses: [
//       {
//         chainId: 1,
//         address: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
//       },
//     ],
//     decimals: 18,
//     name: 'SHIBA INU',
//     ens_address: '',
//     website: 'https://shibatoken.com',
//     logo: {
//       src: 'https://i.ibb.co/bQqBbSH/shib-logo.png',
//       width: 128,
//       height: 128,
//       ipfs_hash: '',
//     },
//     support: {
//       url: 'https://shibatoken.com',
//       email: 'shibaswap@shibatoken.com',
//     },
//     social: {
//       telegram: 'https://t.me/shibainuthedogecoinkiller',
//       twitter: 'https://twitter.com/shibtoken',
//     },
//   },
//   {
//     symbol: 'GIV',
//     name: 'Giveth',
//     addresses: [
//       {
//         chainId: 1,
//         address: '0x900dB999074d9277c5DA2A43F252D74366230DA0',
//       },
//       {
//         chainId: 10,
//         address: '0x528CDc92eAB044E1E39FE43B9514bfdAB4412B98',
//       },
//       {
//         chainId: 100,
//         address: '0x4f4f9b8d5b4d0dc10506e5551b0513b61fd59e75',
//       },
//     ],
//     decimals: 18,
//     ens_address: '',
//     website: 'https://giveth.io/',
//     logo: {
//       src: 'https://raw.githubusercontent.com/Giveth/giveth-design-assets/master/02-logos/GIV%20Token/GIVToken_200x200.png',
//       width: 226,
//       height: 226,
//       ipfs_hash: '',
//     },
//     support: {
//       email: 'info@giveth.io',
//       url: 'https://giveth.io/support',
//     },
//     social: {
//       blog: 'https://medium.com/giveth',
//       // discord: 'https://discord.giveth.io/',
//       facebook: 'https://www.facebook.com/givethio',
//       forum: 'https://forum.giveth.io/',
//       github: 'https://github.com/Giveth',
//       instagram: 'https://www.instagram.com/giveth.io/',
//       linkedin: 'https://www.linkedin.com/company/givethio/',
//       reddit: 'https://www.reddit.com/r/giveth/',
//       telegram: 'https://t.me/Givethio',
//       twitter: 'https://twitter.com/Givethio',
//       youtube: 'https://www.youtube.com/channel/UClfutpRoY0WTVnq0oB0E0wQ',
//     },
//   },
// ]
