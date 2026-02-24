"use client";

import styled from "styled-components";
import type { SCTheme } from "../../../theme/scTheme";

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: "light" | "dark";
}

const Card = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const IconWrapper = styled.div<{ $variant: "light" | "dark" }>`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, $variant }: { theme: SCTheme; $variant: string }) =>
    $variant === "dark" ? theme.colors.textOnDark : theme.colors.textSecondary};
`;

const Title = styled.h3<{ $variant: "light" | "dark" }>`
  font-size: 1.1rem;
  font-weight: ${({ theme }: { theme: SCTheme }) => theme.fontWeight.semibold};
  margin: 0;
  color: ${({ theme, $variant }: { theme: SCTheme; $variant: string }) =>
    $variant === "dark" ? theme.colors.white : theme.colors.text};
`;

const Description = styled.p<{ $variant: "light" | "dark" }>`
  font-size: ${({ theme }: { theme: SCTheme }) => theme.fontSize.sm};
  line-height: 1.7;
  margin: 0;
  color: ${({ theme, $variant }: { theme: SCTheme; $variant: string }) =>
    $variant === "dark" ? theme.colors.textOnDark : theme.colors.textSecondary};
`;

export default function IconCard({ icon, title, description, variant = "dark" }: IconCardProps) {
  return (
    <Card>
      <IconWrapper $variant={variant}>{icon}</IconWrapper>
      <Title $variant={variant}>{title}</Title>
      <Description $variant={variant}>{description}</Description>
    </Card>
  );
}
