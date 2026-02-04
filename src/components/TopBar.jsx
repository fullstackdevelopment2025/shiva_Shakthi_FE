import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userApi } from "../api";

export default function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let active = true;
    const syncUser = async () => {
      try {
        const raw = localStorage.getItem("user");
        setUser(raw ? JSON.parse(raw) : null);
      } catch {
        setUser(null);
      }
      const token = localStorage.getItem("token");
      setIsLoggedIn(Boolean(token));

      if (token && !localStorage.getItem("user")) {
        try {
          const { data } = await userApi.me();
          if (!active) return;
          if (data?.user) {
            localStorage.setItem("user", JSON.stringify(data.user));
            setUser(data.user);
          }
        } catch {
          // ignore fetch errors
        }
      }
    };

    syncUser();
    window.addEventListener("auth-change", syncUser);
    return () => {
      active = false;
      window.removeEventListener("auth-change", syncUser);
    };
  }, [location.pathname]);

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "U";

  const roleLabel = (() => {
    const role = user?.role;
    if (role === 1 || role === "1") return "admin";
    if (role === 2 || role === "2") return "worker";
    if (role === "admin" || role === "user" || role === "worker") return role;
    return "user";
  })();
  const isStaff = roleLabel === "admin" || roleLabel === "worker";

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setMenuOpen(false);
    setIsLoggedIn(false);
    setUser(null);
    window.dispatchEvent(new Event("auth-change"));
    navigate("/login");
  };

  return (
    <div className="bg-gradient-to-r from-[#0F2A44] via-[#1E4F8F] to-[#2FB7B1] text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-2 text-sm">
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://maps.app.goo.gl/4LLzDodySCTRTqYf9?g_st=iw"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:opacity-90"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-[#CFEDEA]" />
            Shiva Shakthi Health (Chronic Disorders and Health Programs)
          </a>
          <a href="tel:8277636111" className="flex items-center gap-2 hover:opacity-90">
            <span className="inline-flex h-2 w-2 rounded-full bg-[#CFEDEA]" />
            8277636111
          </a>
        </div>
        <div className="flex flex-1 items-center gap-4">
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:opacity-90">
              Our Philosophy & Approach
            </a>
            <a href="#case-studies" className="hover:opacity-90">
              Case Studies
            </a>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <button className="rounded-full bg-white px-4 py-1 font-semibold text-[#0F2A44] shadow">
              Shiva Shakthi Store
            </button>
            {isLoggedIn && isStaff ? (
              <Link
                to="/appointments"
                className="rounded-full border border-white/70 px-3 py-1 text-xs font-semibold text-white hover:bg-white/10"
              >
                Appointments
              </Link>
            ) : null}
            {!isLoggedIn ? (
              <Link
                to="/login"
                className="rounded-full border border-white/70 px-3 py-1 text-xs font-semibold text-white hover:bg-white/10"
              >
                Login
              </Link>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setMenuOpen((open) => !open)}
                  className="flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-2 py-1"
                >
                  <span className="text-xs">Hi, {user?.name || "User"}</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#0F2A44]">
                    {initials}
                  </span>
                </button>
                {menuOpen ? (
                  <div className="absolute right-0 z-50 mt-2 w-56 rounded-xl border border-slate-200 bg-white p-3 text-[#1F2937] shadow-lg">
                    <p className="text-sm font-semibold">{user?.name || "User"}</p>
                    <p className="text-xs text-slate-500">{user?.email || "-"}</p>
                    <p className="mt-1 text-xs text-slate-500">Role: {roleLabel}</p>
                    <button
                      onClick={logout}
                      className="mt-3 w-full rounded-lg bg-[#0F2A44] px-3 py-2 text-xs font-semibold text-white hover:bg-[#0A2236]"
                    >
                      Logout
                    </button>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
