import MovieCard from "@components/MovieCard"
import Loading from "../Loading"


const RelatedMediaList = ({ mediaList = [], isLoading, title, className }) => {
  return (
    <div className={className}>
      {title &&  <p className="mb-4 text-[1.4vw] font-bold">{title}</p>}
      {
        isLoading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
            {mediaList.map((media) => (
              <MovieCard
                key={media.id}
                id={media.id}
                title={media.title || media.name}
                releaseDate={media.release_date || media.first_air_date}
                poster={media.poster_path}
                point={media.vote_average}
                mediaType={media.media_type}
              />
            ))}
          </div>
        )
      }

    </div>
  )
}
export default RelatedMediaList