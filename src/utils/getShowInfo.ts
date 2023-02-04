import { ServiceCode, servicesArray } from '@/constants'
import { ShowModel } from '@/models'

export const getShowRuntime = (show: ShowModel): number => {
  return show.runtime === 0 ? show.episodeRuntimes?.at(0) ?? 40 : show.runtime
}

export const getShowYear = (show: ShowModel): number => {
  return (show.year === 0 ? show.firstAirYear : show.year) ?? 2023
}

export const getSlicedShowOverview = (
  show: ShowModel,
  length: number = 200,
): string => {
  if (show.overview.length < length) {
    return show.overview
  }

  return show.overview.slice(0, length) + '...'
}

export const getShowLinks = (show: ShowModel) => {
  const ans: { streamService: ServiceCode; link: string }[] = []
  Object.entries(show.streamingInfo.co).forEach((v) => {
    if (servicesArray.includes(v[0] as ServiceCode)) {
      const streamService = v[0] as ServiceCode
      const info = v[1][0]
      const link = info.watchLink ? info.watchLink : info.link
      ans.push({
        streamService,
        link,
      })
    }
  })
  return ans
}

export const getActors = (show: ShowModel) => {
  return show.cast.join(', ')
}

export const getShowDirectors = (show: ShowModel) => {
  return (show.directors ?? show.creators ?? ['No info']).join(', ')
}
