import "../../index.css";
import NewRelease from '../movie-grup/newRelease';
import TrendingGroup from "../movie-grup/trendingGroup";

const MovieSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

    <TrendingGroup />
    <NewRelease />
    </div>
  );
};

export default MovieSection;
