import { TokenItem } from '@/components/TokenItem'
import { Typography, Checkbox, Button } from '@ensdomains/thorin'
import { SwapSelectedTokens, useSwapContext } from '../swap-context'
import { UNICORN_MODE } from '@/store/settings'

export const SwapMultiSelect = () => {
  const {
    isAllSelected,
    selectedTokens,
    setSelectedTokens,
    tokens,
    selectedCount,
    setStep,
    setError,
    error,
  } = useSwapContext()
  const handleConfirm = () => {
    if (selectedCount > 3 && !isAllSelected) {
      setError(`You can't select more than 3 tokens`)
      return
    }
    setStep(1)
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <Typography color="text" fontVariant="extraLarge" weight="bold">
          Select tokens to swap
        </Typography>
        <label className="flex items-center gap-4">
          <Checkbox
            name="swap-everything"
            colorStyle={UNICORN_MODE ? 'orangePrimary' : 'bluePrimary'}
            label={''}
            width="auto"
            checked={isAllSelected}
            onChange={(e) => {
              if (isAllSelected) {
                setSelectedTokens({})
              } else {
                setSelectedTokens(
                  tokens.reduce((acc, val) => {
                    acc[val.name] = val
                    return acc
                  }, {} as SwapSelectedTokens)
                )
              }
            }}
          />
          <Typography color="text" fontVariant="body">
            Swap everything
          </Typography>
        </label>
        {tokens.map((token) => (
          <label key={token.name} className="flex items-center gap-2">
            <Checkbox
              name={token.name}
              label={''}
              colorStyle={UNICORN_MODE ? 'orangePrimary' : 'bluePrimary'}
              width="auto"
              checked={Boolean(selectedTokens[token.name])}
              onChange={(e) => {
                setError('')
                const newSelectedTokens = { ...selectedTokens }
                if (selectedTokens[token.name]) {
                  delete newSelectedTokens[token.name]
                } else {
                  newSelectedTokens[token.name] = token
                }
                setSelectedTokens(newSelectedTokens)
              }}
            />
            <div className="grow">
              <TokenItem label="Balance:" token={token} />
            </div>
          </label>
        ))}
      </div>
      {error && <Typography color="red">{error}</Typography>}
      <Button
        disabled={!Boolean(Object.keys(selectedTokens).length)}
        colorStyle={UNICORN_MODE ? 'orangePrimary' : 'bluePrimary'}
        onClick={handleConfirm}>
        Swap
      </Button>
    </>
  )
}
