const services = [
  { name: "Ozone Therapy" },
  { name: "Yoga Therapy" },
  { name: "Acupuncture & Acupressure" },
  { name: "Sound Therapy" },
  { name: "IV Therapy" },
  { name: "Infrared Sauna" },
];

export default function ServicesCarousel() {
  return (
    <section className="bg-gradient-to-b from-[#EAF4FB] to-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0F2A44]">
            Our Services in <span className="text-[#1E4F8F]">Holistic Medicine</span>
          </h2>
        </div>
        <div className="mt-8 flex gap-6 overflow-x-auto pb-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="min-w-[240px] rounded-3xl bg-gradient-to-br from-white to-[#CFEDEA] p-6 text-[#0F2A44] shadow-lg"
            >
              <img
                src="https://via.placeholder.com/140"
                alt={service.name}
                className="mx-auto h-28 w-28 rounded-2xl bg-white/70 object-cover"
              />
              <p className="mt-6 text-center text-lg font-semibold">
                {service.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
