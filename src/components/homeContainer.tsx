import Footer from "./ui/footer";
import Headers from "./ui/headers";
import MovieSection from "./ui/movieSection";
import TrendingSection from "./ui/trendingSection";

const HomeContainer = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Headers />
      <TrendingSection />
      <MovieSection />
      <Footer />
    </div>
    
  );
};

export default HomeContainer;
