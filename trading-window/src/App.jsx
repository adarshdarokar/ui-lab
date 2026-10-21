
import { useMemo, useState } from "react";
import {
  Zap, Search, Mail, Bell, ChevronDown, ChevronRight,
  House, LayoutDashboard, Wallet, Newspaper, ChartNoAxesCombined,
  Users, Settings, Phone, Plus, Menu, X, CircleHelp,
  TrendingUp, TrendingDown, Eye, Bitcoin, Coins, CircleDollarSign
} from "lucide-react";

const stocks = [
  { name: "Apple", symbol: "AAPL", color: "#222222", type: "apple", price: "310.40", change: "-1.10%", down: true, data: [60, 75, 52, 68, 42, 48, 32, 45] },
  { name: "Meta", symbol: "META", color: "#1877F2", type: "meta", price: "140.45", change: "-0.10%", down: true, data: [75, 65, 70, 55, 62, 52, 58, 48] },
  { name: "Microsoft", symbol: "MSFT", color: "#16A085", type: "microsoft", price: "240.98", change: "+0.85%", down: false, data: [25, 35, 30, 55, 42, 60, 52, 75] },
  { name: "Google", symbol: "GOOGL", color: "#4285F4", type: "google", price: "99.12", change: "-0.04%", down: true, data: [72, 60, 68, 52, 58, 45, 55, 42] },
];

const initialWatchlist = [
  { symbol: "SPOT", name: "Spotify", price: "310.40", change: "-1.10%", down: true, color: "#1DB954", type: "spotify" },
  { symbol: "ABNB", name: "Airbnb", price: "132.72", change: "-10.29%", down: true, color: "#FF5A5F", type: "airbnb" },
  { symbol: "SHOP", name: "Shopify", price: "28.57", change: "-6.48%", down: true, color: "#95BF47", type: "shopify" },
  { symbol: "SONY", name: "Playstation", price: "71.86", change: "+0.98%", down: false, color: "#0866C6", type: "sony" },
  { symbol: "DBX", name: "Dropbox Inc", price: "20.44", change: "-3.08%", down: true, color: "#0061FF", type: "dropbox" },
  { symbol: "PYPL", name: "Paypal", price: "87.66", change: "-3.86%", down: true, color: "#003087", type: "paypal" },
];

const periods = ["1 Day", "1 Week", "1 Month", "3 Month", "6 Month", "1 Year", "5 Year", "All"];

const chartValues = [
  78, 92, 86, 110, 176, 140, 132, 148, 150, 82,
  118, 130, 145, 125, 170, 205, 155, 230, 218, 280,
  265, 235, 195, 245, 242, 158, 150, 145, 82, 130,
  152, 145, 170, 160, 188, 205, 258, 190, 168, 185,
  152, 173, 145, 145, 125, 100, 145, 178, 190, 215
];

function BrandIcon({ type, color = "#222", size = 25 }) {
  if (type === "apple") {
    return (
      <div className="flex items-center justify-center rounded-full bg-[#202020] text-white" style={{ width: size, height: size }}>
        <span className="text-[15px]">●</span>
      </div>
    );
  }
  if (type === "meta") {
    return <span style={{ color, fontSize: size, fontWeight: 800 }}>∞</span>;
  }
  if (type === "microsoft") {
    return (
      <div className="grid grid-cols-2 gap-[2px]" style={{ width: size, height: size }}>
        {["#F35325", "#81BC06", "#05A6F0", "#FFBA08"].map(c =>
          <span key={c} style={{ background: c }} />
        )}
      </div>
    );
  }
  if (type === "google") {
    return <span style={{ color: "#4285F4", fontSize: size, fontWeight: 800 }}>G</span>;
  }
  const symbols = {
    spotify: "≋", airbnb: "A", shopify: "S",
    sony: "P", dropbox: "◆", paypal: "P"
  };
  return (
    <div className="flex items-center justify-center rounded-full font-bold text-white"
      style={{ background: color, width: size + 4, height: size + 4, fontSize: size * 0.7 }}>
      {symbols[type] || "S"}
    </div>
  );
}

