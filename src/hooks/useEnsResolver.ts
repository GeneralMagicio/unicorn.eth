import { createSubname, nsService } from '@/services/enService'
import useSWRMutation from 'swr/mutation'
import { useSafeAuth } from './useSafeAuth'
import { useCallback, useState } from 'react'
import { debounce } from '@/utils/debounce'

export function useEnsResolver() {
  const { signInInfo, userName, setUserName } = useSafeAuth()
  const [isNameAvailable, setIsNameAvailable] = useState<boolean | null>(null)
  const { trigger, isMutating: isRegistering } = useSWRMutation(
    '/ens/createSubname',
    () =>
      createSubname({
        safe: signInInfo?.eoa || '',
        name: userName,
        chain: 'ETH',
      })
  )
  const checkUserName = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const res = await nsService.getIsNameAvailable(e.target.value)
      setIsNameAvailable(e.target.value ? res : null)
    } catch (err) {
      setIsNameAvailable(false)
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedCheckUserName = useCallback(debounce(checkUserName, 300), [])

  return {
    checkUserName,
    debouncedCheckUserName,
    isNameAvailable,
    setIsNameAvailable,
    isRegistering,
    createEnsSubname: trigger,
  }
}
