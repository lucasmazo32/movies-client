import { CountryCode } from '@/constants'

export type StreamingInfoMondel = Record<
  CountryCode,
  Record<
    string,
    Array<{
      watchLink: string
      quality: string
      link: string
    }>
  >
>

export interface ShowModel {
  availableCountries: CountryCode[]
  type: string
  imdbId: string
  tmdbId: number
  imdbRating: number
  imdbVoteCount: number
  tmdbRating: number
  firstAirYear: number | null
  lastAirYear: number | null
  backdropPath: string
  backdropURLs: {
    1280: string
    300: string
    780: string
    original: string
  }
  originalTitle: string
  genres: Array<{ id: string | number; name: string }>
  countries: string[]
  year: number
  runtime: number
  cast: string[]
  directors: string[] | null
  creators: string[] | null
  seasonCount: number
  episodeCount: number
  episodeRuntimes: number[] | null
  youtubeTrailerVideoId: string
  youtubeTrailerVideoLink: string
  title: string
  overview: string
  tagline: string
  posterPath: string
  posterURLs: {
    154: string
    185: string
    342: string
    500: string
    780: string
    92: string
    original: string
  }
  advisedMinimumAudienceAge: number
  originalLanguage: string
  streamingInfo: StreamingInfoMondel
}
