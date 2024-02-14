import {
  createSubname,
  getSubnameResolution,
  nsService,
} from '@/services/enService'
import useSWRMutation from 'swr/mutation'
import { useSafeAuth } from './useSafeAuth'
import { useCallback, useState } from 'react'
import { debounce } from '@/utils/debounce'

const DOMAIN = process.env.NEXT_PUBLIC_OFFCHIAN_DOMAIN || ''

export function useEnsResolver() {
  const { signInInfo, userName } = useSafeAuth()
  const [isNameAvailable, setIsNameAvailable] = useState<boolean | null>(null)
  const { trigger, isMutating: isRegistering } = useSWRMutation(
    'createSubname',
    () =>
      createSubname({
        address: signInInfo?.eoa || '',
        label: userName,
        domain: DOMAIN,
      })
  )
  const checkUserName = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const res = await nsService.getIsNameAvailable({
        label: e.target.value,
        domain: DOMAIN,
      })
      setIsNameAvailable(e.target.value ? res.isAvailable : null)
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
    getSubnameResolution,
  }
}
