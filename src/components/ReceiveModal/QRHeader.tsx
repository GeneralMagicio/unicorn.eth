import { CopyWhite } from '../Icons/CopyWhite'
import { Exit } from '../Icons/Exit'

export const QRHeader: React.FC<{ onDismiss: any }> = ({ onDismiss }) => {
  return (
    <header className="flex flex-col gap-2 items-center justify-center text-center">
      <div className="w-full flex flex-row justify-between bg-red">
        <div onClick={() => onDismiss()}>
          <Exit />
        </div>
        <CopyWhite />
      </div>
    </header>
  )
}
