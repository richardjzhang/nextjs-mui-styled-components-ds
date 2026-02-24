"use client";

import { Navbar } from "@/components/design-system";
import StyledHero from "@/components/StyledHero";
import MissionSection from "@/components/MissionSection";
import MuiCardSection from "@/components/MuiCardSection";
import VenturesList from "@/components/VenturesList";
import CorporateSection from "@/components/CorporateSection";
import SpaceBetween from "@/components/SpaceBetween";
import WorkAtX15 from "@/components/WorkAtX15";
import StyledFooter from "@/components/StyledFooter";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "People", href: "/people" },
  { label: "Jobs", href: "/job-listings" },
];

const BUILT_VENTURES = [
  { name: "Home-in", year: "2020", href: "https://www.home-in.com.au/" },
  { name: "Credit Savvy", year: "2020", href: "https://www.creditsavvy.com.au/" },
  { name: "Doshii", year: "2021" },
  { name: "Unloan", year: "2022 (joined CBA, 2024)" },
  { name: "Kit", year: "2022" },
  { name: "Waddle", year: "2023" },
  { name: "Truyu", year: "2024 (In pilot)" },
];

const EARLY_STAGE = [
  { name: "Payble", year: "2021" },
];

const XCCELERATE = [
  { name: "OwnHome", year: "2020" },
  { name: "Splashup", year: "2021" },
  { name: "Paytron", year: "2022" },
  { name: "Gable", year: "2024" },
];

export default function HomeBody() {
  return (
    <>
      <Navbar title="x15ventures" items={NAV_ITEMS} variant="dark" />
      <StyledHero />
      <MissionSection />
      <MuiCardSection />

      {/* Our ventures heading */}
      <section style={{ background: "#2B3039", padding: "80px 48px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2, margin: "0 0 16px" }}>
            Our ventures
          </h2>
          <p style={{ fontSize: "1rem", color: "#7B8FA1", lineHeight: 1.7, maxWidth: 640, margin: 0 }}>
            {"We're helping CommBank reimagine what it means to be a bank, with products and services that improve people's lives in the moments that matter."}
          </p>
        </div>
      </section>

      <VenturesList title="Built and owned" ventures={BUILT_VENTURES} />
      <VenturesList title="Early-stage investments" ventures={EARLY_STAGE} />
      <VenturesList title="Xccelerate investments" ventures={XCCELERATE} />
      <CorporateSection />
      <SpaceBetween />
      <WorkAtX15 />
      <StyledFooter />
    </>
  );
}
