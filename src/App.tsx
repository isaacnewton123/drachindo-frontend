import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./components/homeContainer";
import VideoContainer from "./components/videoContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/video" element={<VideoContainer />} />

        {/* <-- todo --> */}
        {/* <Route path="/video/:id" element={<VideoContainer/>} /> */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
