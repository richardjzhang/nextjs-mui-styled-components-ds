"use client";

import styled from "styled-components";
import type { SCTheme } from "@/theme/scTheme";

const HeroWrapper = styled.section`
  background: ${({ theme }: { theme: SCTheme }) => theme.colors.dark};
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.white};
  padding: 180px 48px 120px;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 140px 24px 80px;
    min-height: auto;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1000px;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.08;
  margin: 0 0 40px;
  background: ${({ theme }: { theme: SCTheme }) => theme.colors.white};
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.text};
  display: inline;
  padding: 8px 16px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
`;

const HeroCTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: ${({ theme }: { theme: SCTheme }) => theme.colors.primary};
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.white};
  padding: 16px 36px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background 150ms ease;
  margin-top: 40px;

  &:hover {
    background: ${({ theme }: { theme: SCTheme }) => theme.colors.primaryDark};
  }
`;

const WatermarkText = styled.div`
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
  font-size: clamp(8rem, 15vw, 16rem);
  font-weight: 700;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.darkLight};
  line-height: 1;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
`;

const DotPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.15;
  background-image: radial-gradient(circle, #7B8FA1 1px, transparent 1px);
  background-size: 24px 24px;
  pointer-events: none;
`;

export default function StyledHero() {
  return (
    <HeroWrapper>
      <DotPattern />
      <HeroContent>
        <div>
          <HeroTitle>
            {"We're a venture scaler powered by CommBank"}
          </HeroTitle>
        </div>
        <div>
          <HeroCTA href="#who-we-are">
            Who are we?
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </HeroCTA>
        </div>
      </HeroContent>
      <WatermarkText>x15ventures</WatermarkText>
    </HeroWrapper>
  );
}
