"use client";

import styled from "styled-components";
import type { SCTheme } from "../../../theme/scTheme";

type ChipVariant = "default" | "outlined" | "filled";
type ChipSize = "sm" | "md";

interface ChipProps {
  children: React.ReactNode;
  variant?: ChipVariant;
  size?: ChipSize;
  active?: boolean;
  onClick?: () => void;
}

const StyledChip = styled.span<{
  $variant: ChipVariant;
  $size: ChipSize;
  $active: boolean;
  $clickable: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-family: inherit;
  font-weight: ${({ theme }: { theme: SCTheme }) => theme.fontWeight.medium};
  border-radius: ${({ theme }: { theme: SCTheme }) => theme.borderRadiusFull};
  transition: all ${({ theme }: { theme: SCTheme }) => theme.transition.fast};
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};
  user-select: none;

  /* Size */
  padding: ${({ $size }) => ($size === "sm" ? "4px 12px" : "6px 16px")};
  font-size: ${({ $size, theme }: { $size: ChipSize; theme: SCTheme }) =>
    $size === "sm" ? theme.fontSize.xs : theme.fontSize.sm};

  /* Variant: default (light bg) */
  ${({ $variant, $active, theme }: { $variant: ChipVariant; $active: boolean; theme: SCTheme }) =>
    $variant === "default" &&
    `
    background: ${$active ? theme.colors.primary : theme.colors.surfaceHover};
    color: ${$active ? theme.colors.white : theme.colors.text};
    border: 1px solid transparent;
  `}

  /* Variant: outlined */
  ${({ $variant, $active, theme }: { $variant: ChipVariant; $active: boolean; theme: SCTheme }) =>
    $variant === "outlined" &&
    `
    background: transparent;
    color: ${$active ? theme.colors.primary : theme.colors.text};
    border: 1px solid ${$active ? theme.colors.primary : theme.colors.border};
  `}

  /* Variant: filled */
  ${({ $variant, $active, theme }: { $variant: ChipVariant; $active: boolean; theme: SCTheme }) =>
    $variant === "filled" &&
    `
    background: ${$active ? theme.colors.primary : theme.colors.dark};
    color: ${theme.colors.white};
    border: 1px solid transparent;
  `}

  &:hover {
    ${({ $clickable, theme }: { $clickable: boolean; theme: SCTheme }) =>
      $clickable &&
      `
      opacity: 0.85;
      border-color: ${theme.colors.primary};
    `}
  }
`;

export default function Chip({
  children,
  variant = "outlined",
  size = "md",
  active = false,
  onClick,
}: ChipProps) {
  return (
    <StyledChip
      $variant={variant}
      $size={size}
      $active={active}
      $clickable={!!onClick}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </StyledChip>
  );
}