function MiniChart({ data, down }) {
  const points = data.map((v, i) => `${i * (100 / (data.length - 1))},${100 - v}`).join(" ");
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-8 w-[60px]">
      <polyline points={points} fill="none" stroke={down ? "#D98989" : "#58B99F"} strokeWidth="3" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function MainChart({ period, setPeriod }) {
  const points = chartValues.map((v, i) => `${(i / (chartValues.length - 1)) * 700},${300 - v}`).join(" ");
  const labels = period === "1 Day"
    ? ["9 AM", "11 AM", "1 PM", "3 PM", "5 PM", "7 PM", "9 PM"]
    : period === "1 Week"
      ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"]
      : period === "1 Year" || period === "5 Year" || period === "All"
        ? ["Jan", "Mar", "May", "Jul", "Sep", "Nov", "Jan"]
        : ["15", "16", "17", "18", "19", "20", "21", "22"];

  return (
    <section className="min-w-0 rounded-[22px] bg-white p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4">
        <div className="flex items-center gap-3">
          <BrandIcon type="apple" size={34} />
          <div>
            <h2 className="font-semibold text-[17px]">Apple inc</h2>
            <p className="text-xs text-gray-400">AAPL</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end gap-2">
            <span className="rounded-full bg-[#FCE8E8] px-2 py-0.5 text-[9px] font-semibold text-red-500">-1.10%</span>
            <span className="text-xl font-semibold">$150,70</span>
          </div>
          <p className="mt-1 text-[10px] text-gray-400">Last update at 14.30</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {periods.map(p => (
          <button key={p} onClick={() => setPeriod(p)}
            className={`rounded-full px-3 py-1.5 text-[10px] transition ${
              period === p ? "bg-[#222] text-white" : "bg-[#F8F8F8] text-gray-500 hover:bg-gray-200"
            }`}>
            {p}
          </button>
        ))}
      </div>

      <div className="mt-5">
        <svg viewBox="0 0 700 330" className="w-full overflow-visible" role="img" aria-label={`Apple stock price chart for ${period}`}>
          <defs>
            <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#60BBA8" stopOpacity=".18" />
              <stop offset="100%" stopColor="#60BBA8" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 1, 2, 3, 4, 5, 6].map((n) => (
            <g key={n}>
              <line x1="0" y1={n * 48} x2="700" y2={n * 48} stroke="#E9ECEC" strokeWidth="1" />
              <text x="-12" y={n * 48 + 4} textAnchor="end" fontSize="11" fill="#9CA3AF">
                {300 - n * 50}
              </text>
            </g>
          ))}
          {labels.map((label, i) => {
            const x = i * (700 / (labels.length - 1));
            return (
              <g key={label + i}>
                <line x1={x} y1="0" x2={x} y2="290" stroke="#F0F1F1" strokeWidth="1" />
                <text x={x} y="318" fontSize="11" textAnchor="middle" fill="#92999B">{label}</text>
              </g>
            );
          })}
          <path d={`M ${points} L 700 290 L 0 290 Z`} fill="url(#chartFill)" />
          <line x1="215" y1="0" x2="215" y2="290" stroke="#364B47" strokeWidth="1.5" strokeDasharray="7 7" />
          <polyline points={points} fill="none" stroke="#53B6A0" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
          <circle cx="215" cy={300 - chartValues[15]} r="5" fill="#53B6A0" stroke="white" strokeWidth="2" />
          <g transform={`translate(115 ${300 - chartValues[15] - 52})`}>
            <rect width="100" height="42" rx="9" fill="#444" />
            <text x="50" y="16" textAnchor="middle" fontSize="9" fill="#E8E8E8">21 Sept at 12:00</text>
            <text x="50" y="32" textAnchor="middle" fontSize="13" fontWeight="600" fill="white">$190,70</text>
          </g>
        </svg>
      </div>
    </section>
  );
}

