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
