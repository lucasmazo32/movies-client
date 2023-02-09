import { watchDesireRate } from '@/constants'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { ShowModel } from '@/models'
import { updatePossibleShow } from '@/state'
import { ChangeEventHandler, FC, useEffect, useState } from 'react'
import { Button } from 'react-daisyui'

export const LikeShow: FC = () => {
  const [showInfo, setShowInfo] = useState<ShowModel | undefined>()
  const [selected, setSelected] = useState<string>('undefined')
  const possibleLikeShow = useAppSelector((state) => state.data.possibleShow)
  const shows = useAppSelector((state) => state.data.shows)
  const show = shows[possibleLikeShow as keyof typeof shows]
  const dispatch = useAppDispatch()

  const handleSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelected(e.target.value)
  }

  const handleClose = () => {
    setSelected('undefined')
    dispatch(updatePossibleShow(undefined))
  }

  useEffect(() => {
    if (show) {
      setShowInfo(show)
    } else {
      setShowInfo(undefined)
    }
  }, [show])

  return (
    <>
      <input
        type="checkbox"
        id="like-modal"
        className="modal-toggle"
        readOnly
        checked={!!showInfo}
      />
      <div className="modal">
        <label
          className="modal-box relative"
          htmlFor=""
        >
          <h2 className="text-2xl font-bold text-gray-50">{showInfo?.title}</h2>
          <p className="py-4">
            Agrega este título a tu lista de películas para ver.
            <br />
            ¡A continuación solo debes elegir qué tanto quieres ver esta
            película!
          </p>
          <select
            value={selected}
            className="select select-primary w-full text-lg"
            onChange={handleSelect}
          >
            <option
              disabled
              value="undefined"
            >
              ¿Qué tanto quieres ver el título?
            </option>
            {Object.entries(watchDesireRate)
              .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
              .map((v) => {
                return (
                  <option
                    key={v[0]}
                    value={v[0]}
                  >
                    {v[1]}
                  </option>
                )
              })}
          </select>
          <div className="grid py-4 grid-cols-2 gap-4 justify-between">
            <Button
              className="btn-block"
              color="primary"
            >
              Agregar
            </Button>
            <Button
              className="btn-block"
              color="error"
              onClick={handleClose}
            >
              mmm, mejor no
            </Button>
          </div>
        </label>
      </div>
    </>
  )
}
