import { Collectible } from '@/services/types'

export const MOCK_TOKENS = [
  // { name: 'ETH', value: 6.387, price: 14394.57, icon: '/img/eth.png' },
  { name: 'ENS', value: 4308.1, price: 3726.88, icon: '/img/ens.png' },
  { name: 'USDT', value: 47.883, price: 47.88, icon: '/img/usdt.png' },
  { name: 'UNI', value: 2.64, price: 16.52, icon: '/img/uni.png' },
]

export const MOCK_COLLECTIBLES: Collectible[] = [
  {
    id: "1",
    name: 'Cute Cat',
    org: 'Cats',
    floorPrice: 0.2,
    description: 'Cute cats are lovely',
    about: 'Cute cats are lovely',
    website: 'cute.cat',
    OsUrl: 'https://opensea.io/assets/ethereum/0x960b7a6bcd451c9968473f7bbfd9be826efd549a/7397',
    img: '/img/domico.eth.png',
  },
  {
    id: "2",
    name: 'LiL Noun 547',
    org: 'Lil Nouns',
    floorPrice: 0.084,
    description: 'LiL Noun 547 is a member of the Lil Nouns DAO.',
    about: 'One Lil Noun, every 15 minutes, forever.',
    website: 'lilnouns.wtf',
    OsUrl: 'https://opensea.io/assets/ethereum/0x960b7a6bcd451c9968473f7bbfd9be826efd549a/7397',
    img: '/img/ln547.png',
  },
  {
    id: "3",
    name: 'LiL Noun 547',
    org: 'Lil Nouns',
    floorPrice: 0.084,
    description: 'LiL Noun 547 is a member of the Lil Nouns DAO.',
    about: 'One Lil Noun, every 15 minutes, forever.',
    website: 'lilnouns.wtf',
    OsUrl: 'https://opensea.io/assets/ethereum/0x960b7a6bcd451c9968473f7bbfd9be826efd549a/7397',
    img: '/img/jefflau.eth.png',
  },
  {
    id: "4",
    name: 'LiL Noun 547',
    org: 'Lil Nouns',
    floorPrice: 0.084,
    description: 'LiL Noun 547 is a member of the Lil Nouns DAO.',
    about: 'One Lil Noun, every 15 minutes, forever.',
    website: 'lilnouns.wtf',
    OsUrl: 'https://opensea.io/assets/ethereum/0x960b7a6bcd451c9968473f7bbfd9be826efd549a/7397',
    img: '/img/luc.computer.png',
  },
]
