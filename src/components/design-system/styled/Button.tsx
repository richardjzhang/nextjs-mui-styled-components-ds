"use client";

import styled, { css } from "styled-components";
import type { SCTheme } from "../../../theme/scTheme";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const sizeStyles = {
  sm: css`
    padding: 6px 12px;
    font-size: ${({ theme }: { theme: SCTheme }) => theme.fontSize.xs};
  `,
  md: css`
    padding: 10px 20px;
    font-size: ${({ theme }: { theme: SCTheme }) => theme.fontSize.sm};
  `,
  lg: css`
    padding: 14px 28px;
    font-size: ${({ theme }: { theme: SCTheme }) => theme.fontSize.md};
  `,
};

const variantStyles = {
  primary: css`
    background: ${({ theme }: { theme: SCTheme }) => theme.colors.primary};
    color: ${({ theme }: { theme: SCTheme }) => theme.colors.white};
    border: 2px solid transparent;

    &:hover:not(:disabled) {
      background: ${({ theme }: { theme: SCTheme }) => theme.colors.primaryDark};
    }
  `,
  secondary: css`
    background: ${({ theme }: { theme: SCTheme }) => theme.colors.secondary};
    color: ${({ theme }: { theme: SCTheme }) => theme.colors.white};
    border: 2px solid transparent;

    &:hover:not(:disabled) {
      background: ${({ theme }: { theme: SCTheme }) => theme.colors.secondaryDark};
    }
  `,
  outline: css`
    background: transparent;
    color: currentColor;
    border: 2px solid currentColor;
    opacity: 0.7;

    &:hover:not(:disabled) {
      opacity: 1;
    }
  `,
  ghost: css`
    background: transparent;
    color: currentColor;
    border: 2px solid transparent;
    opacity: 0.7;

    &:hover:not(:disabled) {
      opacity: 1;
    }
  `,
};

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-family: inherit;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition.fast};
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  white-space: nowrap;

  ${({ $variant }) => variantStyles[$variant]}
  ${({ $size }) => sizeStyles[$size]}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton $variant={variant} $size={size} $fullWidth={fullWidth} {...props}>
      {children}
    </StyledButton>
  );
}
