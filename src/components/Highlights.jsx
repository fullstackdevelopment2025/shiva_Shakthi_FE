const cards = [
  {
    title: "India's 1st Hospital Dedicated to Holistic and Integrative Medicine",
    image: "https://via.placeholder.com/360x200",
  },
  {
    title: "India's 1st NABH Accredited Integrative & Functional Medicine Hospital",
    image: "https://via.placeholder.com/360x200",
  },
  {
    title: "Board Certified Integrative, Functional, Naturopathy Medicine Specialists",
    image: "https://via.placeholder.com/360x200",
  },
];

export default function Highlights() {
  return (
    <section className="bg-[#EAF4FB]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/80 bg-gradient-to-br from-white to-[#CFEDEA] p-6 shadow-md"
            >
              <h3 className="text-base font-semibold text-[#0F2A44]">
                {card.title}
              </h3>
              <img
                src={card.image}
                alt="Highlight"
                className="mt-4 h-40 w-full rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
