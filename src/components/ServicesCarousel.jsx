import { useEffect, useRef, useState } from "react";

const services = [
  {
    name: "Diabetic Reversal (Madhumeha Mukthi)",
    image: "https://madhumukthi.com/wp-content/uploads/2024/05/diabetes-860x457.jpg",
  },
  {
    name: "Gut reset Therapy (Samagni Sankalpa)",
    image: "https://amwayapps.amway2u.com/hybris/landing-page/GutReset/new/hero-model.png",
  },
  {
    name: "Liver Detox (Yakrith Shakthi)",
    image: "https://medhyaherbals.com/wp-content/uploads/2024/11/Liver-Detox-PP-1024x576.jpg",
  },
  {
    name: "Weight Management (Shareera Shakthi)",
    image: "https://th.bing.com/th/id/OIP.E6dhltvhmWUtU-svJExXuAHaEK?w=264&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "Cardiac Health (Swastha Samatholana)",
    image: "https://th.bing.com/th/id/OIP.0pBkCMZuNhak5Ma8iapCdwHaFF?w=232&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "Kidney Cleansing (Jala Nirmal Path)",
    image: "https://i.pinimg.com/736x/58/f6/df/58f6df3e4a01d5f71914e463f4d934ea.jpg",
  },
];

export default function ServicesCarousel() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    setCanScrollLeft(slider.scrollLeft > 4);
    setCanScrollRight(slider.scrollLeft < maxScrollLeft - 4);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    updateScrollState();
    slider.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      slider.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const handleScroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollBy({
      left: direction === "right" ? 300 : -300,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-gradient-to-b from-[#EAF4FB] to-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0F2A44]">
            Our Services in <span className="text-[#1E4F8F]">Holistic Medicine</span>
          </h2>
        </div>

        <div
          ref={sliderRef}
          className="mt-8 flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {services.map((service) => (
            <div
              key={service.name}
              className="min-w-[240px] rounded-3xl bg-gradient-to-br from-white to-[#CFEDEA] p-6 text-[#0F2A44] shadow-lg"
            >
              <img
                src={service.image}
                alt={service.name}
                className="mx-auto h-28 w-28 rounded-2xl bg-white/70 object-cover"
              />
              <p className="mt-6 text-center text-lg font-semibold">{service.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className="h-10 w-10 rounded-full border border-[#0F2A44]/20 bg-white text-xl text-[#0F2A44] shadow-sm transition hover:bg-[#EAF4FB] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {"<"}
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className="h-10 w-10 rounded-full border border-[#0F2A44]/20 bg-white text-xl text-[#0F2A44] shadow-sm transition hover:bg-[#EAF4FB] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
}
