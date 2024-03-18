import { Button, Modal, Typography } from '@ensdomains/thorin'
import Image from 'next/image'
import { ModalHandlIcon } from '../Icons/ModalHandleIcon'
import { useAtom } from 'jotai'
import { MODAL_TYPE } from '@/app/dashboard/layout'
import { activeModalAtom, selectedCollectibleAtom } from '@/store'
import { LinkIcon } from '../Icons/Link'
import { ExportIcon } from '../Icons/Export'
import { RightIcon } from '../Icons/Right'
import { trimString } from '@/app/dashboard/utils'

export const CollectibleDetailModal: React.FC = () => {
  const [activeModal, setActiveModal] = useAtom(activeModalAtom)
  const [collectible, setSelectedCollectible] = useAtom(selectedCollectibleAtom)

  return (
    <Modal
      open={activeModal === MODAL_TYPE.COLLECTIBLE_DETAIL}
      onDismiss={() => {
        setActiveModal(null)
        setSelectedCollectible(null)
      }}
      mobileOnly>
      <div className="flex max-h-[80%] min-h-[40%] w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
        <header className="flex justify-center text-center">
          <ModalHandlIcon />
        </header>
        {collectible && (
          <div className="flex flex-col gap-6">
            <img
              className="self-center rounded-xl w-[350px] max-h-[300px]"
              src={collectible.img}
              alt={collectible.name}
            />

            <Typography fontVariant="extraLarge" weight={'extraBold'}>
              {collectible.name}
            </Typography>

            <div className="flex items-center gap-4">
              <Image
                src={'/img/collectibleOrg.png'}
                width={18}
                height={18}
                alt="collectible org"
              />
              <Typography weight="bold">{collectible.org}</Typography>
              <RightIcon />
            </div>

            <div className="flex flex-col gap-1">
              <Typography fontVariant="small" weight="light">
                Floor Price
              </Typography>
              <Typography weight="extraBold" fontVariant="large">
                {collectible.floorPrice} ETH
              </Typography>
            </div>

            <div className="flex flex-col gap-1">
              <Typography fontVariant="small" weight="light">
                Description
              </Typography>
              <Typography>{collectible.description}</Typography>
            </div>

            <div className="flex flex-col gap-1">
              <Typography fontVariant="small" weight="light">
                {`About ${collectible.name}`}
              </Typography>
              <Typography> {collectible.about} </Typography>
              <a target="_blank" href={collectible.website} rel="noreferrer">
                <Typography
                  className="flex items-center gap-1"
                  weight="bold"
                  color="bluePrimary">
                  <LinkIcon color="currentColor" />{' '}
                  {trimString(collectible.website, 20)}
                </Typography>
              </a>
            </div>

            <a target="_blank" href={collectible.OsUrl} rel="noreferrer">
              <Button
                className="mt-4"
                size="small"
                prefix={<ExportIcon color="currentColor" />}>
                Sell on OpenSea
              </Button>
            </a>
          </div>
        )}
      </div>
    </Modal>
  )
}
