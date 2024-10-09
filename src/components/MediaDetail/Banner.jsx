import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CircularProgressBar from "../CircularProgressBar"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { groupBy } from "lodash"
import ImageComponent from "../image"
import { useModalContext } from "@/context/ModalProvider"

const Banner = ({
  title,
  backdropPath,
  posterPath,
  certification,
  crews,
  genres,
  releaseDate,
  point = 0,
  overview,
  trailerVideoKey
}) => {

  const { openPopup } = useModalContext()

  if (!title) return null
  const groupedCrews = groupBy(crews, 'job')
  console.log({ crews, groupedCrews });

  return (
    <div className="relative text-white overflow-hidden shadow-sm bg-black shadow-slate-800">
      <ImageComponent
        className="absolute inset-0 brightness-[.2] aspect-video w-full"
        width={1200}
        height={800}
        src={
          posterPath &&
           `https://image.tmdb.org/t/p/original/${backdropPath}`
            
        }
      />
      <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
        <div className="flex-1">
          <ImageComponent
            src={
              posterPath && 
                 `https://media.themoviedb.org/t/p/w600_and_h900_face/${posterPath}`
                
            }
            width={600}
            height={900}
          />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="font-bold mb-2 text-[2vw]">{title}</p>
          <div className="flex gap-4 items-center">
            <span className="text-gray-400 border border-gray-400 p-1">{certification}</span>
            <p>{releaseDate}</p>
            <p>{(genres || []).map(genre => genre.name).join(', ')}</p>
          </div>
          <div className="flex items-center mt-4 gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent={Math.round(point * 10)}
                size={3.5}
                strokeWidth={0.3}
              />
              Rating
            </div>
            <button
              onClick={() => {
                openPopup(
                  <iframe
                    title="Trailer"
                    src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                    className="aspect-video w-[50vw]"
                  />,
                )
              }}
            >
              <FontAwesomeIcon icon={faPlay} className="mr-1" />
              Trailer
            </button>
          </div>
          <div className="mt-4">
            <p className="font-bold text-[1.3vw] mb-2">Overview</p>
            <p>{overview}</p>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {Object.keys(groupedCrews).map((job) => (
              <div key={job}>
                <p className="font-bold">{job}</p>
                <p>{groupedCrews[job].map((crew) => crew.name).join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  )
}
export default Banner