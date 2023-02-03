import { ShowModel } from "@/models"
import { useParams } from "react-router-dom"
import { useAppSelector } from "./redux"

export const useGetShowInfo = (): ShowModel | undefined => {
  const params = useParams()
  const imdbId = params['imdb_id']
  const shows = useAppSelector(state => state.data.shows)
  const show: ShowModel | undefined = shows[imdbId as keyof typeof shows]

  if (show) {
    return show
  }
}