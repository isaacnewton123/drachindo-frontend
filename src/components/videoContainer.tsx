import DetailVideo from "./ui/detailVideo";
import Footer from "./ui/footer";
import Headers from "./ui/headers";
import RelateVideo from "./ui/relateVideo";
import Video from "./ui/video";

const VideoContainer = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Headers />
      <Video/>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <DetailVideo />
      <RelateVideo />
      </div>
      <Footer />
    </div>
  );
};

export default VideoContainer