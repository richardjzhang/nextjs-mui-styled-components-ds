"use client";

import styled from "styled-components";
import type { SCTheme } from "@/theme/scTheme";

const Section = styled.section`
  background: #FFFFFF;
  padding: 100px 48px;
  @media (max-width: 768px) { padding: 60px 24px; }
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MissionText = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 700;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.text};
  line-height: 1.3;
  margin: 0 0 48px;
  max-width: 900px;
`;

const ScaleSection = styled.div`
  display: flex;
  gap: 64px;
  align-items: flex-start;
  margin-top: 80px;
  @media (max-width: 768px) { flex-direction: column; gap: 40px; margin-top: 48px; }
`;

const ScaleContent = styled.div`
  flex: 1;
`;

const ScaleTitle = styled.h3`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.text};
  line-height: 1.15;
  margin: 0 0 24px;
`;

const ScaleBody = styled.p`
  font-size: 1rem;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.textSecondary};
  line-height: 1.7;
  max-width: 480px;
  margin: 0 0 12px;
`;

const WorkingAtLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  border: 2px solid ${({ theme }: { theme: SCTheme }) => theme.colors.border};
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 24px;
  transition: border-color 150ms ease;
  &:hover { border-color: ${({ theme }: { theme: SCTheme }) => theme.colors.text}; }
`;

const ImagePlaceholder = styled.div`
  flex: 1;
  min-height: 400px;
  background: #E8EAEE;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  @media (max-width: 768px) { min-height: 250px; }
`;

export default function MissionSection() {
  return (
    <Section id="who-we-are">
      <Inner>
        <MissionText>
          We build, buy, and invest in startups that would benefit from connections
          to Australia{"'"}s leading bank, and could improve the lives of its 15 million customers.
        </MissionText>
        <ScaleSection>
          <ScaleContent>
            <ScaleTitle>{"We're made to scale. To move and grow, learn and thrive."}</ScaleTitle>
            <ScaleBody>{"We're human. Real people, getting stuck in and doing the work. We come together as a team to drive and deliver new ideas, capability, and innovations that'll help shape the bank of the future."}</ScaleBody>
            <ScaleBody>Discover how you can scale your impact as a part of our venture or core teams.</ScaleBody>
            <WorkingAtLink href="/people">Working at x15</WorkingAtLink>
          </ScaleContent>
          <ImagePlaceholder>x15 people at office</ImagePlaceholder>
        </ScaleSection>
      </Inner>
    </Section>
  );
}
