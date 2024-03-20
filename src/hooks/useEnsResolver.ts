import { getSubnameMetadata } from '@/services/enService'
import { useSafeAuth } from './useSafeAuth'
import { useCallback, useState } from 'react'
import { debounce } from '@/utils/debounce'
import { resolveAddress } from 'ethers'
import axios from 'axios'
import { SubnameResolutionResponse } from '@/services/types/ens'

export function useEnsResolver() {
  const { signInInfo, mainnetProvider } = useSafeAuth()
  const [isNameAvailable, setIsNameAvailable] = useState<boolean | null>(null)
  const [isRegistering, setISRegistering] = useState<boolean>(false)

  const checkUserName = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/[A-Z]/.test(e.target.value)) {
      return setIsNameAvailable(false)
    }
    try {
      const res = await axios.get<{ isAvailable: boolean }>(
        '/api/subname/availability',
        {
          params: {
            label: e.target.value,
          },
        }
      )
      setIsNameAvailable(e.target.value ? res.data.isAvailable : null)
    } catch (err) {
      setIsNameAvailable(false)
    }
  }
  const handleCreateSubname = (label: string) => {
    setIsNameAvailable(true)

    return axios
      .post('/api/subname/mint', {
        address: signInInfo?.eoa!,
        label,
      })
      .finally(() => {
        setISRegistering(false)
      })
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedCheckUserName = useCallback(debounce(checkUserName, 300), [])
  const getSubnameDataset = useCallback(
    () =>
      axios.get<Array<SubnameResolutionResponse>>('/api/subname/resolution', {
        params: { address: signInInfo?.eoa! },
      }),
    [signInInfo?.eoa]
  )

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
