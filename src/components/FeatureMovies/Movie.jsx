import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageComponent from "../image";
import { useModalContext } from "@/context/ModalProvider";
import { Link } from "react-router-dom";

const Movie = (props) => {
  console.log({ props });
  const { data: { id,backdrop_path, title, release_date, overview }, videoTrailerKey } = props;

  const { openPopup } = useModalContext()

  return (
    <div>
      <ImageComponent
        src={backdrop_path && `https://image.tmdb.org/t/p/original${backdrop_path}`}
        className="aspect-video brightness-50 w-full"
        width={900}
        height={500}
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">{title}</p>
        <div>
          {/* <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG13
          </p> */}
          <p className="text-[1.2vw]">{release_date}</p>
        </div>
        <div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold">Overview</p>
            <p>
              {overview}
            </p>
          </div>
          <div className="mt-4">
            <button
              className="text-10 mr-2 rounded bg-white px-4 py-2 text-black lg:text-lg"
              onClick={() => {
                openPopup(
                  <iframe
                    title="Trailer"
                    src={`https://www.youtube.com/embed/${videoTrailerKey}`}
                    className="aspect-video w-[50vw]"
                  />,
                )
              }}
            >
              <FontAwesomeIcon icon={faPlay} /> Trailer
            </button>
            <Link to={`/movie/${id}`}>
              <button className="text-10 rounded bg-slate-300/35 px-4 py-2 lg:text-lg">
                View Detail
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};





export default Movie;
