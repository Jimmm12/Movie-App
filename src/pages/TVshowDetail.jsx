import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import useFetch from "@hooks/useFetch";
import TVShowInformantion from "@/components/MediaDetail/TVShowInformation";
import SeasonsList from "@/components/MediaDetail/SeasonsList";

const TVshowDetail = () => {
  const { id } = useParams();

  const { data: TvInfo, isLoading } = useFetch({
    url: `/tv/${id}?append_to_response=content_ratings,aggregate_credits,videos`,
  });

  const { data: recommandationsResponse, isLoading: isRecomandationLoading } =
    useFetch({
      url: `/tv/${id}/recommendations`,
    });

  const relatedTVShow = recommandationsResponse.results || [];

  const certification = (
    (TvInfo.content_ratings?.results || []).find(
      (result) => result.iso_3166_1 === "US",
    )?.rating
  )

  const crews = (TvInfo.aggregate_credits?.crew || [])
    .filter((crew) => {
      const jobs = (crew.jobs || []).map(j => j.job);
      return ["Director", "Writer"].some(job => jobs.find(j => j === job))
    })
    .slice(0, 10)
    .map((crew) => ({ id: crew.id, job: crew.jobs[0], name: crew.name }));

  if (isLoading) {
    return <Loading />;
  }

  console.log({ TvInfo });

  return (
    <div>
      <Banner
        title={TvInfo.name}
        backdropPath={TvInfo.backdrop_path}
        posterPath={TvInfo.poster_path}
        releaseDate={TvInfo.first_air_date}
        genres={TvInfo.genres}
        point={TvInfo.vote_average}
        overview={TvInfo.overview}
        certification={certification}
        crews={crews}
        trailerVideoKey={
          (TvInfo.videos?.results || []).find(
            (video) => video.type === "Trailer",
          )?.key
        }
      />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="container">
          <div className="flex-[2]">
            <ActorList actors={(TvInfo.aggregate_credits?.cast || []).map(cast => ({
              ...cast,
              character: cast.roles[0]?.character,
              episodeCount: cast.roles[0]?.episode_Count
            }))} />
            <SeasonsList seasons={(TvInfo.seasons || []).reverse()} />
            <RelatedMediaList
              mediaList={relatedTVShow}
              isLoading={isRecomandationLoading}
              title="More like this"
              className="mt-6"
            />
          </div>
          <div className="flex-1">
            <TVShowInformantion TvInfo={TvInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TVshowDetail;
