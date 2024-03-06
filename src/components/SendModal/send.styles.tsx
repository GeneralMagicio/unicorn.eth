import { Button } from '@ensdomains/thorin'
import { styled } from 'styled-components'

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`
export const CancelButton = styled(Button)`
  background-color: grey;
  &:hover {
    background-color: darkgrey;
  }
`
export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  border-radius: 16px;
  background: rgba(246, 246, 246, 1);
`