function Sidebar({ active, setActive, mobile, close }) {
  const [expanded, setExpanded] = useState(true);

  const links = [
    { name: "Home", icon: House },
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Wallet", icon: Wallet },
    { name: "News", icon: Newspaper },
  ];

  return (
    <aside className="flex h-full flex-col bg-white px-5 py-6">
      <div className="mb-8 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#242424] text-white">
            <Zap size={17} fill="white" />
          </span>
          <span className="text-lg font-extrabold tracking-tight">GoStock</span>
        </div>
        {mobile && <button onClick={close}><X size={21} /></button>}
      </div>

      <div className="mb-6 rounded-xl bg-[#242424] p-3 text-white">
        <p className="text-[11px] text-gray-300">Total Investment</p>
        <div className="mt-1 flex items-center gap-1">
          <span className="text-xl font-semibold">$5380,90</span>
          <Eye size={13} />
        </div>
        <p className="mt-2 text-[11px] text-[#67C6A2]">↗ +18,10% ↑</p>
      </div>

      <nav className="space-y-1">
        {links.map(({ name, icon: Icon }) => (
          <button key={name} onClick={() => { setActive(name); close?.(); }}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition ${
              active === name ? "bg-[#F1F2F5] font-semibold text-black" : "text-gray-600 hover:bg-gray-50"
            }`}>
            <Icon size={18} strokeWidth={1.7} />
            {name}
          </button>
        ))}

        <button onClick={() => setExpanded(!expanded)}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-600 hover:bg-gray-50">
          <ChartNoAxesCombined size={18} />
          <span className="flex-1 text-left">Stock & fund</span>
          <ChevronDown size={15} className={expanded ? "" : "-rotate-90"} />
        </button>

        {expanded && (
          <div className="ml-8 space-y-0.5 pb-2">
            {["Stock", "Cryptocurrency", "Mutual Fund", "Gold"].map(name => (
              <button key={name} onClick={() => { setActive(name); close?.(); }}
                className={`block w-full rounded-lg px-1 py-2 text-left text-xs ${
                  active === name ? "font-semibold text-black" : "text-gray-500 hover:text-black"
                }`}>
                {name}
              </button>
            ))}
          </div>
        )}
      </nav>

      <div className="mt-auto border-t border-gray-100 pt-5">
        {[
          { name: "Our community", icon: Users },
          { name: "Settings", icon: Settings },
          { name: "Contact us", icon: Phone },
        ].map(({ name, icon: Icon }) => (
          <button key={name} onClick={() => { setActive(name); close?.(); }}
            className="flex w-full items-center gap-3 rounded-xl px-2 py-3 text-sm text-gray-600 hover:bg-gray-50">
            <Icon size={18} />
            <span className="flex-1 text-left">{name}</span>
            {name === "Settings" && <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] text-white">6</span>}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default function App() {
  const [active, setActive] = useState("Dashboard");
  const [period, setPeriod] = useState("1 Week");
  const [query, setQuery] = useState("");
  const [watchlist, setWatchlist] = useState(initialWatchlist);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const filteredStocks = useMemo(() =>
    stocks.filter(s => `${s.name} ${s.symbol}`.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  const filteredWatchlist = useMemo(() =>
    watchlist.filter(s => `${s.name} ${s.symbol}`.toLowerCase().includes(query.toLowerCase())),
    [watchlist, query]
  );

  function addStock(stock) {
    if (!watchlist.some(s => s.symbol === stock.symbol)) {
      setWatchlist([...watchlist, { ...stock, price: stock.price, type: stock.type || "apple" }]);
    }
    setShowAdd(false);
  }

  return (
    <div className="min-h-screen bg-[#EAEAEA] p-0 font-sans text-[#202124] sm:p-5 lg:p-8">
      <div className="relative mx-auto flex min-h-screen max-w-[1500px] overflow-hidden bg-[#F5F6F9] sm:min-h-[calc(100vh-64px)] sm:rounded-[30px]">
        <div className="hidden w-[252px] shrink-0 lg:block">
          <Sidebar active={active} setActive={setActive} />
        </div>

        {menuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button className="absolute inset-0 bg-black/30" onClick={() => setMenuOpen(false)} />
            <div className="relative h-full w-[270px] shadow-2xl">
              <Sidebar active={active} setActive={setActive} mobile close={() => setMenuOpen(false)} />
            </div>
          </div>
        )}

        <main className="min-w-0 flex-1">
          <header className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 bg-white/95 px-4 py-4 backdrop-blur sm:px-7 lg:px-9">
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <button onClick={() => setMenuOpen(true)} className="rounded-lg p-2 hover:bg-gray-100 lg:hidden">
                <Menu size={21} />
              </button>
              <div className="flex w-full max-w-[390px] items-center gap-2 rounded-xl bg-[#F6F7F9] px-3 py-2.5">
                <Search size={17} className="shrink-0 text-gray-400" />
                <input value={query} onChange={e => setQuery(e.target.value)}
                  placeholder="Press '/' to search for various stocks"
                  className="min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-gray-400" />
                {query && <button onClick={() => setQuery("")}><X size={15} /></button>}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => alert("No new messages")} className="relative rounded-full p-2 hover:bg-gray-100">
                <Mail size={20} />
              </button>
              <button onClick={() => alert("You're all caught up!")} className="relative rounded-full p-2 hover:bg-gray-100">
                <Bell size={20} />
                <span className="absolute right-1 top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-500 text-[8px] text-white">5</span>
              </button>
              <button onClick={() => setActive("Profile")} className="flex items-center gap-2">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces"
                  alt="Profile" className="h-8 w-8 rounded-full object-cover" />
                <span className="hidden text-xs font-semibold sm:block">Airlangga Mahesa</span>
                <ChevronDown size={15} className="hidden sm:block" />
              </button>
            </div>
          </header>

          <div className="space-y-5 p-4 sm:p-6 lg:p-8">
            <div className="flex items-center justify-between gap-3">
              <h1 className="text-lg font-semibold">{active === "Dashboard" ? "My Portfolio" : active}</h1>
              <span className="hidden text-xs text-gray-400 sm:block">Market overview</span>
            </div>

            <section className="relative rounded-[20px] bg-white p-4 sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-semibold">My Portfolio</h2>
                <span className="text-xs text-gray-400">{filteredStocks.length} stocks</span>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 2xl:grid-cols-4">
                {filteredStocks.map(stock => (
                  <button key={stock.symbol}
                    onClick={() => setActive(stock.name)}
                    className={`min-w-0 rounded-xl border border-gray-50 p-3 text-left transition hover:border-gray-200 hover:shadow-sm ${
                      active === stock.name ? "bg-gray-50" : "bg-white"
                    }`}>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex min-w-0 items-center gap-2">
                        <BrandIcon type={stock.type} color={stock.color} size={23} />
                        <span className="truncate text-xs font-semibold">{stock.name}</span>
                      </div>
                      <MiniChart data={stock.data} down={stock.down} />
                    </div>
                    <div className="mt-4 flex justify-between gap-2 text-[11px]">
                      <span className="text-gray-500">Total Shares</span>
                      <span className="font-semibold">${stock.price}</span>
                    </div>
                    <div className="mt-2 flex justify-between gap-2 text-[11px]">
                      <span className="text-gray-500">Total Return</span>
                      <span className={stock.down ? "text-[#D16D75]" : "text-[#20966E]"}>
                        {stock.change} {stock.down ? "↓" : "↑"}
                      </span>
                    </div>
                  </button>
                ))}
                {filteredStocks.length === 0 && (
                  <p className="col-span-full py-5 text-center text-sm text-gray-400">No matching stocks found.</p>
                )}
              </div>
            </section>

            <section className="grid grid-cols-1 items-stretch gap-5 2xl:grid-cols-[minmax(0,1.8fr)_minmax(280px,0.9fr)]">
              <MainChart period={period} setPeriod={setPeriod} />

              <div className="min-w-0 rounded-[22px] bg-white p-5 sm:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-sm font-semibold">My watchlist</h2>
                  <button onClick={() => setShowAdd(!showAdd)}
                    className="rounded-full p-1.5 transition hover:bg-gray-100" title="Add stock">
                    <Plus size={19} />
                  </button>
                </div>

                {showAdd && (
                  <div className="mb-3 rounded-xl border border-gray-100 bg-gray-50 p-3">
                    <p className="mb-2 text-xs font-medium">Add a stock</p>
                    {stocks.filter(s => !watchlist.some(w => w.symbol === s.symbol)).map(stock => (
                      <button key={stock.symbol} onClick={() => addStock(stock)}
                        className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-xs hover:bg-white">
                        <span>{stock.name} ({stock.symbol})</span>
                        <Plus size={14} />
                      </button>
                    ))}
                    {stocks.every(s => watchlist.some(w => w.symbol === s.symbol)) &&
                      <p className="text-xs text-gray-500">All suggested stocks have been added.</p>}
                  </div>
                )}

                <div className="divide-y divide-gray-100">
                  {filteredWatchlist.map(stock => (
                    <div key={stock.symbol} className="group flex items-center gap-3 py-3.5">
                      <BrandIcon type={stock.type} color={stock.color} size={25} />
                      <button onClick={() => setActive(stock.name)} className="min-w-0 flex-1 text-left">
                        <p className="text-sm font-semibold">{stock.symbol}</p>
                        <p className="truncate text-xs text-gray-400">{stock.name}</p>
                      </button>
                      <div className="shrink-0 text-right">
                        <p className="text-xs font-semibold">${stock.price}</p>
                        <p className={`mt-1 text-[11px] ${stock.down ? "text-[#D16D75]" : "text-[#20966E]"}`}>
                          {stock.change}
                        </p>
                      </div>
                      <button onClick={() => setWatchlist(watchlist.filter(w => w.symbol !== stock.symbol))}
                        title="Remove from watchlist"
                        className="ml-1 hidden rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-red-500 group-hover:block">
                        <X size={13} />
                      </button>
                    </div>
                  ))}
                  {filteredWatchlist.length === 0 &&
                    <p className="py-8 text-center text-xs text-gray-400">No stocks found.</p>}
                </div>
                <p className="mt-2 text-[10px] text-gray-400">Sample market data · Not real-time</p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
