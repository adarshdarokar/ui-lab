const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      {/* PHONE */}

      <div className=" relative w-[320px] h-[700px] bg-white rounded-[40px] border-4 border-black shadow-xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px]  h-[28px] bg-black rounded-b-[25px]"></div>
        {/* status bar*/}

        <div className="flex items-center justify-between px-5 pt-3 text-xs">
          <span className="font-semibold">9:00 PM</span>

          <div className="flex items-center">
            <span>📶</span>

            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        {/* HEADER */}

     <div className="relative flex items-center justify-center px-5 pt-9">
  <span className="absolute left-7 font-bold text-3xl">←</span>
  <h1 className="font-bold text-2xl">Settings</h1>
</div>

<div className="flex items-center justify-between px-5 py-5">
  <div className="flex items-center gap-3">
    <span>👤</span>
    <span>Account</span>
  </div>
  <span>›</span>
</div>

<div className="flex items-center justify-between px-5 py-5">
  <div className="flex items-center gap-3">
    <span>🔔</span>
    <span>Notification</span>
  </div>
  <span>›</span>
</div>

<div className="flex items-center justify-between px-5 py-5">
  <div className="flex items-center gap-3">
    <span>🎨</span>
    <span>Display</span>
  </div>
  <span>›</span>
</div>

<div className="flex items-center justify-between px-5 py-5">
  <div className="flex items-center gap-3">
    <span>🔒</span>
    <span>Privacy</span>
  </div>
  <span>›</span>
</div>

<div className="flex items-center justify-between px-5 py-5">
  <div className="flex items-center gap-3">
    <span>💳</span>
    <span>Payment</span>
  </div>
  <span>›</span>
</div>

<div className="flex items-center justify-between px-5 py-5">
  <div className="flex items-center gap-3">
    <span>🌐</span>
    <span>Language</span>
  </div>
  <span>›</span>
</div>

<div className="flex items-center justify-between px-5 py-5">
  <div className="flex items-center gap-3">
    <span>❓</span>
    <span>Help</span>
  </div>
  <span>›</span>
</div>

<div className="flex items-center justify-between px-5 py-5">
  <div className="flex items-center gap-3">
    <span>🚪</span>
    <span>Logout</span>
  </div>
  <span>›</span>
        </div>
      </div>
    </div>
  );
};

export default App;
