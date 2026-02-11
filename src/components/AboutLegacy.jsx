export default function AboutLegacy() {
  return (
    <section className="bg-gradient-to-b from-white to-[#EAF4FB]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2">
        <div>
          {/* <p className="text-sm font-semibold uppercase text-[#2FB7B1]">Our Legacy</p> */}
          <h2 className="mt-2 text-3xl font-bold text-[#0F2A44] md:text-4xl">
           "Our Legacy" with  <span className="text-[#1E4F8F]">love, care, and excellence</span>
          </h2>
          <p className="mt-4 text-[#6B7280]">
            A legacy of compassionate care by the Shiva Shakthi family, pioneering
            healthcare in Karnataka for over three decades. Join our journey of
            innovation and excellence at Shiva Shakthi Health.
          </p>
          <button className="mt-6 rounded-full bg-[#F97316] px-6 py-2 font-semibold text-white shadow hover:bg-[#FB923C]">
            Learn More
          </button>
        </div>
        <div className="rounded-full bg-white p-6 shadow-lg">
          <img
            src="https://th.bing.com/th/id/OIP.bhFXjfDYjyuUpcU06EuOigHaEK?w=295&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            alt="Our legacy"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
