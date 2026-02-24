"use client";

import styled from "styled-components";
import type { SCTheme } from "@/theme/scTheme";

const Section = styled.section`
  background: ${({ theme }: { theme: SCTheme }) => theme.colors.dark};
  padding: 80px 48px;
  @media (max-width: 768px) { padding: 60px 24px; }
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.white};
  line-height: 1.3;
  margin: 0 0 16px;
  max-width: 600px;
`;

const Body = styled.p`
  font-size: 1rem;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.textOnDark};
  line-height: 1.7;
  max-width: 600px;
  margin: 0 0 32px;
`;

const CTALink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.white};
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: opacity 150ms ease;
  &:hover { opacity: 0.8; }
`;

export default function WorkAtX15() {
  return (
    <Section>
      <Inner>
        <Title>{"Find out what it's like to work at x15"}</Title>
        <Body>{"We're a diverse team from different backgrounds \u2013 often using our skills in new domains. We're curious, roll up our sleeves, and find that most problems can be solved with a good dose of grit and humour."}</Body>
        <CTALink href="/people">
          Life at x15
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </CTALink>
      </Inner>
    </Section>
  );
}
