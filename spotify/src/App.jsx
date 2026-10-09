const App = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}

      <header className="flex h-16 items-center px-5 ">
        {/* Spotify Logo */}
        <div className="flex w-1/3 items-center">
          <img
            src="/src/assets/logo.png"
            alt="Spotify"
            className="h-18 w-18 object-contain"
          />
        </div>
        {/* Home Button */}

        <button className="flex h-20 w-20 items-center justify-center rounded-full ">
          {/* Home Icon */}
          <img
            src="/src/assets/home-logo.png"
            alt="Home"
            className="h-20 w-20 object-contain"
          />
        </button>

        {/* Search Bar */}

        <div className="flex h-11 w-100 items-center gap-3 rounded-full bg-[#242424] px-3">
          {/* Search Icon */}
          <img
            src="/src/assets/search-icon.png"
            alt="Search"
            className="h-5 w-5 object-contain"
          />
          {/* Search Input */}
          <input
            type="text"
            placeholder="What do you want to play?"
            className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#b3b3b3]"
          />
          {/* Browse Icon */}
          <img
            src="/src/assets/bucket-logo.png"
            alt="Browse"
            className="h-12 w-12 object-contain"
          />
        </div>
        {/* Right Side Options */}
        <div className="ml-20 flex items-center gap-4">
          {/* Explore Premium Button */}
          <button className=" rounded-full bg-white px-3 py-1 text-sm font-bold text-black">
            Explore Premium
          </button>

          <div className="flex items-center gap-0">
            <img
              src="/src/assets/download-logo.png"
              alt="Download"
              className="h-10 w-10 object-contain -mr-1"
            />

            {/* Install App Button */}
            <button className=" whitespace-nowrap text-sm font-bold text-[#b3b3b3] mb-1">
              Install App
            </button>
          </div>
       {/* Notification + Friends Icons */}
<div className="ml-4 flex items-center gap-0">

  {/* Notification Icon */}
  <img
    src="/src/assets/bell-icon.png"
    alt="Notifications"
    className="h-10 w-10 object-contain"
  />

  {/* Friends Icon */}
  <img
    src="/src/assets/people-icon.png"
    alt="Friends"
    className="h-10 w-10 object-contain"
  />

</div>
        </div>
        
{/* Profile Logo */}
<button className="h-15 w-15 rounded-full">
  <img
    src="/src/assets/profile-logo.png"
    alt="Profile"
    className="h-full w-full rounded-full object-contain"
  />
</button>
      </header>
    </div>
  );
};

export default App;
