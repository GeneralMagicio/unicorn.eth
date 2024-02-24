'use client'
import { HistoryItem } from '@/components/HistoryItem'
import { ArrowLeft } from '@/components/Icons/ArrowLeft'
import { IconButton } from '@/components/Styled'
import { MOCK_TOKENS } from '@/utils/db'
import { Typography } from '@ensdomains/thorin'
import { useRouter } from 'next/navigation'

export default function HistoryPage() {
  const router = useRouter()

  return (
    <>
      <div className="flex items-center gap-2">
        <IconButton
          onClick={() => router.back()}
          colorStyle="transparent"
          size="small"
          shape="square"
          width="auto">
          <ArrowLeft color="black" />
        </IconButton>
        <Typography fontVariant="extraLarge" weight="bold">
          History
        </Typography>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Typography fontVariant="large" weight="bold">
            December 2023
          </Typography>
          {MOCK_TOKENS.slice(0, 4).map((token, idx) => (
            <HistoryItem
              key={idx}
              token={token}
              transactionType={
                {
                  0: 'sent',
                  1: 'sent',
                  2: 'received',
                  3: 'swapped',
                }[idx] as 'sent'
              }
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <Typography fontVariant="large" weight="bold">
            November 2023
          </Typography>
          {MOCK_TOKENS.slice(0, 4).map((token, idx) => (
            <HistoryItem
              key={idx}
              token={token}
              transactionType={
                {
                  0: 'sent',
                  1: 'sent',
                  2: 'received',
                  3: 'swapped',
                }[idx] as 'sent'
              }
            />
          ))}
        </div>
      </div>
    </>
  )
}
