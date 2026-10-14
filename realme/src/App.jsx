import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="public/realme.mp4" type="video/mp4" />
      </video>

            {/* 🌑 Brick 2: Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      {/* 🧭 Brick 3: Navbar */}
      <div className="relative z-10">
        <Nav />
      </div>

    </div>
  );
};

export default App;
