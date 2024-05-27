import {
  Modal,
  RadioButton,
  RadioButtonGroup,
  Toggle,
  Typography,
} from '@ensdomains/thorin'
import { useRouter } from 'next/navigation'
import { useTheme } from 'styled-components'
import { useAtom } from 'jotai'
import { activeModalAtom } from '@/store'
import { ModalHeader } from '@/components/ModalHeader'
import {
  Appearances,
  appearanceAtom,
  localCurrencyAtom,
  showUnverifiedTokensAtom,
} from '@/store/settings'
import { ChevronRight } from '@/components/Icons/ChevronRight'
import { MODAL_TYPE } from '@/utils/modals'
import { brandColor } from '@/lib/client-providers'

export const enum SETTINGS_ACTION_TYPE {
  DETAILS,
  SECURITY,
  GENERAL,
  HELP,
  ABOUT,
  LOGOUT,
}

export const GeneralSettingsModal: React.FC<{
  open: boolean
  onDismiss: () => void
}> = ({ open, onDismiss }) => {
  const theme = useTheme()
  const router = useRouter()

  const [, setActiveModal] = useAtom(activeModalAtom)
  const [appearance, setAppearance] = useAtom(appearanceAtom)
  const [localCurrency, setLocalCurrency] = useAtom(localCurrencyAtom)
  const [showUnverifiedTokens, setShowUnverfiedTokens] = useAtom(
    showUnverifiedTokensAtom
  )

  return (
    <Modal open={open} onDismiss={onDismiss} mobileOnly>
      <div className="flex min-h-[40%] w-full flex-col gap-6 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
        <ModalHeader title="General Settings" />
        {/* <hr /> */}
        <section className="flex flex-col gap-3">
          <Typography weight="bold">Appearance</Typography>
          <RadioButtonGroup
            value={appearance}
            onChange={(e) =>
              setAppearance(e.target.value as (typeof Appearances)[number])
            }>
            {Appearances.map((value) => (
              <label className="flex items-center justify-between" key={value}>
                <Typography className="capitalize" fontVariant="small">
                  {value}
                </Typography>
                <RadioButton
                  colorStyle={brandColor}
                  id={value}
                  width="auto"
                  key={value}
                  label=""
                  name="apperance"
                  value={value}
                />
              </label>
            ))}
          </RadioButtonGroup>
        </section>
        <hr />
        <section className="flex flex-col gap-3">
          <Typography weight="bold">Balances</Typography>

          <div className="flex items-center justify-between">
            <Typography fontVariant="small">Show unverified tokens</Typography>
            <Toggle
              size="small"
              checked={showUnverifiedTokens}
              onChange={(e) => setShowUnverfiedTokens(e.target.checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Typography fontVariant="small">Change local currency</Typography>
            <div
              onClick={() =>
                setActiveModal(MODAL_TYPE.SETTINGS_CHANGE_CURRENCY)
              }
              role="button"
              className="flex items-center gap-2">
              <Typography fontVariant="small" color="textSecondary">
                USD
              </Typography>
              <ChevronRight />
            </div>
          </div>
        </section>
        <hr />
        <section className="flex flex-col gap-3">
          <Typography weight="bold">Transaction fee settings</Typography>
          <div className="flex items-center justify-between">
            <Typography fontVariant="small">
              Select token for transaction fees
            </Typography>
            <div role="button" className="flex items-center gap-2">
              <Typography fontVariant="small" color="textSecondary">
                USDT
              </Typography>
              <ChevronRight />
            </div>
          </div>
        </section>
      </div>
    </Modal>
  )
}
