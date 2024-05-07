import useMediaQuery from './useMediaQuery'

export const deviceSize = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 500,
  tablet: 769,
  laptopS: 1024,
  laptopL: 1280,
  desktop: 1440,
}

export const device = {
  mobileS: `(min-width: ${deviceSize.mobileS}px)`,
  mobileM: `(min-width: ${deviceSize.mobileM}px)`,
  mobileL: `(min-width: ${deviceSize.mobileL}px)`,
  tablet: `(min-width: ${deviceSize.tablet}px)`,
  laptopS: `(min-width: ${deviceSize.laptopS}px)`,
  laptopL: `(min-width: ${deviceSize.laptopL}px)`,
  desktop: `(min-width: ${deviceSize.desktop}px)`,
  desktopL: `(min-width: ${deviceSize.desktop}px)`,
}

export default function useDetectDevice() {
  const isDesktop = useMediaQuery(device.desktop)
  const isTablet = useMediaQuery(
    `(min-width: ${deviceSize.tablet}px) and (max-width: ${
      deviceSize.laptopS - 1
    }px)`
  )
  const isLaptopS = useMediaQuery(
    `(min-width: ${deviceSize.laptopS}px) and (max-width: ${
      deviceSize.laptopL - 1
    }px)`
  )
  const isLaptopL = useMediaQuery(
    `(min-width: ${deviceSize.laptopL}px) and (max-width: ${
      deviceSize.desktop - 1
    }px)`
  )
  const isMobile = useMediaQuery(`(max-width: ${deviceSize.tablet - 1}px)`)

  const isWideScreen = isDesktop || isTablet || isLaptopS || isLaptopL
  const isSmallScreen = isMobile || isTablet || isLaptopS
  return {
    isDesktop,
    isTablet,
    isLaptopS,
    isMobile,
    isLaptopL,
    isSmallScreen,
    isWideScreen,
  }
}
