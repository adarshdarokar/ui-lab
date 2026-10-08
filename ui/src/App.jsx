const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      {/* PHONE */}
      <div className="relative w-[320px] h-[700px] bg-white rounded-[40px] border-10 border-black shadow-xl">
        {/* NOTCH */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[28px] bg-black rounded-b-[25px]"></div>

        {/* STATUS BAR */}
        <div className="flex items-center justify-between px-5 pt-3 text-xs">
          <span className="font-semibold">9:00 PM</span>

          <div className="flex items-center gap-0.2">
            <span>📶</span>
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        {/* HEADER */}
        <div className="relative flex items-center justify-center px-5 pt-8 pb-7">
          <span className="absolute left-7 font-bold text-3xl">←</span>
          <h1 className="font-bold text-2xl">Settings</h1>
        </div>

        {/* ACCOUNT */}
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <span>👤</span>
            <span>Account</span>
          </div>
          <span className="text-2xl">›</span>
        </div>

        {/* NOTIFICATION */}
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <span>🔔</span>
            <span>Notification</span>
          </div>
          <span className="text-2xl">›</span>
        </div>

        {/* DISPLAY */}
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <span>🎨</span>
            <span>Display</span>
          </div>
          <span className="text-2xl">›</span>
        </div>

        {/* PRIVACY */}
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <span>🔒</span>
            <span>Privacy</span>
          </div>
          <span className="text-2xl">›</span>
        </div>

        {/* PAYMENT */}
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <span>💳</span>
            <span>Payment</span>
          </div>
          <span className="text-2xl">›</span>
        </div>

        {/* LANGUAGE */}
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <span>🌐</span>
            <span>Language</span>
          </div>
          <span className="text-2xl">›</span>
        </div>

        {/* HELP */}
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <span>❓</span>
            <span>Help</span>
          </div>
          <span className="text-2xl">›</span>
        </div>


             {/* HELP */}
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <span>⚙️</span>
            <span>Settings</span>
          </div>
          <span className="text-2xl">›</span>
        </div>

        {/* LOGOUT */}
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <span>🚪</span>
            <span>Logout</span>
          </div>
          <span className="text-2xl">›</span>
        </div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2  w-[110px] h-[5px] bg-black rounded-full"></div>
        
      </div>
    </div>
  );
};

export default App;
