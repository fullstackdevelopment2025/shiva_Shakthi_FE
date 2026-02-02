export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F2A44] via-[#1E4F8F] to-[#2FB7B1]">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -left-24 top-6 h-64 w-[60rem] rounded-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 blur-3xl" />
        <div className="absolute left-4 top-28 h-64 w-[70rem] rounded-full bg-gradient-to-r from-white/0 via-[#CFEDEA]/60 to-white/0 blur-3xl" />
        <div className="absolute left-24 top-52 h-72 w-[80rem] rounded-full bg-gradient-to-r from-white/0 via-[#EAF4FB]/70 to-white/0 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2">
        <div className="text-white">
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            Are You Ready To <span className="text-[#CFEDEA]">Feel Better</span>?
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#EAF4FB] md:text-base">
            At Shiva Shakthi Health, our integrative and functional care approach
            creates a personalized health roadmap designed around your unique needs.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#booking"
              className="rounded-full bg-[#F97316] px-6 py-2 font-semibold text-white shadow hover:bg-[#FB923C]"
            >
              Book Appointment
            </a>
            <button className="rounded-full border border-white/70 bg-white/10 px-6 py-2 font-semibold text-white">
              Book Consultation
            </button>
          </div>
        </div>
        <div className="rounded-3xl border border-white/30 bg-white/10 p-2 shadow-xl">
          <img
            src="https://via.placeholder.com/720x520"
            alt="Patient wellness"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
