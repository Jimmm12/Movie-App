import useFetch from "@/hooks/useFetch"
import { useEffect } from "react"
import { useWatch } from "react-hook-form"

const GenreInput = ({ control, onChange, value = [] }) => {
  const mediaType = useWatch({ name: 'mediaType', control })
  const { data } = useFetch({ url: `/genre/${mediaType}/list` }, { enabled: mediaType })

  useEffect(() => {
    onChange([])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[mediaType])
  return (
    <div className="flex gap-1 flex-wrap">
      {(data.genres || []).map((genre) => (
        <p
          key={genre.id}
          className={`cursor-pointer rounded-lg border px-2 py-1
            ${value.includes(genre.id) ? 'bg-black text-white' : ''}`}
          onClick={() =>{
            let newValue = [...value]
            if(value.includes(genre.id)) {
              newValue = newValue.filter(g => g !== genre.id)
            } else {
              newValue = [...newValue, genre.id]
            }
            onChange(newValue)
          }}
        >
          {genre.name}
        </p>
      ))

      }
    </div>
  )
}
export default GenreInput