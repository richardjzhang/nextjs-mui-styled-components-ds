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
  display: flex;
  gap: 64px;
  align-items: flex-start;
  @media (max-width: 768px) { flex-direction: column; gap: 40px; }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.text};
  line-height: 1.3;
  margin: 0 0 24px;
`;

const Body = styled.p`
  font-size: 1rem;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin: 0 0 16px;
  max-width: 540px;
`;

const CTALink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  border: 2px solid ${({ theme }: { theme: SCTheme }) => theme.colors.border};
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 16px;
  transition: border-color 150ms ease;
  &:hover { border-color: ${({ theme }: { theme: SCTheme }) => theme.colors.text}; }
`;

const ImagePlaceholder = styled.div`
  flex: 1;
  min-height: 300px;
  background: #E8EAEE;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  @media (max-width: 768px) { min-height: 200px; }
`;

export default function CorporateSection() {
  return (
    <Section>
      <Inner>
        <Content>
          <Title>We exist in the space between corporate and startup.</Title>
          <Body>{"It's a place full of opportunity, tension, and potential. Where strategic alignment is critical and operational autonomy is intentional."}</Body>
          <Body>{"We share CommBank's purpose \u2013 to build a brighter future for all \u2013 and build, buy and invest in digital ventures we believe could benefit its 15 million customers and beyond."}</Body>
          <CTALink href="/about-us">More about us</CTALink>
        </Content>
        <ImagePlaceholder>x15 people at work</ImagePlaceholder>
      </Inner>
    </Section>
  );
}
