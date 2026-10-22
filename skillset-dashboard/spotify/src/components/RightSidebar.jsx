const RightSidebar = () => {
  return (
<div className="h-[580px] w-80 overflow-y-auto rounded-xl bg-[#121212] p-4 text-white">
  <h2 className="mb-4 text-sm font-bold">
    Arijit Singh
  </h2>
  <img src="src/assets/dhurandhar.png" alt=""
  className="w-70  h-68 rounded-lg object-cover" />
   <div className="mt-4 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold">Gehra Hua</h2>
          <p className="mt-1 text-xs text-gray-400">
            Arijit Singh, Irshad Kamil, Armaan Khan
          </p>
        </div>

        <button className="text-xl text-gray-400">+</button>
      </div>
         <div className="mt-6 rounded-lg bg-[#750000] p-4">
        <h3 className="text-sm font-bold">Lyrics preview</h3>

        <p className="mt-4 text-xl text-white">
          तू अगर मेरी, ये हवाएँ
          तेरी
        </p>

        <p className="mt-4 text-xl text-red-300/50">
          तू अगर मेरी, सारी राहें
        </p>
      </div>
      
    </div>
  );
};

export default RightSidebar;