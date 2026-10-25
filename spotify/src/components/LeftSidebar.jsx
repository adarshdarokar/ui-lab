const artists = [
  {
    name: "Arijit Singh",
    image: "/src/assets/arijit-singh.png",
  },
  {
    name: "Armaan Malik",
    image: "/src/assets/Armaan-Malik.jpg",
  },
  {
    name: "Kishore Kumar",
    image: "/src/assets/kishore-kumar.jpg",
  },
  {
    name: "Karan Aujla",
    image: "/src/assets/karan-Aujla.png",
  },
  {
    name: "AP Dhillon",
    image: "/src/assets/ap.webp",
  },
];

const LeftSidebar = () => {
  return (
    <div className="ml-2 h-[580px] w-95 rounded-xl bg-[#121212] pl-6">
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
        <button className="-ml-3 -mt-4 rounded-full bg-[#242424] px-4 py-2 text-sm font-semibold text-white">
          Artists
        </button>
      </div>

      <hr className="mt-3 border-[#282828]" />

      {/* Artists List */}
      {artists.map((artist) => (
        <div
          key={artist.name}
          className="mt-4 flex items-center gap-3 rounded-lg p-2"
        >
          <img
            src={artist.image}
            alt={artist.name}
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>
            <p className="text-sm font-medium text-white">{artist.name}</p>
            <p className="text-sm text-gray-400">Artist</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSidebar;