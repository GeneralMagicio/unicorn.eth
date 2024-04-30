import { useEffect, useState } from 'react'

function useMediaQuery(query: string): boolean | null {
  const [matches, setMatches] = useState<boolean | null>(null)

  const getMatches = (query: string): boolean => {
    return window.matchMedia(query).matches
  }

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    handleChange()

    const mediaQueryListener = (event: MediaQueryListEvent) => {
      if (event.matches !== matches) {
        setMatches(event.matches)
      }
    }

    matchMedia.addEventListener('change', mediaQueryListener)

    return () => {
      matchMedia.removeEventListener('change', mediaQueryListener)
    }
  }, [query, matches])

  return matches
}

export default useMediaQuery
