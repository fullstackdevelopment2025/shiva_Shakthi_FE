export default function Navbar() {
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
          <span>About Us</span>
          <span>Shiva Shakthi Science</span>
          <span>Our Experts</span>
          <span>Specialities</span>
          <span>Services</span>
          <span>Surgical Center</span>
          <span>Explore</span>
        </div>
        <button className="rounded-full bg-[#F97316] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#FB923C]">
          Book Appointment
        </button>
      </div>
    </div>
  );
}
