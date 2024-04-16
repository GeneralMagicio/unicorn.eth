import useSWRMutation from 'swr/mutation'
import { useAuth } from './useAuth'
import axios from 'axios'
import { poapService } from '@/services/poap'
import useSWR from 'swr'
import { useMemo } from 'react'

export function usePOAP() {
  const { userAddress } = useAuth()
  const { data: tokenData, isLoading: isGettingToken } = useSWR<{
    access_token: string
  }>(
    'poap-access-token',
    () => axios.post('/api/poap/token').then((res) => res.data),
    { revalidateIfStale: false }
  )
  const { data: mintLinks } = useSWR(
    () => tokenData?.access_token,
    () =>
      axios
        .post<Array<{ qr_hash: string; claimed: boolean }>>(
          `/api/poap/event`,
          null,
          { params: { token: tokenData?.access_token } }
        )
        .then((res) => res.data),
    { revalidateIfStale: false }
  )

  const { trigger: postMint, isMutating: isMinting } = useSWRMutation(
    ['poap-event-qrcode', tokenData?.access_token],
    async ([, access_token]) =>
      poapService.mint({
        token: access_token!,
        address: userAddress,
        mintLink: mintLink!,
      })
  )

  const { data: poapMintData, isLoading: isCheckingPOAPStatus } = useSWR<{
    owner?: string
    error?: string
  }>(
    `poap-actions-${userAddress}`,
    () =>
      !userAddress
        ? Promise.resolve(undefined)
        : axios
            .get('/api/poap/actions', {
              params: { address: userAddress },
            })
            .then((res) => res.data),
    { revalidateIfStale: false }
  )

  const mintLink = useMemo(
    () => mintLinks?.find((link) => !link.claimed),
    [mintLinks]
  )

  const canMintPOAP =
    poapMintData !== undefined && !poapMintData?.owner && mintLink

  return {
    isGettingToken,
    isMinting,
    canMintPOAP,
    postMint,
  }
}
