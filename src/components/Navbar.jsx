import { Link } from "react-router-dom";

export default function Navbar() {
  // TopBar handles auth UI; navbar is navigation only.

  return (
    <div className="bg-white/90 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow">
            <img
              src="/logo.png"
              alt="Shiva Shakthi Health logo"
              className="h-10 w-10 rounded-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <div>
            <p className="text-lg font-bold text-[#0F2A44]">Shiva Shakthi Health</p>
            <p className="text-xs tracking-[0.2em] text-[#6B7280]">
              A Spectrum of healing all under one roof
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-[#1F2937]">
          <a href="#about" className="hover:text-[#0F2A44]">
            About Us
          </a>
          <a href="#science" className="hover:text-[#0F2A44]">
            Shiva Shakthi Science
          </a>
          <a href="#experts" className="hover:text-[#0F2A44]">
            Our Experts
          </a>
          <a href="#specialities" className="hover:text-[#0F2A44]">
            Specialities
          </a>
          <a href="#services" className="hover:text-[#0F2A44]">
            Services
          </a>
          <a href="#surgical" className="hover:text-[#0F2A44]">
            Surgical Center
          </a>
          <a href="#explore" className="hover:text-[#0F2A44]">
            Explore
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#booking"
            className="rounded-full bg-[#F97316] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#FB923C]"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
}
