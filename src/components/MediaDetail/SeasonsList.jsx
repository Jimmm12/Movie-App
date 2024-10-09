import { useState } from "react";
import CircularProgressBar from "../CircularProgressBar"
import ImageComponent from "../image"

const SeasonsList = ({ seasons = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const currenSeason = isShowMore ? seasons.slice(0, 8) : seasons.slice(0, 4);
  return (  
    <div className="text-[1.3vw] mt-8">
      <p className="font-bold text-[1.4vw] mb-4">Seasons</p>
      <div className="space-y-4">
      {currenSeason.map((season) => (
          <div
            key={season.id}
            className="flex gap-4 rounded-lg border border-slate-200 p-3 shadow-md"
          >
            <ImageComponent
              width={130}
              height={195}
              className="w-1/4 rounded-lg"
              src={
                season.poster_path &&
                `https://media.themoviedb.org/t/p/w300${season.poster_path}`
              }
            />
            <div className="space-y-1">
              <p className="text-[1.4vw] font-bold">{season.name}</p>
              <div className="flex items-center gap-2">
                <p className="font-bold">Rating</p>
                <CircularProgressBar
                  percent={Math.round(season.vote_average * 10)}
                  size={2.5}
                  strokeWidth={0.2}
                />
              </div>
              <p>
                <span className="font-bold">Release Date:</span>{" "}
                {season.air_date}
              </p>
              <p>{season.episode_count} Episodes</p>
              <p>{season.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <p
          className="text-center cursor-pointer mt-6 border w-40"
          onClick={() => setIsShowMore(!isShowMore)}
        >
          {isShowMore ? "Show Less" : "Show More"}
        </p>
      </div>
    </div>
  )
}
export default SeasonsList
