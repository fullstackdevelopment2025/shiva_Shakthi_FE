import { useMemo, useState } from "react";
import {
  AppBar,
  Box,
  Fade,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Popper,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../assets/images/Logo.png";

const NAV_ITEMS = [
  {
    id: "about",
    label: "About Us",
    href: "#about",
    gradient: "linear-gradient(90deg, #475569, #64748b)",
    title: "About Shiva Shakthi Health",
    description: "Shiva Shakthi Health is a fully integrated hospital model uniting:",
    bullets: [
      "Emergency Medicine",
      "Functional & Metabolic Medicine",
      "Advanced Rehabilitation",
      "Alternative & Detox Therapies",
      "Consciousness & Energy Sciences",
      "Medical Research & Knowledge Preservation",
    ],
    lines: [
      "We treat disease.",
      "We correct dysfunction.",
      "We restore balance.",
      "We preserve knowledge.",
    ],
  },
  {
    id: "integrated-care-model",
    label: "Integrated Care Model",
    href: "#integrated-care-model",
    gradient: "linear-gradient(90deg, #0891b2, #2563eb)",
    title: "Our Integrated Functional Medicine Model",
    description: "Traditional hospitals treat organs. Shiva Shakthi Health treats systems.",
    bullets: [
      "Inflammation",
      "Oxidative Stress",
      "Toxic Load",
      "Mitochondrial Dysfunction",
      "Hormonal Imbalance",
      "Neuro-endocrine Axis",
      "Gut-Immune Axis",
      "Psycho-emotional Stress",
    ],
    sections: [
      {
        heading: "We Combine",
        items: [
          "Modern Diagnostics",
          "Evidence-Based Medicine",
          "Lifestyle Medicine",
          "Detox Protocols",
          "Energy-Based Healing",
          "Research Documentation",
        ],
      },
    ],
  },
  {
    id: "our-centers",
    label: "Our Centers",
    href: "#our-centers",
    gradient: "linear-gradient(90deg, #dc2626, #f59e0b, #7c3aed)",
    title: "Centers of Care",
    sections: [
      {
        heading: "REVIVE: Emergency Medicine & Acute Care",
        items: [
          "24x7 Cardiac, Stroke, Trauma, Sepsis and Acute Metabolic Support",
          "Stabilize, diagnose and restore as first response",
          "Transition pathway: CARE ME -> REFLEXO -> CHAKRA",
        ],
      },
      {
        heading: "CARE ME: Cardio-Renal-Metabolic Center",
        items: [
          "Diabetes, Hypertension, Ischemic Heart Disease, CKD, Fatty Liver",
          "EECP, Ozone and Chelation as protocol-based adjunct interventions",
          "Inflammation and circulation focused recovery model",
        ],
      },
      {
        heading: "REFLEXO: Physiotherapy & Rehabilitation",
        items: [
          "Post-stroke, Neuropathy, Sciatica, Arthritis, Sports and Geriatric Rehab",
          "Neuromuscular retraining and functional mobility programs",
          "Integrated metabolic and neurological rehab pathways",
        ],
      },
      {
        heading: "CHAKRA: Integrated Systems Wing",
        items: [
          "Cardio-Renal-Metabolic, Neuro-Pain and Supportive Oncology",
          "Women's health, Gastroenterology, Endocrinology and Respiratory care",
          "Dermatology and integrative long-term restoration plans",
        ],
      },
    ],
  },
  {
    id: "health-programs",
    label: "Health Programs",
    href: "#health-programs",
    gradient: "linear-gradient(90deg, #059669, #65a30d)",
    title: "Health Transformation Programs",
    bullets: [
      "Diabetic Remission (Madhumeha Muktha)",
      "Gut Reset (Samagni Sankalpa)",
      "Liver Detox & Fatty Liver Remission",
      "Weight Management (Shareera Samatholana Sutra)",
      "Cardiac Health (Swastha Hrudaya Sutra)",
      "Kidney Cleansing (Jala Nirmal Path)",
      "Brain Booster (Budhi Shakthi)",
      "Immunity Booster (Rooga Raksha Protocol)",
      "Ageless You - Refine & Glow (Tejas)",
      "Anti-aging & Bio-hacking (OJAS RISE)",
    ],
    sections: [
      {
        heading: "Each Program Includes",
        items: [
          "Diagnostic Mapping",
          "Lifestyle Correction",
          "Nutritional Intervention",
          "Detox Support",
          "Movement Therapy",
          "Stress Reset and Continuous Monitoring",
        ],
      },
    ],
  },
  {
    id: "wellness-consciousness-sciences",
    label: "Wellness & Consciousness Sciences",
    href: "#wellness-consciousness-sciences",
    gradient: "linear-gradient(90deg, #16a34a, #0d9488)",
    title: "Wellness & Holistic Healing",
    description: "Subtle Energy, Therapy and Consciousness Sciences Wing",
    bullets: [
      "Chakra-based diagnostics and therapy protocols",
      "Yoga and Pranayama",
      "Sound, Mudra and Light Therapy",
      "Neuro-endocrine correlations with chakras",
      "Trauma and psychosomatic healing",
    ],
    sections: [
      {
        heading: "Role in Ecosystem",
        items: [
          "Builds resilience across CARE ME, REFLEXO and CHAKRA",
          "Supports preventive programs and unresolved chronic conditions",
          "Produces wellness manuals and integrative certifications",
        ],
      },
    ],
  },
  {
    id: "research-knowledge-archives",
    label: "Research & Knowledge Archives",
    href: "#research-knowledge-archives",
    gradient: "linear-gradient(90deg, #2563eb, #4338ca)",
    title: "Medical Literature & Knowledge Archives",
    bullets: [
      "Ancient Indian medical manuscripts",
      "Evidence-based clinical documentation",
      "Functional medicine research and outcome analysis",
      "AI-assisted knowledge archiving",
    ],
    sections: [
      {
        heading: "Outputs and Mission",
        items: [
          "Peer-reviewed publications and clinical registries",
          "Protected repositories and researcher training",
          "Global collaboration and future-ready integrative research",
        ],
      },
    ],
  },
  {
    id: "patient-journey",
    label: "Patient Journey",
    href: "#patient-journey",
    gradient: "linear-gradient(90deg, #7c3aed, #c026d3)",
    title: "Patient Journey Flow",
    lines: [
      "Emergency -> Organ Care -> Rehabilitation",
      "-> Root-Cause Care -> Wellness",
      "-> Preventive Follow-up -> Research Documentation",
    ],
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
    gradient: "linear-gradient(90deg, #0284c7, #06b6d4)",
    title: "Contact Shiva Shakthi Health",
    lines: [
      "Book consultations and integrated assessments.",
      "Connect for center-specific treatment pathways.",
      "Reach us for collaborations and research programs.",
    ],
  },
];

function ContentBlock({ item }) {
  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 700, color: "#0F2A44", textTransform: "uppercase" }}>
        {item.title}
      </Typography>

      {item.description ? (
        <Typography sx={{ mt: 1.5, fontSize: 16, lineHeight: 1.75, color: "text.secondary" }}>
          {item.description}
        </Typography>
      ) : null}

      {item.bullets ? (
        <List dense sx={{ mt: 1, listStyleType: "disc", pl: 3 }}>
          {item.bullets.map((bullet) => (
            <ListItem key={bullet} sx={{ display: "list-item", p: 0.2 }}>
              <ListItemText
                primary={bullet}
                slotProps={{ primary: { sx: { fontSize: 16, lineHeight: 1.7, color: "text.secondary" } } }}
              />
            </ListItem>
          ))}
        </List>
      ) : null}

      {item.sections ? (
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {item.sections.map((section) => (
            <Grid key={section.heading} size={{ xs: 12, md: 6 }}>
              <Paper variant="outlined" sx={{ p: 1.5, borderRadius: 2, bgcolor: "#f8fafc" }}>
                <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#0F2A44" }}>{section.heading}</Typography>
                <List dense sx={{ mt: 1, listStyleType: "disc", pl: 3 }}>
                  {section.items.map((entry) => (
                    <ListItem key={entry} sx={{ display: "list-item", p: 0.1 }}>
                      <ListItemText
                        primary={entry}
                        slotProps={{ primary: { sx: { fontSize: 14, lineHeight: 1.6, color: "text.secondary" } } }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>
      ) : null}

      {item.lines ? (
        <Box sx={{ mt: 2 }}>
          {item.lines.map((line) => (
            <Typography key={line} sx={{ fontSize: 16, fontWeight: 600, lineHeight: 1.7, color: "text.primary" }}>
              {line}
            </Typography>
          ))}
        </Box>
      ) : null}
    </Box>
  );
}

export default function Navbar() {
  const [tabIndex, setTabIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const activeItem = useMemo(() => NAV_ITEMS[tabIndex] ?? NAV_ITEMS[0], [tabIndex]);

  return (
    <AppBar
      position="sticky"
      elevation={2}
      color="transparent"
      sx={{
        zIndex: (theme) => theme.zIndex.appBar + 20,
        bgcolor: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "none",
          width: "100%",
          mx: 0,
          px: 0,
          py: 1.5,
          minHeight: "84px !important",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexShrink: 0 }}>
          <Box
            component="img"
            src={Logo}
            alt="Shiva Shakthi Health logo"
            sx={{ width: { xs: 156, md: 72 }, height: { xs: 56, md: 72 }, objectFit: "contain" }}
          />
          <Box>
            <Typography sx={{ fontSize: { xs: 16, lg: 20 }, fontWeight: 700, color: "#0F2A44", lineHeight: 1.1 }}>
              Shiva Shakthi Health
            </Typography>
            <Typography
              sx={{
                display: { xs: "none", lg: "block" },
                fontSize: 10,
                letterSpacing: "0.1em",
                color: "#6B7280",
                mt: 0.3,
              }}
            >
              A Spectrum of healing all under one roof
            </Typography>
          </Box>
        </Box>

        <Box sx={{ minWidth: 0, flex: 1, ml: { xs: -1, md: -2 } }}>
          <Tabs
            value={tabIndex}
            onChange={(_, value) => setTabIndex(value)}
            variant="scrollable"
            scrollButtons={false}
            textColor="inherit"
            indicatorColor="primary"
            sx={{
              minHeight: 48,
              "& .MuiTabs-flexContainer": { gap: 1.5 },
              "& .MuiTab-root": {
                minHeight: 48,
                minWidth: "max-content",
                px: 1,
                fontSize: { xs: 14, xl: 18 },
                fontWeight: 600,
                textTransform: "none",
                color: "#1F2937",
              },
              "& .MuiTab-root.Mui-selected": { color: "#0F2A44" },
            }}
          >
            {NAV_ITEMS.map((item, index) => (
              <Tab
                key={item.id}
                label={item.label}
                href={item.href}
                onMouseEnter={(event) => {
                  setTabIndex(index);
                  setAnchorEl(event.currentTarget);
                  setMenuOpen(true);
                }}
                onFocus={(event) => {
                  setTabIndex(index);
                  setAnchorEl(event.currentTarget);
                  setMenuOpen(true);
                }}
              />
            ))}
          </Tabs>
        </Box>
      </Toolbar>

      <Popper
        open={menuOpen}
        anchorEl={anchorEl}
        placement="bottom-start"
        transition
        sx={{ zIndex: (theme) => theme.zIndex.modal + 5 }}
        onMouseLeave={() => setMenuOpen(false)}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={220}>
            <Paper
              elevation={12}
              onMouseEnter={() => setMenuOpen(true)}
              sx={{
                mt: 1,
                width: { xs: "92vw", lg: 1100 },
                maxHeight: "70vh",
                overflowY: "auto",
                borderRadius: 3,
                border: "1px solid #e2e8f0",
              }}
            >
              <Box sx={{ height: 6, background: activeItem.gradient }} />
              <Box sx={{ p: { xs: 2, md: 3 } }}>
                <ContentBlock item={activeItem} />
              </Box>
            </Paper>
          </Fade>
        )}
      </Popper>
    </AppBar>
  );
}
