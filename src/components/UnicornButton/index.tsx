import { brandColor } from '@/lib/client-providers'
import { UNICORN_MODE } from '@/store/settings'
import { Button } from '@ensdomains/thorin'
import cn from 'classnames'
import React from 'react'

export const UnicornButton: typeof Button = React.forwardRef((props, ref) => {
  return (
    <Button
      colorStyle={brandColor}
      {...props}
      className={cn(props.className, { 'unicorn-btn': UNICORN_MODE })}
      ref={ref}
    />
  )
})
