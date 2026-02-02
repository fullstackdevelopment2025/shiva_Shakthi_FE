const areas = [
  {
    title: "Gastroenterology",
    desc: "Blends medical and lifestyle approaches for digestive health.",
    icon: "https://via.placeholder.com/96",
  },
  {
    title: "Diabetology",
    desc: "Combines traditional and modern treatments to manage diabetes.",
    icon: "https://via.placeholder.com/96",
  },
  {
    title: "Endocrinology",
    desc: "Merges hormonal treatments with natural therapies.",
    icon: "https://via.placeholder.com/96",
  },
];

export default function FocusAreas() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F2A44] via-[#1E4F8F] to-[#2FB7B1]">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -left-28 top-10 h-64 w-[60rem] rounded-full bg-gradient-to-r from-white/0 via-[#CFEDEA]/60 to-white/0 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-12 text-center text-white">
        <h2 className="text-3xl font-bold">
          Our Focus Areas in <span className="text-[#CFEDEA]">Holistic Medicine</span>
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.title}
              className="rounded-3xl bg-white/95 p-6 text-[#1F2937] shadow-lg"
            >
              <img
                src={area.icon}
                alt={area.title}
                className="mx-auto h-20 w-20 rounded-full bg-[#EAF4FB] p-2"
              />
              <h3 className="mt-4 text-xl font-semibold text-[#0F2A44]">
                {area.title}
              </h3>
              <p className="mt-2 text-sm text-[#6B7280]">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
