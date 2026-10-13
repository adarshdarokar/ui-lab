const MainContent = () => {
  return (
    <div className="flex-1 rounded-xl  bg-gradient-to-b from-[#D9B58A] via-[#80664D] to-[#121212]">
      <div className="flex items-center gap-4 p-5 text-white">
        <img
          src="/src/assets/arijit-singh.png"
          alt="Arijit Singh"
          className="h-40 w-40 rounded-full object-cover"
        />

        <div>
          <h1 className="text-7xl font-bold">Arijit Singh</h1>
          <div className="mt-4 font-black tracking-tight  flex items-center gap-1 ">
            <img
              src="src/assets/verified-icon.png"
              alt=""
              className="h-5 w-5 object-contain"
            />
            <p className=" font-semibold  tracking-wide text-gray-200">Verified by Spotify</p>
          </div>
          <p className="mt-1 text-sm font-semibold text-gray-200">
            53.4M monthly listeners
          </p>
        </div>
      </div>
      <hr className="w-2/2 text-[#80664D] " />
 
<div className="mt-8 text-white">
  <h2 className=" p-7 text-2xl font-bold">Popular</h2>

  <div className="flex items-center gap-4 rounded-md p-2 ">
    <span className="w-4 ml-10 font-bold text-[#B3B3B3]">1</span>
    <img
      src="/src/assets/dhurandhar.png"
      alt=""
      className="h-12 w-12 rounded object-cover"
    />
    <div className="flex-1">
      <p className="font-medium">Gehra Hua</p>
    </div> 
       <span className="flex-1 text-center text-sm text-[#B3B3B3]">
  415,44,789
</span>
    <span className="text-sm mr-10 text-[#B3B3B3]">4:37</span>
  </div>

  <div className="flex items-center gap-4 rounded-md p-2 ">
    <span className="w-4 ml-10 font-bold text-[#B3B3B3]">2</span>
    <img
      src="/src/assets/song-2.jpg"
      alt=""
      className="h-12 w-12 rounded object-cover"
    />
    <div className="flex-1">
      <p className="font-medium">Tum Hi Ho</p>
    </div>
        <span className="flex-1 text-center text-sm text-[#B3B3B3]">
  125,456,789
</span>
    <span className="text-sm mr-10 text-[#B3B3B3]">4:22</span>
  </div>

  <div className="flex items-center gap-4 rounded-md p-2 ">
    <span className="w-4 ml-10 font-bold text-[#B3B3B3]">3</span>
    <img
      src="/src/assets/song3.jpg"
      alt=""
      className="h-12 w-12 rounded object-cover"
    />
    <div className="flex-1">
      <p className="font-medium">Channa Mereya</p>
    </div>
       <span className="flex-1 text-center text-sm text-[#B3B3B3]">
  25,456,789
</span>
    <span className="text-sm mr-10 text-[#B3B3B3]">4:49</span>
  </div>
</div>

    </div>
  );
};

export default MainContent;
