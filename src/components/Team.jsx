const doctors = [
  {
    name: "Dr. Ramesh Makam",
    role: "Pioneer in Laparoscopic Surgery",
    image: "data:image/jpeg;base64,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",
  },
  {
    name: "Dr. Saraswathi Ramesh",
    role: "Obstetrician and Gynaecologist",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-QmLOa-rAkMzgAKKP88cgJR7ZtIToq0vg50qOC2T2H_eRyD9Fd_WxaGkMnImY4aINMn-Qg&s",
  },
  {
    name: "Dr. Rajesh H C",
    role: "Head of Hospital Administration",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SmtWBRM47-wZCCOYdPYLKrxhy-prslhoUCjc0tLxxfBVCvG1gKfk0iyjZuPGWl4xxIZH&s",
  },
];

export default function Team() {
  return (
    <section className="bg-gradient-to-b from-white to-[#EAF4FB]">
      <div className="mx-auto max-w-6xl px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-[#0F2A44]">
          Meet Team <span className="text-[#1E4F8F]">Shiva Shakthi</span>
        </h2>
        <p className="mt-2 text-[#6B7280]">
          India's leading doctors, dedicated to setting new standards in excellence
          and compassionate care.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="rounded-3xl bg-gradient-to-br from-white to-[#EAF4FB] p-4 shadow-lg"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-70 w-full rounded-2xl object-cover"
              />
              <div className="mt-4 rounded-2xl bg-white p-4 text-left shadow-sm">
                <h3 className="text-lg font-semibold text-[#0F2A44]">
                  {doctor.name}
                </h3>
                <p className="mt-1 text-sm text-[#6B7280]">{doctor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
