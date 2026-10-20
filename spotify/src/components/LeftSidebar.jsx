const LeftSidebar = () => {
  return (
    <div className="h-[580px]  w-95 rounded-xl ml-2 pl-6 bg-[#121212]">
      <div className="flex w-full items-center justify-between py-4">
        <h2 className="text-base font-bold text-white">Your Library</h2>
        <div className="flex items-center gap-2">
          <button className="rounded-full bg-[#242424] px-5 py-2 text-sm font-bold text-white">
            + Create
          </button>
          {/* Expand Icon */}
          <img
            src="/src/assets/expand-arrow.png"
            alt="Expand"
            className="h-14 w-13 shrink-0 object-contain"
          />
        </div>
      </div>
      {/* Library Filter */}
      <div className="px-4 py-2">
        {/* Artists Button */}
        <button className=" -ml-3 -mt-4 rounded-full bg-[#242424] px-4 py-2 text-sm font-semibold text-white">
          Artists
        </button>
      </div>
      <hr className="mt-3 border-[#282828]" />
      <div className="mt-4 flex items-center gap-3 rounded-lg p-2">
        <img
          src="/src/assets/arijit-singh.png"
          alt="Arijit Singh"
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <p className="text-sm font-medium text-white">Arijit Singh</p>
          <p className="text-sm text-gray-400">Artist</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 rounded-lg p-2">
        <img
          src="/src/assets/Armaan-Malik.jpg"
          alt="Arijit Singh"
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <p className="text-sm font-medium text-white">Armaan Mallik</p>
          <p className="text-sm text-gray-400">Artist</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 rounded-lg p-2">
        <img
          src="/src/assets/kishore-kumar.jpg"
          alt="Arijit Singh"
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <p className="text-sm font-medium text-white">Kishore kumar</p>
          <p className="text-sm text-gray-400">Artist</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 rounded-lg p-2">
        <img
          src="/src/assets/karan-Aujla.png"
          alt="Arijit Singh"
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <p className="text-sm font-medium text-white">Karan ajula</p>
          <p className="text-sm text-gray-400">Artist</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 rounded-lg p-2">
        <img
          src="/src/assets/ap.webp"
          alt="Arijit Singh"
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <p className="text-sm font-medium text-white">AP Dhillon</p>
          <p className="text-sm text-gray-400">Artist</p>
        </div>
      </div>
      
    </div>
  );
};

export default LeftSidebar;
