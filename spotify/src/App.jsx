import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";
import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar/>
      <div className="flex gap-2 px-2">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
        <MusicPlayer />
      </div>

    </div>
  );
};

export default App;
