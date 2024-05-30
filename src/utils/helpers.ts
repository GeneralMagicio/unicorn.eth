import { createSubdomainSearchParams } from '@/lib/third-web/methods'

export function getSubdomain(url: string): string | null {
  try {
    const parsedUrl = new URL(url)
    const hostname = parsedUrl.hostname

    // Split the hostname by dots
    const parts = hostname.split('.')

    // Assuming the domain is at least a second-level domain like example.com or example.co.uk
    if (parts.length >= 3) {
      // Subdomain is all parts except the last two (domain and TLD)
      return parts[0]
    } else {
      return null // No subdomain present
    }
  } catch (error) {
    console.error('Invalid URL:', error)
    return null // Return null if URL parsing fails
  }
}

export function makeSubdominURL(username: string): URL | null {
  try {
    const origin =
      process.env.NEXT_PUBLIC_WALLET_DOMAIN || 'http://app.unicorn-wallet.com'

    const parsedUrl = new URL(origin.replace('app', username))
    const hostname = parsedUrl.hostname
    parsedUrl.search = createSubdomainSearchParams().toString()

    const parts = hostname.split('.')
    if (parts.length)
      parsedUrl.hostname = [username, ...parts.slice(1)].join('.')
    return parsedUrl
  } catch (error) {
    console.error('Invalid URL:', error)
    return null
  }
}
