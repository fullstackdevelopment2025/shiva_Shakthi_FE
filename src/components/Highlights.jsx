 import pioneerImg from "../assets/images/pioneer.jpeg";
const cards = [
  {
    title: "India's Integrative Health Pioneers",
    image: pioneerImg,
  },
  {
    title: "Board-Certified Specialists",
    image: "https://img.freepik.com/premium-photo/indian-asian-doctors-group-photo-showing-success-thumbs-up-sign-standing-isolated-white-background-selective-focus_466689-33742.jpg",
  },
  {
    title: "Functional & Naturopathy Focus",
    image: "https://hiims.in/blog/wp-content/uploads/2024/06/Natural-Elements-as-Medicine-in-Naturopathy.jpg",
  },
];

export default function Highlights() {
  return (
    <section className="bg-[#EAF4FB]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-3xl border border-white/80 bg-gradient-to-br from-white to-[#CFEDEA] p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:border-[#8FD7D3] hover:shadow-xl md:min-h-[360px]"
            >
              <h3 className="text-base font-semibold text-[#0F2A44] transition-colors duration-300 group-hover:text-[#0A6178]">
                {card.title}
              </h3>
              <img
                src={card.image}
                alt="Highlight"
                className="mt-4 h-52 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-[1.03] md:h-56"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
