import { Modal, Typography } from '@ensdomains/thorin'
import { useTheme } from 'styled-components'
import { useAtom } from 'jotai'
import { ModalHeader } from '@/components/ModalHeader'
import {
  LocalCurrenciesDict,
  LocalCurrencyType,
  localCurrencyAtom,
} from '@/store/settings'
import { TickIcon } from '@/components/Icons/Tick'

export const ChangeCurrencyModal: React.FC<{
  open: boolean
  onDismiss: () => void
}> = ({ open, onDismiss }) => {
  const theme = useTheme()

  const [localCurrency, setLocalCurrency] = useAtom(localCurrencyAtom)

  return (
    <Modal open={open} onDismiss={onDismiss} mobileOnly>
      <div className="flex min-h-[40%] w-full flex-col gap-6 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
        <ModalHeader title="Local currency" />
        <div className="flex flex-col gap-3">
          <Typography color="textSecondary" fontVariant="small">
            Suggested
          </Typography>
          <div
            className={'flex justify-between gap-2 rounded-lg p-2'}
            style={{ background: theme.colors.blueSurface }}>
            <Typography color="textPrimary" fontVariant="small">
              {LocalCurrenciesDict[localCurrency]}
            </Typography>
            <div className="flex items-center gap-3">
              <Typography color="textSecondary" fontVariant="small">
                {localCurrency}
              </Typography>
              <TickIcon />
            </div>
          </div>
          <Typography color="textSecondary" fontVariant="small">
            Other
          </Typography>
          {Object.entries(LocalCurrenciesDict)
            .filter(([key]) => key !== localCurrency)
            .map(([key, value]) => (
              <div
                key={key}
                className={'flex gap-2 pl-2'}
                onClick={() => setLocalCurrency(key as LocalCurrencyType)}>
                <Typography color="textPrimary" fontVariant="small">
                  {value}
                </Typography>
                <div className="flex items-center gap-3">
                  <Typography color="textSecondary" fontVariant="small">
                    {key}
                  </Typography>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Modal>
  )
}
