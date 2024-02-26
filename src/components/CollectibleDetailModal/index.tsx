import { Button, Modal, RightArrowSVG, Typography } from '@ensdomains/thorin'
import Image from 'next/image'
import { ModalHandlIcon } from '../Icons/ModalHandleIcon'
import { BalanceBox } from '../Styled'
// import { activeModalAtom, selectedCollectibleAtom } from '@/store'
import { numberFormatter, priceFormatter } from '@/utils/price'
import { ChevronRight } from '../Icons/ChevronRight'
import { useAtom } from 'jotai'
import { MODAL_TYPE } from '@/app/dashboard/layout'
import { activeModalAtom, selectedCollectibleAtom } from '@/store'
import { PlusIcon } from '../Icons/Plus'
import { LinkIcon } from '../Icons/Link'
import { ExportIcon } from '../Icons/Export'
import { CollectibleOrgIcon } from '../Icons/CollectibleOrg'
import { ArrowLeft } from '../Icons/ArrowLeft'
import { RightIcon } from '../Icons/Right'

// interface Props {
//   collectible: Collectible;
//   onDismiss: () => void;
// }

export const CollectibleDetailModal: React.FC = () => {
  // const router = useRouter()
  // const [] = useAtom(selectedCollectibleAtom)
  const [activeModal, setActiveModal] = useAtom(activeModalAtom)
  const [collectible, setSelectedCollectible] = useAtom(selectedCollectibleAtom)

  console.log('This is mounted', collectible)

  return (
    <Modal
      // open={true}
      open={activeModal === MODAL_TYPE.COLLECTIBLE_DETAIL}
      onDismiss={() => {
        setActiveModal(null)
        setSelectedCollectible(null)
      }}
      mobileOnly>
      {/* <div className='h-64 w-64 bg-red-400'> </div> */}
      <div className="flex min-h-[40%] w-full flex-col gap-10 rounded-t-[32px] border-b bg-white p-5 pb-12 pt-4">
        <header className="flex justify-center text-center">
          <ModalHandlIcon />
        </header>
        {collectible && (
          <div className="flex flex-col gap-6">
            <Image
              className="self-start rounded-xl"
              src={collectible.img}
              width={400}
              height={300}
              alt={collectible.name}
            />

            <Typography fontVariant="extraLarge" weight={'extraBold'}>
              {collectible.name}
            </Typography>

            <div className="flex items-center gap-4">
              <CollectibleOrgIcon />
              <Typography weight="bold">
                {collectible.org}
              </Typography>
              <RightIcon/>
            </div>

            <div className="flex flex-col gap-1">
              <Typography fontVariant="small" weight="light">
                {' '}
                Floor Price{' '}
              </Typography>
              <Typography weight="extraBold" fontVariant="large">
                {collectible.floorPrice} ETH
              </Typography>
            </div>

            <div className="flex flex-col gap-1">
              <Typography fontVariant="small" weight="light">
                {' '}
                Description{' '}
              </Typography>
              <Typography>
                {collectible.description}
              </Typography>
            </div>

            <div className="flex flex-col gap-1">
              <Typography fontVariant="small" weight="light">
                {`About ${collectible.name}`}
              </Typography>
              <Typography> {collectible.about} </Typography>
              <Typography
                className="flex items-center gap-1"
                weight="bold"
                color="bluePrimary">
                <LinkIcon color="currentColor" /> {collectible.website}
              </Typography>
            </div>

            <Button
              className="mt-4"
              size="small"
              prefix={<ExportIcon color="currentColor" />}>
              Sell on OpenSea
            </Button>
          </div>
        )}
      </div>
    </Modal>
  )
}
