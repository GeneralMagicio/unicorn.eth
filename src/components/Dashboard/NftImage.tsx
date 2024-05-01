import { useState } from 'react'

// In case an image url is broken, we want to show the placeholder image
export const NftImage = ({
  src,
  placeholder,
  name,
}: {
  src: string
  placeholder: string
  name: string
}) => {
  const [image, setImage] = useState(src)
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="h-[180px] w-[180px] rounded-2xl"
      src={image}
      alt={name}
      onError={() => {
        setImage(placeholder)
      }}
    />
  )
}
