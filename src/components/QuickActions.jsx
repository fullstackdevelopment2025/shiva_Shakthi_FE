const actions = [
  {
    title: "Find Our Expert Doctors",
    desc: "Meet our experienced medical specialists.",
  },
  {
    title: "Book Your Consultation",
    desc: "Schedule a personalized appointment.",
  },
  {
    title: "Know About Our Treatment",
    desc: "Learn about our holistic therapies.",
  },
  {
    title: "Book Free Discovery Call",
    desc: "Get a free initial consultation.",
  },
];

export default function QuickActions() {
  return (
    <section
      id="explore"
      className="relative overflow-hidden bg-gradient-to-br from-[#F4FBFF] via-[#E8F5FF] to-[#EAFBF5]"
    >
      <div className="pointer-events-none absolute -top-20 left-10 h-64 w-64 rounded-full bg-[#A7D7FF]/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-12 h-72 w-72 rounded-full bg-[#8FE8D7]/30 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {actions.map((item) => (
            <div
              key={item.title}
              className="group cursor-pointer rounded-3xl border border-white/80 bg-gradient-to-br from-[#FFFFFF] via-[#F7FCFF] to-[#E8F5FF] p-6 shadow-[0_10px_25px_rgba(15,42,68,0.10)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#A8D5FF] hover:shadow-[0_18px_35px_rgba(15,42,68,0.16)] active:translate-y-0 active:scale-[0.99]"
            >
              {/* <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#1E4F8F] to-[#2FB7B1]" /> */}
              <p className="mt-4 text-lg font-semibold text-[#0F2A44] transition-colors duration-300 group-hover:text-[#0A5E86]">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-[#6B7280] transition-colors duration-300 group-hover:text-[#4F6479]">
                {item.desc}
              </p>
              <button className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1E4F8F] text-white shadow transition duration-300 group-hover:bg-[#0B7A74] group-hover:shadow-lg active:scale-95">
                →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
