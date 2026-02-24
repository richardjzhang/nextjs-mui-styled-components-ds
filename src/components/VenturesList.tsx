"use client";

import styled from "styled-components";
import type { SCTheme } from "@/theme/scTheme";

interface Venture {
  name: string;
  year: string;
  href?: string;
}

interface VenturesListProps {
  title: string;
  ventures: Venture[];
}

const Section = styled.section`
  background: ${({ theme }: { theme: SCTheme }) => theme.colors.dark};
  padding: 80px 48px;
  @media (max-width: 768px) { padding: 60px 24px; }
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.white};
  margin: 0 0 32px;
  letter-spacing: 0.02em;
`;

const VentureRow = styled.a`
  display: flex;
  align-items: baseline;
  gap: 16px;
  text-decoration: none;
  padding: 4px 0;
  cursor: pointer;
  transition: opacity 150ms ease;
  &:hover { opacity: 0.7; }
`;

const VentureName = styled.span`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.darkLighter};
  line-height: 1.15;
  letter-spacing: -0.02em;
`;

const VentureYear = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.textOnDark};
  font-weight: 400;
  white-space: nowrap;
  opacity: 0.6;
`;

export default function VenturesList({ title, ventures }: VenturesListProps) {
  return (
    <Section>
      <Inner>
        <SectionTitle>{title}</SectionTitle>
        {ventures.map((venture) => (
          <VentureRow key={venture.name} href={venture.href || "#"}>
            <VentureName>{venture.name}</VentureName>
            <VentureYear>{venture.year}</VentureYear>
          </VentureRow>
        ))}
      </Inner>
    </Section>
  );
}
