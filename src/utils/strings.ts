// Captures 0x + 4 characters, then the last 4 characters.
const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/

/**
 * Truncates an ethereum address to the format 0x0000…0000
 * @param address Full address to truncate
 * @returns Truncated address
 */
export const truncateEthAddress = (address: string) => {
  const match = address.match(truncateRegex)
  if (!match) return address
  return `${match[1]}…${match[2]}`
}

export const shortenEthereumAddress = (address: string) => {
  if (address.length < 10) {
    return address // Return the address as is if it's too short
  }
  const start = address.slice(0, 4) // Get the first 4 characters
  const end = address.slice(-6) // Get the last 6 characters
  return `${start}...${end}` // Combine and return the shortened address
}
