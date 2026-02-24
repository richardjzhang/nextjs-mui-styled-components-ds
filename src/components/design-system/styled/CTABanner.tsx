"use client";

import styled from "styled-components";
import type { SCTheme } from "../../../theme/scTheme";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  buttonHref?: string;
  variant?: "primary" | "dark";
  onButtonClick?: () => void;
}

const Wrapper = styled.section<{ $variant: "primary" | "dark" }>`
  padding: 64px 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: ${({ theme, $variant }: { theme: SCTheme; $variant: string }) =>
    $variant === "primary" ? theme.colors.primary : theme.colors.dark};
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const TextBlock = styled.div`
  max-width: 600px;
`;

const Title = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: ${({ theme }: { theme: SCTheme }) => theme.fontWeight.bold};
  line-height: 1.2;
  margin: 0;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.white};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }: { theme: SCTheme }) => theme.fontSize.md};
  line-height: 1.6;
  margin: 12px 0 0;
  color: rgba(255, 255, 255, 0.75);
`;

const ActionButton = styled.a<{ $variant: "primary" | "dark" }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  font-weight: ${({ theme }: { theme: SCTheme }) => theme.fontWeight.semibold};
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: all ${({ theme }: { theme: SCTheme }) => theme.transition.fast};
  white-space: nowrap;
  font-family: inherit;

  background: ${({ theme, $variant }: { theme: SCTheme; $variant: string }) =>
    $variant === "primary" ? theme.colors.white : theme.colors.primary};
  color: ${({ theme, $variant }: { theme: SCTheme; $variant: string }) =>
    $variant === "primary" ? theme.colors.text : theme.colors.white};

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

export default function CTABanner({
  title,
  subtitle,
  buttonLabel,
  buttonHref = "#",
  variant = "dark",
  onButtonClick,
}: CTABannerProps) {
  return (
    <Wrapper $variant={variant}>
      <TextBlock>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </TextBlock>
      <ActionButton
        as={onButtonClick ? "button" : "a"}
        href={onButtonClick ? undefined : buttonHref}
        onClick={onButtonClick}
        $variant={variant}
      >
        {buttonLabel}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </ActionButton>
    </Wrapper>
  );
}
