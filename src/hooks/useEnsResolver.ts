import { getSubnameMetadata } from '@/services/enService'
import { useSafeAuth } from './useSafeAuth'
import { useCallback, useState } from 'react'
import { debounce } from '@/utils/debounce'
import { resolveAddress } from 'ethers'
import axios from 'axios'
import { SubnameResolutionResponse } from '@/services/types/ens'
import { useActiveAccount, useActiveWallet } from 'thirdweb/react'

export function useEnsResolver() {
  const { mainnetProvider } = useSafeAuth()
  const [isNameAvailable, setIsNameAvailable] = useState<boolean | null>(null)
  const [isRegistering, setISRegistering] = useState<boolean>(false)

  const account = useActiveAccount()

  const checkUserName = async (input: string) => {
    console.log("Here,", input)
    if (/[A-Z]/.test(input)) {
      return setIsNameAvailable(false)
    }
    try {
      // const res = await axios.get<{ isAvailable: boolean }>(
      //   '/api/subname/availability',
      //   {
      //     params: {
      //       label: input,
      //     },
      //   }
      // )
      // const res = await new Promise<{data: {isAvailable: boolean}}>((res) => setTimeout(() => res({data: {isAvailable: false}}), 200))
      const res = await new Promise<{data: {isAvailable: boolean}}>((res) => setTimeout(() => res({data: {isAvailable: true}}), 200))

      // console.log("Here,", res.data)
      setIsNameAvailable(res.data.isAvailable || null)
    } catch (err) {
      setIsNameAvailable(false)
    }
  }
  const handleCreateSubname = (label: string) => {
    setIsNameAvailable(true)

    if (!account) throw new Error("Account is not available")

    return axios
      .post('/api/subname/mint', {
        address: account.address,
        label,
      })
      .finally(() => {
        setISRegistering(false)
      })
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedCheckUserName = useCallback(debounce(checkUserName, 300), [])
  const getSubnameDataset = useCallback(
    (walletAddress: string) =>
      new Promise<{data: Array<SubnameResolutionResponse>}>((res, rej) =>
        setTimeout(
          () =>
            res({data: [
              {
                domain: 'account.eth',
                fullName: 'Mahdi',
                label: 'mahdi',
              },
            ]}),
          200
        )
      ),
    []
  )
  // const getSubnameDataset = useCallback(
  //   (walletAddress: string) =>
  //     new Promise<{ data: Array<SubnameResolutionResponse> }>((res, rej) =>
  //       setTimeout(() => res({ data: [] }), 200)
  //     ),
  //   []
  // )
  // const getSubnameDataset = useCallback(
  //   (walletAddress: string) =>
  //     axios.get<Array<SubnameResolutionResponse>>('/api/subname/resolution', {
  //       params: { address: walletAddress },
  //     }),
  //   []
  // )

  const getENSAddress = async (ens: string) => {
    try {
      return await resolveAddress(ens, mainnetProvider)
    } catch (err) {
      console.log({ err })
      return false
    }
  }

  return {
    checkUserName,
    debouncedCheckUserName,
    isNameAvailable,
    setIsNameAvailable,
    isRegistering,
    createEnsSubname: handleCreateSubname,
    getSubnameDataset,
    getSubnameMetadata,
    getENSAddress,
  }
}
