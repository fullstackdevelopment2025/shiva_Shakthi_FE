import { useState } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HealingIcon from "@mui/icons-material/Healing";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const centers = [
  {
    key: "revive",
    title: "THE REVIVE",
    subtitle: "Emergency Medicine & Acute Care Wing",
    quote: "Stabilize. Diagnose. Restore.",
    theme: {
      glow: "from-red-500/30 to-rose-400/10",
      border: "border-red-300/70",
      chip: "bg-red-500",
      iconBg: "bg-red-100",
      iconText: "text-red-600",
    },
    icon: LocalHospitalIcon,
    sections: [
      {
        heading: "24x7 Emergency Services",
        points: [
          "Cardiac Emergencies",
          "Stroke Management",
          "Trauma Care",
          "Sepsis & Acute Infections",
          "Metabolic Crisis",
          "Acute Renal Events",
        ],
      },
      {
        heading: "Integrated Pathway",
        points: [
          "CARE ME - Organ protection",
          "REFLEXO - Rehabilitation",
          "CHAKRA - Root-cause restoration",
          "Emergency care becomes the first step toward long-term health.",
        ],
      },
    ],
  },
  {
    key: "care-me",
    title: "CARE ME",
    subtitle: "CArdioREnal & MEtobolic Disorders Center",
    quote: "Reduce Inflammation. Restore Circulation. Reverse Metabolic Dysfunction.",
    theme: {
      glow: "from-orange-500/30 to-amber-400/10",
      border: "border-orange-300/70",
      chip: "bg-orange-500",
      iconBg: "bg-orange-100",
      iconText: "text-orange-600",
    },
    icon: FavoriteIcon,
    sections: [
      {
        heading: "Conditions Treated",
        points: [
          "Diabetes & Insulin Resistance",
          "Hypertension",
          "Ischemic Heart Disease",
          "Chronic Kidney Disease",
          "Fatty Liver",
          "Dyslipidemia",
          "Thyroid Disorders",
        ],
      },
      {
        heading: "Advanced Alternative Therapies",
        points: [
          "EECP: Improves coronary circulation, supports collateral vessel formation and cardiac recovery",
          "Ozone Therapy: Supports oxygen metabolism, inflammation modulation and detox pathways",
          "Chelation Therapy: Supports heavy metal detox and vascular oxidative stress reduction",
          "Adjunctive, protocol-based interventions within clinical safety frameworks.",
        ],
      },
    ],
  },
  {
    key: "reflexo",
    title: "REFLEXO",
    subtitle: "Physiotherapy & Rehabilitation Center",
    quote: "Movement is Medicine.",
    theme: {
      glow: "from-yellow-400/30 to-amber-300/10",
      border: "border-yellow-300/80",
      chip: "bg-yellow-500",
      iconBg: "bg-yellow-100",
      iconText: "text-yellow-700",
    },
    icon: HealingIcon,
    sections: [
      {
        heading: "Conditions",
        points: [
          "Post-Stroke Recovery",
          "Neuropathy",
          "Sciatica & Back Pain",
          "Frozen Shoulder",
          "Arthritis",
          "Sports Injury",
          "Geriatric Rehabilitation",
        ],
      },
      {
        heading: "Integrated Model",
        points: [
          "Neuromuscular retraining",
          "Functional mobility",
          "Metabolic movement programs",
          "Breath-based core stabilization",
          "Postural biomechanics",
          "Integrated with metabolic and neurological care.",
        ],
      },
    ],
  },
  {
    key: "chakra",
    title: "CHAKRA - ILLNESS: INTEGRATED SYSTEMS",
    subtitle: "Chronic unresolved and complex case wing",
    quote: "Root-cause restoration across systems.",
    theme: {
      glow: "from-violet-500/30 to-fuchsia-400/10",
      border: "border-violet-300/70",
      chip: "bg-violet-600",
      iconBg: "bg-violet-100",
      iconText: "text-violet-700",
    },
    icon: AutoAwesomeIcon,
    sections: [
      {
        heading: "Integrated Systems",
        points: [
          "Cardio-Renal-Metabolic evaluation of inflammation, insulin resistance and mitochondrial health",
          "Neurology, pain and rehabilitation for chronic and functional disorders",
          "Oncology supportive care: metabolic optimization, inflammation modulation and quality-of-life support",
          "Fertility and women's health: PCOS, hormonal imbalance, infertility, perimenopause support",
          "Gastroenterology: IBS, dysbiosis, fatty liver, leaky gut and autoimmune gut disorders",
          "Endocrinology: thyroid, adrenal stress, insulin resistance and metabolic fatigue",
          "Respiratory: chronic asthma, post-infectious lung recovery and inflammation-linked conditions",
          "Dermatology and cosmetology: inflammatory skin disorders, hormonal acne, anti-aging protocols",
        ],
      },
    ],
  },
];

export default function QuickActions() {
  const [expandedKey, setExpandedKey] = useState(null);

  return (
    <section
      id="our-centers"
      className="relative overflow-hidden bg-gradient-to-br from-[#f8fbff] via-[#eef6ff] to-[#f3fbf8]"
    >
      <div className="pointer-events-none absolute -top-24 left-8 h-72 w-72 rounded-full bg-[#99d5ff]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-6 h-80 w-80 rounded-full bg-[#a3f0dd]/25 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1d4f8f]">Quick Actions</p>
            <h2 className="mt-2 text-2xl font-bold text-[#0F2A44] md:text-3xl">Integrated Care Centers</h2>
          </div>
          <p className="max-w-xl text-sm text-[#51657a] md:text-base">
            Four center pathways designed for acute stabilization, metabolic correction, rehabilitation, and root-cause
            recovery.
          </p>
        </div>

        <div className="grid items-start gap-5 md:grid-cols-2">
          {centers.map((center) => {
            const Icon = center.icon;
            const isExpanded = expandedKey === center.key;

            return (
              <article
                key={center.key}
                onClick={() => setExpandedKey((prev) => (prev === center.key ? null : center.key))}
                className={`group relative overflow-hidden rounded-3xl border ${center.theme.border} bg-white/95 p-6 shadow-[0_12px_30px_rgba(15,42,68,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,42,68,0.16)]`}
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${center.theme.glow} opacity-70`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-wide text-white ${center.theme.chip}`}
                      >
                        {center.title}
                      </span>
                      <p className="mt-3 text-lg font-bold text-[#0F2A44]">{center.subtitle}</p>
                      <p className="mt-1 text-sm italic text-[#3f5a76]">{center.quote}</p>
                    </div>
                    <div className={`rounded-2xl p-2.5 ${center.theme.iconBg}`}>
                      <Icon className={center.theme.iconText} fontSize="medium" />
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? "mt-5 max-h-[1500px] opacity-100" : "mt-0 max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-4">
                    {center.sections.map((section) => (
                      <div key={section.heading} className="rounded-2xl border border-white/80 bg-white/70 p-4">
                        <p className="text-sm font-semibold uppercase tracking-wide text-[#0f2a44]">{section.heading}</p>
                        <ul className="mt-2 space-y-1.5 text-sm leading-6 text-[#34495f]">
                          {section.points.map((point) => (
                            <li key={point} className="flex gap-2">
                              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2b5c8a]" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
