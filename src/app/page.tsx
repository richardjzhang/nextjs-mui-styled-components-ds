import StyledHero from "@/components/StyledHero";
import MuiCardSection from "@/components/MuiCardSection";
import StyledFooter from "@/components/StyledFooter";
import { Navbar } from "@/components/design-system";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Design System", href: "/design-system" },
];

export default function Home() {
  return (
    <>
      <Navbar title="x15ventures" items={NAV_ITEMS} />

      {/* Hero – dark with watermark */}
      <StyledHero />

      {/* Mission section – light */}
      <section
        id="who-we-are"
        style={{
          padding: "80px 48px",
          background: "#FFFFFF",
          maxWidth: "100%",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#1A1D23",
              lineHeight: 1.2,
              marginBottom: 24,
              marginTop: 0,
              maxWidth: 700,
              letterSpacing: "-0.02em",
            }}
          >
            {"We're made to scale. To move and grow, learn and thrive."}
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#5C6370",
              lineHeight: 1.7,
              maxWidth: 540,
              margin: "0 0 24px",
            }}
          >
            {"We're human. Real people, getting stuck in and doing the work. We come together as a team to drive and deliver new ideas, capability, and innovations that'll help shape the bank of the future."}
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "#5C6370",
              lineHeight: 1.7,
              maxWidth: 540,
              margin: "0 0 32px",
            }}
          >
            Discover how you can scale your impact as a part of our venture or core teams.
          </p>
          <a
            href="/design-system"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 32px",
              border: "2px solid #D4D8DE",
              color: "#1A1D23",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1rem",
              transition: "border-color 150ms ease",
            }}
          >
            View Design System
          </a>
        </div>
      </section>

      {/* Portfolio types – dark */}
      <MuiCardSection />

      {/* Footer */}
      <StyledFooter />
    </>
  );
}
