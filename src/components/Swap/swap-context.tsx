import {
  createCryptoTokenObject,
  fetchTokenPrices,
} from '@/app/dashboard/utils/tokens'
import { useAuth } from '@/hooks/useAuth'
import { useBalance } from '@/hooks/useBalance'
import { ICryptoToken } from '@/services/types'
import { MOCK_TOKENS, USDC_TOKEN } from '@/utils/db'
import React, { createContext, useContext, useMemo, useState } from 'react'
import useSWR from 'swr'

export type SwapSelectedTokens = Record<string, ICryptoToken>

interface ContextData {
  selectedTokens: SwapSelectedTokens
  destinationToken: ICryptoToken
  tokens: ICryptoToken[]
  error: string
  step: number
  selectedCount: number
  isAllSelected: boolean
  setSelectedTokens: React.Dispatch<React.SetStateAction<SwapSelectedTokens>>
  setDestinationToken: React.Dispatch<React.SetStateAction<ICryptoToken>>
  setStep: React.Dispatch<React.SetStateAction<number>>
  setError: React.Dispatch<React.SetStateAction<string>>
}

const SwapContext = createContext<ContextData | undefined>(undefined)

export const useSwapContext = () => {
  const context = useContext(SwapContext)
  if (!context) {
    throw new Error('useSwapContext must be used within a SwapContextProvider')
  }
  return context
}

// Create a provider component that will wrap your app
export const SwapContextProvider: React.FC<{
  children: React.ReactElement
}> = ({ children }) => {
  const { userAddress } = useAuth()
  const [selectedTokens, setSelectedTokens] = useState<SwapSelectedTokens>({})
  const [destinationToken, setDestinationToken] =
    useState<ICryptoToken>(USDC_TOKEN)
  const [step, setStep] = useState(0)
  const [error, setError] = useState('')
  const selectedCount = useMemo(
    () => Object.keys(selectedTokens).length,
    [selectedTokens]
  )
  const { tokenBalance, errors } = useBalance(userAddress)
  const { data: tokenPrices, error: pricesError } = useSWR<
    Record<string, number>
  >('token-prices', fetchTokenPrices)
  const tokens = tokenPrices
    ? createCryptoTokenObject(tokenBalance, tokenPrices)
    : []
  const isAllSelected = selectedCount === tokens.length

  // Pass the states and their setters down through the context
  const contextValue: ContextData = {
    tokens,
    step,
    error,
    setStep,
    setError,
    isAllSelected,
    selectedCount,
    selectedTokens,
    destinationToken,
    setSelectedTokens,
    setDestinationToken,
  }

  return (
    <SwapContext.Provider value={contextValue}>{children}</SwapContext.Provider>
  )
}
