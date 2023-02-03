export const numToHM = (duration: number): string => {
  const hours = Math.floor(duration / 60)
  const minutes = duration - hours * 60
  const ans: string[] = []
  if (hours) {
    ans.push(`${hours}h`)
  }
  if (minutes) {
    ans.push(`${minutes}m`)
  }
  return ans.join(' ')
}
