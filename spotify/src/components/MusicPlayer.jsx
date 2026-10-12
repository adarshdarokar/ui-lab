const MusicPlayer = () => {
  return (
    <div className="fixed bottom-0 flex h-20 w-full items-center bg-black px-4">
      <div className="flex w-1/4 items-center gap-3">
        <img
          src="src/assets/arijit-singh.png"
          alt=""
          className="h-14 w-14  rounded object-cover"
        />
        <div>
          <p className="text-sm font-medium text-white">Gehra Hua</p>
          <p className="text-xs text-gray-400">
            Arijit Singh, Amaan Khan, Irshaad Kamal, Shashat Sachdev
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center w-1/2  justify-center">
        <img
          src="src/assets/music-player.png"
          alt=""
          className="h-14 w-52 object-contain"
        />
<div className="mt-0 mb-0 flex w-1/2 items-center gap-1">
          <span className="text-xs text-gray-400 ">0:00</span>
          <div className="h-1 flex-1 rounded-full bg-[#4D4D4D]"></div>

          <span className="text-xs text-gray-400">6:02</span>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
