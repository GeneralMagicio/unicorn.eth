import Image from 'next/image'
import { UnicornIcon } from '../Icons/Unicorn'
import { Typography } from '@ensdomains/thorin'
import { UNICORN_MODE } from '@/store/settings'
import { KeyIcon } from '../Icons/Key'

export const SigningInPage = () => {
  return (
    <div className="fixed z-20 flex h-screen  w-screen items-center justify-center bg-white">
      <Image src="/img/circles.svg" alt="Circles" width={360} height={360} />
      <div className="absolute flex flex-col items-center justify-center">
        {UNICORN_MODE ? (
          <UnicornIcon className="mb-6" />
        ) : (
          <KeyIcon className="mb-6" />
        )}
        <Typography weight="bold">Signing in</Typography>
        <Typography color="grey" className="mt-2 text-center">
          This may take a minute or so,
          <br /> {`please don't close this window`}
        </Typography>
      </div>
    </div>
  )
}
