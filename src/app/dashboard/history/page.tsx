'use client'
import { ArrowLeft } from '@/components/Icons/ArrowLeft'
import { IconButton } from '@/components/Styled'
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
        <Typography fontVariant="large" weight="bold">
          History
        </Typography>
      </div>
    </>
  )
}
