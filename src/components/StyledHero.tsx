"use client";

import styled from "styled-components";
import type { SCTheme } from "@/theme/scTheme";

const HeroWrapper = styled.section`
  background: ${({ theme }: { theme: SCTheme }) => theme.colors.dark};
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.white};
  padding: 120px 48px;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 24px;
  background: ${({ theme }: { theme: SCTheme }) => theme.colors.white};
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.text};
  display: inline-block;
  padding: 16px 24px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.textOnDark};
  max-width: 600px;
  line-height: 1.6;
  margin: 0 0 32px;
`;

const HeroCTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }: { theme: SCTheme }) => theme.colors.primary};
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.white};
  padding: 14px 32px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background 150ms ease;

  &:hover {
    background: ${({ theme }: { theme: SCTheme }) => theme.colors.primaryDark};
  }
`;

const WatermarkText = styled.div`
  position: absolute;
  bottom: -40px;
  left: 0;
  right: 0;
  font-size: 15rem;
  font-weight: 700;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.darkLight};
  line-height: 1;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
`;

export default function StyledHero() {
  return (
    <HeroWrapper>
      <HeroContent>
        <HeroTitle>
          {"We're a venture scaler powered by CommBank"}
        </HeroTitle>
        <HeroSubtitle>
          We build, buy, and invest in startups that would benefit from connections to
          {"Australia's leading bank, and could improve the lives of its 15 million customers."}
        </HeroSubtitle>
        <HeroCTA href="#who-we-are">
          Who are we?
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </HeroCTA>
      </HeroContent>
      <WatermarkText>x15ventures</WatermarkText>
    </HeroWrapper>
  );
}
