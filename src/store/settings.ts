import { atom } from 'jotai'

export const Appearances = ['light', 'dark', 'system'] as const

export const LocalCurrenciesDict = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BDT: 'Bangladeshi Taka',
  CAD: 'Canadian Dollar',
  EUR: 'Euro',
  INR: 'Indian Rupee',
  IQD: 'Iraqi Dinar',
  JPY: 'Japanese Yen',
  KWD: 'Kuwaiti Dinar',
  CHF: 'Swiss Franc',
  AED: 'United Arab Emirates Dhiram',
} as const

export type LocalCurrencyType = keyof typeof LocalCurrenciesDict
export const appearanceAtom = atom<(typeof Appearances)[number]>('light')
export const localCurrencyAtom = atom<LocalCurrencyType>('USD')
export const showUnverifiedTokensAtom = atom<boolean>(false)
