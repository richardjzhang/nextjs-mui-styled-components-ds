"use client";

import styled from "styled-components";
import type { SCTheme } from "../../../theme/scTheme";

type SectionHeaderVariant = "light" | "dark";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  variant?: SectionHeaderVariant;
  align?: "left" | "center";
}

const Wrapper = styled.div<{ $align: string }>`
  text-align: ${({ $align }) => $align};
  max-width: 800px;
  margin: ${({ $align }) => ($align === "center" ? "0 auto" : "0")};
`;

const Eyebrow = styled.span<{ $variant: SectionHeaderVariant }>`
  display: block;
  font-size: ${({ theme }: { theme: SCTheme }) => theme.fontSize.sm};
  font-weight: ${({ theme }: { theme: SCTheme }) => theme.fontWeight.medium};
  text-transform: lowercase;
  letter-spacing: 0.02em;
  color: ${({ theme, $variant }: { theme: SCTheme; $variant: SectionHeaderVariant }) =>
    $variant === "dark" ? theme.colors.textOnDark : theme.colors.textSecondary};
  margin-bottom: 12px;
`;

const Title = styled.h2<{ $variant: SectionHeaderVariant }>`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: ${({ theme }: { theme: SCTheme }) => theme.fontWeight.bold};
  line-height: 1.1;
  margin: 0 0 16px;
  color: ${({ theme, $variant }: { theme: SCTheme; $variant: SectionHeaderVariant }) =>
    $variant === "dark" ? theme.colors.white : theme.colors.text};
`;

const Subtitle = styled.p<{ $variant: SectionHeaderVariant }>`
  font-size: ${({ theme }: { theme: SCTheme }) => theme.fontSize.lg};
  line-height: 1.6;
  margin: 0;
  max-width: 600px;
  color: ${({ theme, $variant }: { theme: SCTheme; $variant: SectionHeaderVariant }) =>
    $variant === "dark" ? theme.colors.textOnDark : theme.colors.textSecondary};
`;

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  variant = "light",
  align = "left",
}: SectionHeaderProps) {
  return (
    <Wrapper $align={align}>
      {eyebrow && <Eyebrow $variant={variant}>{eyebrow}</Eyebrow>}
      <Title $variant={variant}>{title}</Title>
      {subtitle && <Subtitle $variant={variant}>{subtitle}</Subtitle>}
    </Wrapper>
  );
}
