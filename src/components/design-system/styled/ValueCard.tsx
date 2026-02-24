"use client";

import styled from "styled-components";
import type { SCTheme } from "../../../theme/scTheme";

interface ValueCardProps {
  title: string;
  description: string;
  variant?: "light" | "dark";
}

const Card = styled.div<{ $variant: "light" | "dark" }>`
  padding: 32px;
  border: 1px solid
    ${({ theme, $variant }: { theme: SCTheme; $variant: string }) =>
      $variant === "dark" ? theme.colors.darkLighter : theme.colors.border};
  background: ${({ theme, $variant }: { theme: SCTheme; $variant: string }) =>
    $variant === "dark" ? theme.colors.secondaryLight : theme.colors.surface};
  transition: border-color ${({ theme }: { theme: SCTheme }) => theme.transition.fast};

  &:hover {
    border-color: ${({ theme }: { theme: SCTheme }) => theme.colors.primary};
  }
`;

const Title = styled.h4<{ $variant: "light" | "dark" }>`
  margin: 0 0 12px;
  font-size: 1rem;
  font-weight: ${({ theme }: { theme: SCTheme }) => theme.fontWeight.semibold};
  color: ${({ theme, $variant }: { theme: SCTheme; $variant: string }) =>
    $variant === "dark" ? theme.colors.white : theme.colors.text};
`;

const Description = styled.p<{ $variant: "light" | "dark" }>`
  margin: 0;
  font-size: ${({ theme }: { theme: SCTheme }) => theme.fontSize.sm};
  line-height: 1.7;
  color: ${({ theme, $variant }: { theme: SCTheme; $variant: string }) =>
    $variant === "dark" ? theme.colors.textOnDark : theme.colors.textSecondary};
`;

export default function ValueCard({ title, description, variant = "light" }: ValueCardProps) {
  return (
    <Card $variant={variant}>
      <Title $variant={variant}>{title}</Title>
      <Description $variant={variant}>{description}</Description>
    </Card>
  );
}
