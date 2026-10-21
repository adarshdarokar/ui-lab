
import { useMemo, useState } from "react";
import {
  LayoutDashboard, MessageCircle, GraduationCap, ChartNoAxesColumn,
  Video, Users, Settings, Headphones, LogOut, Search, Bell,
  ChevronDown, ChevronLeft, ChevronRight, CalendarDays, ArrowUpRight,
  ArrowDownRight, TrendingUp, RotateCcw, Menu, X
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Mentors", icon: MessageCircle },
  { name: "Students", icon: GraduationCap },
  { name: "Analytics", icon: ChartNoAxesColumn, arrow: true },
  { name: "Courses", icon: Video, arrow: true },
  { name: "Forum", icon: Users },
];

const stats = [
  { title: "Total Revenue", value: "$23,902", change: "4.2%", up: true },
  { title: "Active Users", value: "16,815", change: "1.7%", up: true },
  { title: "New Users", value: "1,457", change: "2.9%", up: false },
  { title: "Total Mentors", value: "2,023", change: "0.9%", up: true },
];

const chartData = {
  Day: [
    ["9 AM", 5], ["11 AM", 7], ["1 PM", 4], ["3 PM", 8], ["5 PM", 6], ["7 PM", 9]
  ],
  Week: [
    ["Mon", 5], ["Tue", 7], ["Wed", 4], ["Thu", 8], ["Fri", 6], ["Sat", 9]
  ],
  Month: [
    ["Jan", 6.2], ["Feb", 5.2], ["Mar", 8.5],
    ["Apr", 4.5], ["May", 8.1], ["Jun", 2.6]
  ],
  Year: [
    ["2021", 4], ["2022", 6], ["2023", 5],
    ["2024", 8], ["2025", 7], ["2026", 9]
  ],
};

const purchases = [
  {
    course: "Digital Marketing",
    student: "Aria",
    id: "#3456791",
    amount: "$372.00",
    status: "Paid",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&h=90&fit=crop"
  },
  {
    course: "UI/UX Design",
    student: "Oliver",
    id: "#3456792",
    amount: "$245.00",
    status: "Paid",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=120&h=90&fit=crop"
  },
  {
    course: "Web Development",
    student: "Sophia",
    id: "#3456793",
    amount: "$499.00",
    status: "Pending",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=120&h=90&fit=crop"
  },
];

