"use client";

import styled from "styled-components";
import type { SCTheme } from "@/theme/scTheme";

const HeroWrapper = styled.section`
  background: linear-gradient(135deg, ${({ theme }: { theme: SCTheme }) => theme.colors.primary}, #7c4dff);
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.white};
  padding: 80px 24px;
  text-align: center;
  border-radius: ${({ theme }: { theme: SCTheme }) => theme.borderRadius};
  margin-bottom: ${({ theme }: { theme: SCTheme }) => theme.spacing.lg};
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
`;

export default function StyledHero() {
  return (
    <HeroWrapper>
      <HeroTitle>Styled Components Section</HeroTitle>
      <HeroSubtitle>
        This hero banner is built entirely with Styled Components v5.3.11,
        using the ThemeProvider for consistent design tokens.
      </HeroSubtitle>
    </HeroWrapper>
  );
}
