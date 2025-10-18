import DetailVideo from "./ui/detailVideo";
import Headers from "./ui/headers";
import Video from "./ui/video";

const VideoContainer = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Headers />
      <Video/>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <DetailVideo />
      </div>
    </div>
  );
};

export default VideoContainer