import {
  createCustomSubnameData,
  createSubname,
  createTextRecord,
  getSubnameMetadata,
  getSubnameResolution,
  nsService,
} from '@/services/enService'
import { useSafeAuth } from './useSafeAuth'
import { useCallback, useState } from 'react'
import { debounce } from '@/utils/debounce'

export function useEnsResolver() {
  const { signInInfo } = useSafeAuth()
  const [isNameAvailable, setIsNameAvailable] = useState<boolean | null>(null)
  const [isRegistering, setISRegistering] = useState<boolean>(false)

  const checkUserName = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const res = await nsService.getIsNameAvailable({
        label: e.target.value,
      })
      setIsNameAvailable(e.target.value ? res.isAvailable : null)
    } catch (err) {
      setIsNameAvailable(false)
    }
  }
  const handleCreateSubname = (label: string) => {
    setIsNameAvailable(true)
    return createSubname({
      address: signInInfo?.eoa || '',
      label,
    }).finally(() => {
      setISRegistering(false)
    })
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedCheckUserName = useCallback(debounce(checkUserName, 300), [])

  return {
    checkUserName,
    debouncedCheckUserName,
    isNameAvailable,
    setIsNameAvailable,
    isRegistering,
    createEnsSubname: handleCreateSubname,
    createTextRecord,
    getSubnameResolution,
    getSubnameMetadata,
    createCustomSubnameData,
  }
}
