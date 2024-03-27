import React from 'react'
import { Button, Modal, Typography } from '@ensdomains/thorin'
import { QRCodeSVG } from 'qrcode.react'
import { QRHeader } from './QRHeader'
import { CopyWhite } from '../Icons/CopyWhite'

const shareOnTwitter = (text: string, url: string) => {
  const twitterBaseUrl = 'https://twitter.com/intent/tweet'
  const tweetParams = `?text=${encodeURIComponent(
    text
  )}&url=${encodeURIComponent(url)}`
  const fullUrl = `${twitterBaseUrl}${tweetParams}`
  window.open(fullUrl, '_blank')
}

export const QRView: React.FC<{
  open: boolean
  onDismiss: () => void
  userAddress: string
  userName: string
}> = ({ open, onDismiss, userAddress, userName }) => {
  const handleShare = async () => {
    const text = `Check out this wallet address: ${userName}`
    const shareData = {
      title: 'Wallet Address',
      text,
      url: window.location.href, // You might want to change this to something more relevant
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        shareOnTwitter(text, window.location.href)
      }
    } catch (error) {
      console.error('Error sharing:', error)
    }
  }

  return (
    <Modal open={open} onDismiss={onDismiss} mobileOnly>
      <div className="flex min-h-[80vh] w-full flex-col gap-10 rounded-t-[32px] border-b bg-black p-5 pb-12 pt-4">
        <QRHeader onDismiss={onDismiss} />

        <div className="flex flex-col items-center gap-4 mb-4">
          <QRCodeSVG
            value={userAddress}
            size={258}
            bgColor={'white'}
            fgColor={'black'}
            level={'Q'}
            style={{
              background: 'white',
              padding: '16px',
              borderRadius: '16px',
            }}
          />
        </div>
        <div className="flex flex-row w-full min-h-[71px] border-[1px] border-solid border-[white] rounded-xl p-4 gap-2 justify-between items-center">
          <div className="flex flex-col">
            <Typography color="textSecondary" weight="bold" fontVariant="small">
              Your wallet website
            </Typography>
            <Typography color="textAccent" fontVariant="body">
              {userName}
            </Typography>
          </div>
          <CopyWhite />
        </div>
        <Button
          style={{ background: 'white', color: 'black' }}
          onClick={handleShare}
          as="a">
          Share Link
        </Button>
      </div>
    </Modal>
  )
}
