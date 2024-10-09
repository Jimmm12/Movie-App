import { Link } from "react-router-dom";
import CircularProgressBar from "./CircularProgressBar";
import ImageComponent from "./Image";

const MovieCard = ({ id, title, releaseDate, poster, point, mediaType }) => {
  return (
    <Link
      to={mediaType === "tv" ? `/tv/${id}` : `/movie/${id}`}
      className="rounded-lg border border-slate-800"
    >
      <div className="relative">
        {mediaType === "tv" && (
          <p className="absolute right-1 top-1 rounded bg-black p-1 text-sm text-white shadow-md">
            TV Show
          </p>
        )}
        <ImageComponent
          src={poster && `https://image.tmdb.org/t/p/w500${poster}`}
          width={210}
          height={300}
          className="w-full rounded-lg"
        />
        <div className="relative -top-[1.5vw] px-4">
          <CircularProgressBar
            percent={Math.round(point * 10)}
            strokeColor={point >= 7 ? "green" : point >= 5 ? "orange" : "red"}
          />
          <p className="mt-2 font-bold">{title}</p>
          <p className="text-slate-300">{releaseDate}</p>
        </div>
      </div>
    </Link>
  );
};
export default MovieCard;