function Sidebar({ active, setActive, close }) {
  return (
    <aside className="flex h-full flex-col bg-white px-4 py-5 sm:px-5">
      <div className="mb-7 flex items-center justify-between px-1">
        <span className="text-[27px] font-black tracking-[-1.8px] text-black">
          Skillset
        </span>
        {close && (
          <button onClick={close} className="rounded-lg p-2 hover:bg-gray-100">
            <X size={20} />
          </button>
        )}
      </div>

      <nav className="space-y-1">
        {navItems.map(({ name, icon: Icon, arrow }) => (
          <button
            key={name}
            onClick={() => {
              setActive(name);
              close?.();
            }}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition ${
              active === name
                ? "bg-[#f0f0f0] font-semibold text-black"
                : "text-[#777] hover:bg-gray-50 hover:text-black"
            }`}
          >
            <Icon size={18} strokeWidth={1.8} />
            <span className="flex-1">{name}</span>
            {arrow && <ChevronDown size={15} />}
          </button>
        ))}
      </nav>

      <div className="mt-9 rounded-[24px] bg-[#252525] p-4 text-white">
        <p className="text-sm font-semibold">Upgrade To Pro</p>
        <p className="mt-3 text-[11px] leading-5 text-gray-300">
          Get access to additional features and contact mentors.
        </p>
        <button
          onClick={() => alert("Pro plan coming soon!")}
          className="mt-4 w-full rounded-full bg-white/25 px-3 py-2 text-sm font-semibold hover:bg-white/40"
        >
          Upgrade
        </button>
      </div>

      <div className="mt-auto space-y-1 pt-7">
        {[
          { name: "Settings", icon: Settings },
          { name: "Help Center", icon: Headphones },
          { name: "Log out", icon: LogOut },
        ].map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() =>
              name === "Log out"
                ? alert("Connect your logout handler here.")
                : setActive(name)
            }
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#555] hover:bg-gray-50"
          >
            <Icon size={18} strokeWidth={1.8} />
            {name}
          </button>
        ))}
      </div>
    </aside>
  );
}

function StatCard({ item, index }) {
  const dark = index === 0;
  const Trend = item.up ? TrendingUp : ArrowDownRight;

  return (
    <div
      className={`min-w-0 rounded-[22px] p-4 sm:p-5 ${
        dark ? "bg-[#242424] text-white" : "bg-white text-[#252525]"
      }`}
    >
      <p className={`truncate text-xs sm:text-sm ${dark ? "text-gray-200" : "text-gray-500"}`}>
        {item.title}
      </p>
      <p className="mt-3 text-[22px] font-semibold tracking-tight sm:text-[25px]">
        {item.value}
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-1 text-[11px]">
        <Trend size={15} className={item.up ? "text-[#70ae83]" : "text-[#b67b7b]"} />
        <span className={item.up ? "text-[#70ae83]" : "text-[#b67b7b]"}>
          {item.change}
        </span>
        <span className={dark ? "text-gray-300" : "text-gray-500"}>
          from last month
        </span>
      </div>
    </div>
  );
}

function RevenueChart({ period }) {
  const data = chartData[period];
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="rounded-[23px] bg-white p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-medium">Total Revenue</h2>
        <button
          title="Toggle chart view"
          onClick={() => setExpanded(!expanded)}
          className="rounded-full bg-[#f1f1f1] p-2.5 transition hover:bg-gray-200"
        >
          <ArrowUpRight size={17} />
        </button>
      </div>

      <div className={`mt-5 flex ${expanded ? "h-[290px]" : "h-[215px]"} gap-3 sm:gap-5`}>
        <div className="flex flex-col justify-between pb-7 pt-1 text-xs text-gray-400">
          {["10K", "8K", "6K", "4K", "2K", "0"].map((v) => (
            <span key={v}>{v}</span>
          ))}
        </div>

        <div className="relative flex min-w-0 flex-1 items-end justify-around gap-2 pb-7">
          <div className="pointer-events-none absolute inset-x-0 top-0 bottom-7 flex flex-col justify-between">
            {[0, 1, 2, 3, 4].map((n) => (
              <div key={n} className="border-t border-dashed border-gray-100" />
            ))}
          </div>

          {data.map(([label, value], index) => (
            <div key={label} className="relative flex h-full min-w-0 flex-1 flex-col items-center justify-end">
              <div
                title={`${label}: ${value}K`}
                className={`w-full max-w-[48px] rounded-t-[13px] transition-all duration-500 hover:opacity-70 ${
                  index === 2 && period === "Month"
                    ? "bg-[#88868a]"
                    : "bg-[#222423]"
                }`}
                style={{ height: `${value * 9}%`, minHeight: "12px" }}
              />
              <span className="absolute -bottom-6 text-xs text-gray-500">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalendarCard() {
  const [month, setMonth] = useState(new Date(2024, 8, 1));
  const [selected, setSelected] = useState(19);

  const monthName = month.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const days = useMemo(() => {
    const first = new Date(month.getFullYear(), month.getMonth(), 1).getDay();
    const count = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
    return Array.from({ length: count }, (_, i) => i + 1).map((day) => ({
      day,
      weekday: new Date(month.getFullYear(), month.getMonth(), day)
        .toLocaleDateString("en-US", { weekday: "short" }),
    })).filter((item) => item.weekday !== "Sun" && item.weekday !== "Mon");
  }, [month]);

  return (
    <section className="flex min-w-0 flex-col rounded-[23px] bg-white p-4 sm:p-5">
      <div className="flex items-center justify-between gap-2">
        <button
          aria-label="Previous month"
          onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}
          className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
        >
          <ChevronLeft size={19} />
        </button>
        <h2 className="text-sm font-medium sm:text-base">{monthName}</h2>
        <button
          aria-label="Next month"
          onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}
          className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
        >
          <ChevronRight size={19} />
        </button>
      </div>

      <div className="mt-6 grid grid-cols-5 gap-1 text-center">
        {["Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <span key={day} className="text-xs text-gray-500">{day}</span>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-5 gap-1">
        {["Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => {
          const date = days.find((item) => item.day === selected && item.weekday === day);
          return (
            <button
              key={day}
              onClick={() => {
                const firstMatch = days.find((item) => item.weekday === day);
                if (firstMatch) setSelected(firstMatch.day);
              }}
              className="hidden"
            >
              {date?.day}
            </button>
          );
        })}
        {["Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => {
          const number = days.find((item) => item.day === selected && item.weekday === day)?.day;
          return (
            <button
              key={day}
              onClick={() => {
                const currentIndex = days.findIndex((item) => item.day === selected);
                const next = days.slice(currentIndex + 1).find((item) => item.weekday === day);
                const fallback = days.find((item) => item.weekday === day);
                if (next || fallback) setSelected((next || fallback).day);
              }}
              className="hidden"
            >
              {number}
            </button>
          );
        })}
        {["Tue", "Wed", "Thu", "Fri", "Sat"].map((day, col) => {
          const start = days.findIndex((d) => d.weekday === day);
          const dayItems = days.filter((d) => d.weekday === day);
          const shown = dayItems.find((d) => d.day >= selected) || dayItems[0];
          return (
            <button
              key={day}
              onClick={() => setSelected(shown.day)}
              className={`flex h-[68px] flex-col items-center justify-center rounded-2xl text-xs transition ${
                selected === shown.day
                  ? "bg-[#858387] font-semibold text-white shadow-lg shadow-gray-300"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span className="text-[10px] opacity-75">{day}</span>
              <span className="mt-2 text-sm">{shown.day}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-auto rounded-2xl border border-gray-100 p-4">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h3 className="text-sm font-medium">Community growth</h3>
            <p className="mt-2 flex items-center gap-1 text-[11px] text-gray-500">
              <TrendingUp size={14} className="text-green-600" />
              <span className="text-green-600">0.9%</span> from last month
            </p>
          </div>
          <div className="relative flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full"
            style={{ background: "conic-gradient(#777 0% 65%, #e5e5e5 65% 100%)" }}>
            <div className="absolute inset-[6px] rounded-full bg-white" />
            <span className="relative text-sm font-semibold">65%</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PurchasesTable() {
  const [query, setQuery] = useState("");
  const [reset, setReset] = useState(0);
  const filtered = purchases.filter((item) =>
    `${item.course} ${item.student} ${item.id} ${item.status}`
      .toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="overflow-hidden rounded-[23px] bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:px-5">
        <h2 className="text-base font-medium">Course Purchases</h2>
        <div className="flex items-center gap-2">
          <button
            title="Reset search"
            onClick={() => {
              setQuery("");
              setReset(reset + 1);
            }}
            className="rounded-full bg-gray-100 p-2 hover:bg-gray-200"
          >
            <RotateCcw size={16} />
          </button>
          <button
            title="View all purchases"
            onClick={() => alert(`${filtered.length} purchases displayed`)}
            className="rounded-full bg-gray-100 p-2 hover:bg-gray-200"
          >
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      <div className="border-y border-gray-200 px-4 py-2 sm:px-5">
        <input
          key={reset}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search purchases..."
          className="w-full text-sm outline-none placeholder:text-gray-400"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-left text-sm">
          <thead className="border-b border-gray-200 text-gray-500">
            <tr>
              {["Course Name", "Student Name", "Student ID", "Amount", "Status"].map((heading) => (
                <th key={heading} className="px-4 py-3 font-medium sm:px-5">{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                <td className="px-4 py-3 sm:px-5">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt="" className="h-10 w-[60px] rounded-lg object-cover" />
                    <span className="font-medium">{item.course}</span>
                  </div>
                </td>
                <td className="px-4 py-3 sm:px-5">{item.student}</td>
                <td className="px-4 py-3 font-medium sm:px-5">{item.id}</td>
                <td className="px-4 py-3 font-medium sm:px-5">{item.amount}</td>
                <td className="px-4 py-3 sm:px-5">
                  <span className={`inline-flex min-w-[76px] justify-center rounded-full px-3 py-1.5 text-xs ${
                    item.status === "Paid" ? "bg-[#858387] text-white" : "bg-amber-100 text-amber-800"
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan="5" className="p-8 text-center text-gray-500">No purchases found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState("Dashboard");
  const [period, setPeriod] = useState("Month");
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen p-0 sm:p-5 lg:p-8">
      <div className="mx-auto flex min-h-screen max-w-[1450px] overflow-hidden bg-[#f0eff1] shadow-sm sm:min-h-[calc(100vh-64px)] sm:rounded-[28px]">
        <div className="hidden w-[205px] shrink-0 lg:block">
          <Sidebar active={active} setActive={setActive} />
        </div>

        {menuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="absolute inset-0 bg-black/30"
            />
            <div className="relative h-full w-[260px] shadow-2xl">
              <Sidebar active={active} setActive={setActive} close={() => setMenuOpen(false)} />
            </div>
          </div>
        )}

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-7">
          <header className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button onClick={() => setMenuOpen(true)} className="rounded-xl bg-white p-2 lg:hidden">
                <Menu size={21} />
              </button>
              <div>
                <h1 className="text-[25px] font-medium tracking-tight sm:text-[29px]">
                  {active}
                </h1>
                <p className="mt-1 text-xs text-gray-500 lg:hidden">Welcome back to Skillset</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 sm:w-[220px]">
                <Search size={17} className="shrink-0 text-gray-500" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  className="w-full min-w-0 bg-transparent text-sm outline-none"
                />
                {search && (
                  <button onClick={() => setSearch("")}><X size={14} /></button>
                )}
              </div>
              <button
                aria-label="Notifications"
                onClick={() => alert("You're all caught up!")}
                className="relative rounded-full bg-white p-3"
              >
                <Bell size={17} />
                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-400" />
              </button>
              <button
                onClick={() => setActive("Profile")}
                className="h-10 w-10 overflow-hidden rounded-full border-2 border-white"
              >
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </button>
            </div>
          </header>

          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {["Day", "Week", "Month", "Year"].map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={`rounded-full px-3.5 py-2 text-xs transition sm:px-5 sm:text-sm ${
                    period === p
                      ? "bg-[#858387] text-white shadow-sm"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <button
              onClick={() => setPeriod("Month")}
              className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs sm:px-4 sm:text-sm"
            >
              <CalendarDays size={16} />
              <span>1 Sep 2024 - 31 Sep 2024</span>
            </button>
          </div>

          <section className="mb-4 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => <StatCard key={item.title} item={item} index={index} />)}
          </section>

          <section className="mb-4 grid grid-cols-1 gap-4 xl:grid-cols-[1.55fr_1fr]">
            <RevenueChart period={period} />
            <CalendarCard />
          </section>

          <PurchasesTable />

          <footer className="mt-5 flex flex-wrap justify-between gap-2 px-1 pb-2 text-xs text-gray-500">
            <span>© 2024 Skillset Dashboard</span>
            <span>Learn. Grow. Succeed.</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
