import { useRef, useState } from 'react'
import { useAuth } from './useAuth'
import { pinataService } from '@/services/pinata'
import { EnsRecordType, nsService } from '@/services/enService'
import { convertImageToBase64 } from '@/utils/image'

export const useUploadProfilePicture = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { username, userProfilePicture, setUserProfilePicture } = useAuth()
  const [isUploading, setIsUploading] = useState(false)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setIsUploading(true)
      pinataService
        .uploadImage(file)
        .then((res) => {
          console.log(res)
          return nsService.createTextRecord({
            label: username || 'yusseff',
            key: EnsRecordType.account_avatar,
            data: res.data.IpfsHash,
          })
        })
        .then(() => {
          convertImageToBase64(file, (base64) => {
            setUserProfilePicture(base64)
          })
        })
        .finally(() => {
          setIsUploading(false)
        })
    }
  }
  return {
    inputRef,
    isUploading,
    userProfilePicture,
    handleFileChange,
  }
}
