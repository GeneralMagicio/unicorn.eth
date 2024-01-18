type AnyFunction = (...args: any[]) => any

export function debounce<T extends AnyFunction>(
  func: T,
  delay: number
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  let timeoutId: NodeJS.Timeout

  return async function debounced(
    ...args: Parameters<T>
  ): Promise<ReturnType<T>> {
    return new Promise((resolve) => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(async () => {
        const result = await func(...args)
        resolve(result)
      }, delay)
    })
  }
}
