export const tryWithAttempts = async <T>(action: () => T, maxRetries = 6, delay = 1000): Promise<T> => {
  for (let i = 1; i <= maxRetries; i++) {
    try {
      return await action()
    } catch (error) {
      if (i < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, delay))
      } else {
        throw error
      }
    }
  }

  throw new Error('Failed after maximum retries')
}
