import { getSubnameMetadata, nsService } from '@/services/enService'
import { useCallback, useState } from 'react'
import { debounce } from '@/utils/debounce'
import axios from 'axios'
import { SubnameResolutionResponse } from '@/services/types/ens'
import { useActiveAccount } from 'thirdweb/react'
import { resolveAddress } from 'thirdweb/extensions/ens'
import { client } from '@/lib/third-web/provider'

export function useEnsResolver() {
  const [isNameAvailable, setIsNameAvailable] = useState<boolean | null>(null)
  const [isRegistering, setISRegistering] = useState<boolean>(false)

  const account = useActiveAccount()

  const checkUserName = async (input: string) => {
    try {
      const data = await nsService.getIsNameAvailable({
        label: input.toLowerCase(),
      })
      // const res = await axios.get<{ isAvailable: boolean }>(
      //   '/api/subname/availability',
      //   {
      //     params: {
      //       label: input.toLowerCase(),
      //     },
      //   }
      // )
      setIsNameAvailable(data.isAvailable ?? null)
    } catch (err) {
      setIsNameAvailable(false)
    }
  }
  const handleCreateSubname = (label: string) => {
    setIsNameAvailable(true)

    if (!account) throw new Error('Account is not available')
    return nsService
      .createSubname({
        address: account.address,
        label: label.toLowerCase(),
      })
      .finally(() => {
        setISRegistering(false)
      })
    // return axios
    //   .post('/api/subname/mint', {
    //     address: account.address,
    //     label: label.toLowerCase(),
    //   })
    //   .finally(() => {
    //     setISRegistering(false)
    //   })
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedCheckUserName = useCallback(debounce(checkUserName, 300), [])

  const getSubnameDataset = useCallback(
    (walletAddress: string) =>
      nsService.getSubnameResolution({ address: walletAddress }),
    // axios.get<Array<SubnameResolutionResponse>>('/api/subname/resolution', {
    //   params: { address: walletAddress },
    // }),
    []
  )

  // const getSubnameData = useCallback(
  //   (label: string) =>
  //     axios.get<Array<any>>('/api/subname/data', {
  //       params: { label },
  //     }),
  //   []
  // )

  const getENSAddress = async (ens: string) => {
    try {
      return await resolveAddress({ client, name: ens })
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
