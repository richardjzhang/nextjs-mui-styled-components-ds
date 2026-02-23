"use client";

import styled from "styled-components";
import type { SCTheme } from "../../../theme/scTheme";

type BadgeVariant = "default" | "success" | "warning" | "error" | "info";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;
}

const colorMap: Record<BadgeVariant, { bg: keyof SCTheme["colors"]; text: keyof SCTheme["colors"] }> = {
  default: { bg: "surfaceHover", text: "text" },
  success: { bg: "success", text: "white" },
  warning: { bg: "warning", text: "white" },
  error: { bg: "error", text: "white" },
  info: { bg: "info", text: "white" },
};

const StyledBadge = styled.span<{ $variant: BadgeVariant }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 2px 10px;
  border-radius: ${({ theme }: { theme: SCTheme }) => theme.borderRadiusFull};
  font-size: ${({ theme }: { theme: SCTheme }) => theme.fontSize.xs};
  font-weight: ${({ theme }: { theme: SCTheme }) => theme.fontWeight.medium};
  background: ${({ theme, $variant }: { theme: SCTheme; $variant: BadgeVariant }) =>
    theme.colors[colorMap[$variant].bg]};
  color: ${({ theme, $variant }: { theme: SCTheme; $variant: BadgeVariant }) =>
    theme.colors[colorMap[$variant].text]};
  line-height: 1.5;
  white-space: nowrap;
`;

const Dot = styled.span<{ $variant: BadgeVariant }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme, $variant }: { theme: SCTheme; $variant: BadgeVariant }) =>
    $variant === "default" ? theme.colors.textSecondary : "currentColor"};
`;

export default function Badge({ children, variant = "default", dot = false }: BadgeProps) {
  return (
    <StyledBadge $variant={variant}>
      {dot && <Dot $variant={variant} />}
      {children}
    </StyledBadge>
  );
}
