"use client";

import styled from "styled-components";
import type { SCTheme } from "@/theme/scTheme";

const FooterWrapper = styled.footer`
  background: ${({ theme }: { theme: SCTheme }) => theme.colors.dark};
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.textOnDark};
  position: relative;
  overflow: hidden;
`;

const FooterContent = styled.div`
  padding: 64px 48px;
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 48px 24px;
  }
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterNav = styled.div`
  display: flex;
  gap: 80px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const FooterColumn = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FooterLink = styled.a`
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.textOnDark};
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 150ms ease;

  &:hover {
    color: ${({ theme }: { theme: SCTheme }) => theme.colors.white};
  }
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SocialPrompt = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  max-width: 320px;
  margin: 0;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.white};
`;

const SocialRow = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialIcon = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1.5px solid ${({ theme }: { theme: SCTheme }) => theme.colors.darkLighter};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.textOnDark};
  text-decoration: none;
  transition: border-color 150ms ease, color 150ms ease;

  &:hover {
    border-color: ${({ theme }: { theme: SCTheme }) => theme.colors.white};
    color: ${({ theme }: { theme: SCTheme }) => theme.colors.white};
  }
`;

const FooterCopy = styled.p`
  margin-top: 48px;
  font-size: 0.7rem;
  line-height: 1.7;
  max-width: 560px;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.textOnDark};
  opacity: 0.6;
`;

const WatermarkText = styled.div`
  font-size: clamp(6rem, 12vw, 14rem);
  font-weight: 700;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.darkLight};
  line-height: 1;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  padding-left: 48px;
  margin-top: -10px;
`;

export default function StyledFooter() {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterTop>
          <FooterNav>
            <FooterColumn>
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about-us">About</FooterLink>
              <FooterLink href="/portfolio">Portfolio</FooterLink>
            </FooterColumn>
            <FooterColumn>
              <FooterLink href="/people">People</FooterLink>
              <FooterLink href="/job-listings">Jobs</FooterLink>
              <FooterLink href="/security">Security</FooterLink>
            </FooterColumn>
            <FooterColumn>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/legal-terms">Legal Terms</FooterLink>
            </FooterColumn>
          </FooterNav>
          <FooterRight>
            <SocialPrompt>
              Want access to events, networking and job opportunities, early-stage beta programs, and more?
            </SocialPrompt>
            <SocialRow>
              <SocialIcon href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </SocialIcon>
            </SocialRow>
          </FooterRight>
        </FooterTop>
        <FooterCopy>
          {"x15ventures acknowledges the traditional custodians of the lands upon which we live, work and learn. We pay our respects to First Nations knowledge holders and recognise their connections to culture, community and country."}
        </FooterCopy>
      </FooterContent>
      <WatermarkText>x15ventures</WatermarkText>
    </FooterWrapper>
  );
}
