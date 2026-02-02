const doctors = [
  {
    name: "Dr. Ramesh Makam",
    role: "Pioneer in Laparoscopic Surgery",
    image: "https://via.placeholder.com/300x360",
  },
  {
    name: "Dr. Saraswathi Ramesh",
    role: "Obstetrician and Gynaecologist",
    image: "https://via.placeholder.com/300x360",
  },
  {
    name: "Dr. Rajesh H C",
    role: "Head of Hospital Administration",
    image: "https://via.placeholder.com/300x360",
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
                className="h-64 w-full rounded-2xl object-cover"
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
