import { activeModalAtom } from '@/store/app'
import { UNICORN_MODE } from '@/store/settings'
import { Typography, Spinner, CheckCircleSVG, Button } from '@ensdomains/thorin'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'

export const SwapConfirmation = () => {
  const [, setActiveModal] = useAtom(activeModalAtom)
  const router = useRouter()
  const goToHistory = () => {
    setActiveModal(null)
    router.push('/dashboard/history')
  }
  const isSwapping = true

  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <Typography color="bluePrimary">
          {isSwapping ? (
            <Spinner size="large" color="bluePrimary" />
          ) : (
            <CheckCircleSVG width={64} height={64} />
          )}
        </Typography>
        <Typography fontVariant="extraLarge" weight="bold">
          Swapping
        </Typography>

        <div className="flex flex-col items-center">
          <Typography fontVariant="extraSmall">
            The transaction is {isSwapping ? 'still pending.' : 'completed.'}
            <br />
          </Typography>
          <Typography fontVariant="extraSmall">
            You can check the status on{' '}
            <Typography
              className="inline-flex"
              fontVariant="extraSmall"
              onClick={goToHistory}
              color="bluePrimary">
              Transaction History
            </Typography>
            .
          </Typography>
        </div>
      </div>
      <Button
        colorStyle={UNICORN_MODE ? 'orangePrimary' : 'bluePrimary'}
        onClick={goToHistory}>
        Go to Transaction History
      </Button>
    </>
  )
}
