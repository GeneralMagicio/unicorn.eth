export const trimString = (str: string, length: number) => {
  return str.length > length ? str.substring(0, length - 3).trim() + '...' : str
}

export const getMockFloorPrice = () => {
  return Math.floor(Math.random() * 99 + 1) / 100
}