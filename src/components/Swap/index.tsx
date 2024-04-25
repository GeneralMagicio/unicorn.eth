import { SwapModal } from './SwapModal'
import { SelectTokenModal } from './SelectTokenModal'
import { SwapContextProvider } from './swap-context'

export const Swap = () => {
  return (
    <SwapContextProvider>
      <>
        <SwapModal />
        <SelectTokenModal />
      </>
    </SwapContextProvider>
  )
}
