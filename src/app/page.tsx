import Container from "@mui/material/Container";
import StyledHero from "@/components/StyledHero";
import MuiCardSection from "@/components/MuiCardSection";
import StyledFooter from "@/components/StyledFooter";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Styled Components */}
      <StyledHero />

      {/* Material UI / Emotion */}
      <MuiCardSection />

      {/* Styled Components */}
      <StyledFooter />
    </Container>
  );
}
