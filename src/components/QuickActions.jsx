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
    <section id="explore" className="bg-gradient-to-b from-[#EAF4FB] to-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {actions.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/70 bg-gradient-to-br from-white to-[#EAF4FB] p-6 shadow-md"
            >
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#1E4F8F] to-[#2FB7B1]" />
              <p className="mt-4 text-lg font-semibold text-[#0F2A44]">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-[#6B7280]">{item.desc}</p>
              <button className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1E4F8F] text-white shadow">
                →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
