import { CopyWhite } from '../Icons/CopyWhite'
import { Exit } from '../Icons/Exit'
import CopyWrapper from './CopyWrapper'

export const QRHeader: React.FC<{ onDismiss: any; userAddress?: string }> = ({
  onDismiss,
  userAddress,
}) => {
  return (
    <header className="flex flex-col gap-2 items-center justify-center text-center">
      <div className="w-full flex flex-row justify-between bg-red">
        <div onClick={() => onDismiss()}>
          <Exit />
        </div>
        {userAddress && (
          <CopyWrapper textToCopy={userAddress} absolute>
            <CopyWhite />
          </CopyWrapper>
        )}
      </div>
    </header>
  )
}
