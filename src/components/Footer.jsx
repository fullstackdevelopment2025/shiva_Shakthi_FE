const quickNav = ["Home", "About Us", "Our Experts", "Philosophy & Approach", "Contact Us"];
const science = ["Integrative Medicine", "Functional Medicine", "Holistic Medicine"];
const specialities = [
  "Integrative Diabetology",
  "Integrative Autoimmune Diseases",
  "Integrative Endocrinology",
  "Integrative Gastroenterology",
  "Integrative Oncology Care",
  "Integrative Cardiology",
  "Integrative Women's Health",
  "Integrative Fertility Care",
  "Integrative Pain Management",
  "Integrative Pediatrics",
];
const services = [
  "Ozone Therapy",
  "Sound Therapy",
  "Acupuncture & Acupressure",
  "Yoga Therapy",
  "IV Therapy",
  "Colon Hydrotherapy",
  "Infrared Sauna",
];
const surgical = [
  "Minimally Invasive Surgery",
  "Laser Surgeries",
  "Bariatric and Metabolic Surgery",
  "GI & HPB Surgery",
  "Minimally Invasive Gynecology Surgery (MIGS)",
  "Colorectal Surgeries",
  "Joint Replacement Arthroscopic Surgeries",
  "Urosurgery",
  "Spine Surgeries",
  "Plastic and Reconstructive Surgery",
];
const explore = ["Medical Blogs & News", "Programmes", "Shiva Shakthi Store", "Case Studies"];

function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-[#CFEDEA]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0F2A44] via-[#1E4F8F] to-[#0F2A44]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <FooterColumn title="Quick Navigation" items={quickNav} />
          <div className="space-y-8">
            <FooterColumn title="Shiva Shakthi Science" items={science} />
            <FooterColumn title="Specialities" items={specialities} />
          </div>
          <div className="space-y-8">
            <FooterColumn title="Services" items={services} />
            <FooterColumn title="Surgical Center" items={surgical} />
          </div>
          <FooterColumn title="Explore" items={explore} />
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-[#CFEDEA]">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <span
                key={`icon-${index}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F97316] text-white"
              >
                ●
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
            <span>Refund Policy</span>
            <span>Disclaimer</span>
            <span>Site Map</span>
          </div>
          <p className="mt-4 text-sm">Copyright © 2025</p>
        </div>
      </div>
    </footer>
  );
}
