import useSWRMutation from 'swr/mutation'
import { useAuth } from './useAuth'
import axios from 'axios'
import { poapService } from '@/services/poap'
import useSWR from 'swr'
import { useMemo } from 'react'

export function usePOAP() {
  const { userAddress } = useAuth()
  const { data: tokenData, isLoading: isGettingToken } = useSWR<{
    data: { access_token: string }
  }>(
    'poap-access-token',
    () => poapService.postOauthToken(),
    // axios.post('/api/poap/token').then((res) => res.data),
    { revalidateIfStale: false }
  )
  console.log({ tokenData })
  const { data: mintLinks } = useSWR(
    () => tokenData?.data?.access_token,
    () => poapService.postEventQRCodes(tokenData?.data?.access_token!),
    // axios
    //   .post<Array<{ qr_hash: string; claimed: boolean }>>(
    //     `/api/poap/event`,
    //     null,
    //     { params: { token: tokenData?.access_token } }
    //   )
    //   .then((res) => res.data),
    { revalidateIfStale: false }
  )
  console.log({ mintLinks })

  const { trigger: postMint, isMutating: isMinting } = useSWRMutation(
    ['poap-event-qrcode', tokenData?.data?.access_token],
    async ([, access_token]) =>
      poapService.mint({
        token: access_token!,
        address: userAddress,
        mintLink: mintLink!,
      })
  )

  const { data: poapMintData, isLoading: isCheckingPOAPStatus } = useSWR(
    `poap-actions-${userAddress}`,
    () =>
      !userAddress
        ? Promise.resolve(undefined)
        : poapService.getActionsScan({ address: userAddress }),
    { revalidateIfStale: false }
  )

  const mintLink = useMemo(
    () => mintLinks?.data?.find((link) => !link.claimed),
    [mintLinks]
  )

  const canMintPOAP = !isCheckingPOAPStatus && !poapMintData && mintLink
  console.log({ poapMintData, canMintPOAP, mintLink })

  return {
    isGettingToken,
    isMinting,
    canMintPOAP: Boolean(canMintPOAP),
    postMint,
  }
}
