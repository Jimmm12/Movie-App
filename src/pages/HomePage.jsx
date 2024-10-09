
import FeatureMovies from "../components/FeatureMovies";
import { TRENDING_TABS, TOPRATED_TABS } from "../components/libs/constants";
import MediaList from "../components/MediaList/Index";

function HomePage() {
  return (
    <div>
      <FeatureMovies />
      <MediaList title='Trending' tabs={TRENDING_TABS} />
      <MediaList title='Top Rated' tabs={TOPRATED_TABS} />
    </div>
  );
}
export default HomePage;
