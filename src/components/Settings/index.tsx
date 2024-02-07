import { MODAL_TYPE } from '@/app/dashboard/layout'
import { activeModalAtom } from '@/store'
import { useAtom } from 'jotai'
import { SettingsModal } from './SettingsModal'
import { GeneralSettingsModal } from './GeneralSettingsModal'
import { ChangeCurrencyModal } from './ChangeCurrencyModal'
import { AccountDetailsModal } from './AccountDetailsModal'
import { ChangeDomainModal } from './ChangeDomainModal'
import { BuyEnsModal } from './BuyEnsModal'

export const Settings = () => {
  const [activeModal, setActiveModal] = useAtom(activeModalAtom)
  return (
    <>
      <SettingsModal
        open={activeModal === MODAL_TYPE.SETTINGS}
        onDismiss={() => setActiveModal(null)}
      />
      <GeneralSettingsModal
        open={activeModal === MODAL_TYPE.SETTINGS_GENERAL}
        onDismiss={() => setActiveModal(MODAL_TYPE.SETTINGS)}
      />
      <ChangeCurrencyModal
        open={activeModal === MODAL_TYPE.SETTINGS_CHANGE_CURRENCY}
        onDismiss={() => setActiveModal(MODAL_TYPE.SETTINGS)}
      />
      <AccountDetailsModal
        open={activeModal === MODAL_TYPE.SETTINGS_ACCOUNT_DETAILS}
        onDismiss={() => setActiveModal(MODAL_TYPE.SETTINGS)}
      />
      <ChangeDomainModal
        open={activeModal === MODAL_TYPE.SETTINGS_CHANGE_DOMIAN}
        onDismiss={() => setActiveModal(MODAL_TYPE.SETTINGS_ACCOUNT_DETAILS)}
      />
      <BuyEnsModal
        open={activeModal === MODAL_TYPE.SETTINGS_BUY_ENS}
        onDismiss={() => setActiveModal(MODAL_TYPE.SETTINGS_ACCOUNT_DETAILS)}
      />
    </>
  )
}
