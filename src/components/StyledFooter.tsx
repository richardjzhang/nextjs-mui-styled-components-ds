"use client";

import styled from "styled-components";
import type { SCTheme } from "@/theme/scTheme";

const FooterWrapper = styled.footer`
  background: ${({ theme }: { theme: SCTheme }) => theme.colors.text};
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.white};
  padding: ${({ theme }: { theme: SCTheme }) => theme.spacing.lg};
  text-align: center;
  border-radius: ${({ theme }: { theme: SCTheme }) => theme.borderRadius};
  margin-top: ${({ theme }: { theme: SCTheme }) => theme.spacing.lg};
  font-size: 0.875rem;
  opacity: 0.8;
`;

export default function StyledFooter() {
  return (
    <FooterWrapper>
      Built with Next.js 15.5.9 • Styled Components 5.3.11 • MUI 7 / Emotion 11
    </FooterWrapper>
  );
}
