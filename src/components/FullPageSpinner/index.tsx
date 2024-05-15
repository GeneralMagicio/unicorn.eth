import { Spinner } from '@ensdomains/thorin'

export const FullPageSpinner = () => {
  return (
    <div className="flex w-full grow items-center justify-center">
      <Spinner color="accent" size="large" />
    </div>
  )
}
