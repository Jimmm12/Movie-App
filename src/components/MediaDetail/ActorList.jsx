import { useState } from "react";
import ActorInfo from "./ActorInfo";

const ActorList = ({ actors = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const currenActors = isShowMore ? actors.slice(0, 32) : actors.slice(0, 4);
  return (
    <div>
      <p className="font-bold text-[1.4vw] mb-4">Actors</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
        {currenActors.map((actor) => (
          <ActorInfo
            key={actor.id}
            id={actor.id}
            name={actor.name}
            character={actor.character}
            profilePath={actor.profile_path}
          />
        ))}
      </div>

      {/* Centering the Show More button */}
      <div className="flex justify-center">
        <p
          className="text-center cursor-pointer mt-6 border w-40"
          onClick={() => setIsShowMore(!isShowMore)}
        >
          {isShowMore ? "Show Less" : "Show More"}
        </p>
      </div>
    </div>
  );
};

export default ActorList;
