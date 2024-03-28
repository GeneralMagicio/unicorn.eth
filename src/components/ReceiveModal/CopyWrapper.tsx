import { CheckCircleSVG, Tag } from '@ensdomains/thorin'
import React, { useState, ReactNode } from 'react'

interface CopyWrapperProps {
  children: ReactNode
  textToCopy: string
  copiedMessage?: string
  absolute?: boolean
}

const CopyWrapper: React.FC<CopyWrapperProps> = ({
  children,
  textToCopy,
  copiedMessage = 'Address Copied',
  absolute = false,
}) => {
  const [showCopied, setShowCopied] = useState(false)

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setShowCopied(true)
      setTimeout(() => setShowCopied(false), 5000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div onClick={copyText} className="cursor-pointer">
      {children}
      {showCopied && (
        <div
          className="flex w-full justify-center pt-6"
          style={{
            position: absolute ? 'absolute' : 'relative',
            bottom: absolute ? '12px' : '',
            left: absolute ? '0' : '',
          }}>
          <Tag className="gap-2">
            <CheckCircleSVG /> {copiedMessage}
          </Tag>
        </div>
      )}
    </div>
  )
}

export default CopyWrapper
