import { CountryCode, ServiceCode } from '@/constants'

export interface MovieModel {
  available_countries: CountryCode[]
  imdbID: string
  tmdbID: string
  imdbRating: number
  imdbVoteCount: number
  tmdbRating: number
  backdropPath: string
  backdropURLs: {
    1280: string
    300: string
    780: string
    original: string
  }
  originalTitle: string
  genres: number[]
  countries: string[]
  year: number
  runtime: number
  cast: string[]
  significants: string[]
  title: string
  overview: string
  tagline: string
  video: string
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
  age: number
  originalLanguage: string
  streamingInfo: Record<
    string,
    Record<
      string,
      {
        added: number
        leaving: number
        link: string
      }
    >
  >
}
