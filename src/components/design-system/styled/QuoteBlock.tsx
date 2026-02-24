"use client";

import styled from "styled-components";
import type { SCTheme } from "../../../theme/scTheme";

interface QuoteBlockProps {
  quote: string;
  author: string;
  role?: string;
  variant?: "light" | "dark";
}

const Wrapper = styled.blockquote<{ $variant: "light" | "dark" }>`
  margin: 0;
  padding: 48px;
  position: relative;
  background: ${({ theme, $variant }: { theme: SCTheme; $variant: string }) =>
    $variant === "dark" ? theme.colors.dark : theme.colors.surface};
  border-left: 4px solid ${({ theme }: { theme: SCTheme }) => theme.colors.primary};
`;

const QuoteIcon = styled.div<{ $variant: "light" | "dark" }>`
  width: 40px;
  height: 40px;
  margin-bottom: 24px;
  color: ${({ theme, $variant }: { theme: SCTheme; $variant: string }) =>
    $variant === "dark" ? theme.colors.textOnDark : theme.colors.textSecondary};
`;

const QuoteText = styled.p<{ $variant: "light" | "dark" }>`
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  line-height: 1.5;
  font-weight: ${({ theme }: { theme: SCTheme }) => theme.fontWeight.normal};
  margin: 0 0 32px;
  font-style: italic;
  max-width: 700px;
  color: ${({ theme, $variant }: { theme: SCTheme; $variant: string }) =>
    $variant === "dark" ? theme.colors.white : theme.colors.text};
`;

const AuthorName = styled.cite<{ $variant: "light" | "dark" }>`
  display: block;
  font-style: normal;
  font-size: 1rem;
  font-weight: ${({ theme }: { theme: SCTheme }) => theme.fontWeight.semibold};
  color: ${({ theme, $variant }: { theme: SCTheme; $variant: string }) =>
    $variant === "dark" ? theme.colors.white : theme.colors.text};
`;

const AuthorRole = styled.span<{ $variant: "light" | "dark" }>`
  display: block;
  font-size: ${({ theme }: { theme: SCTheme }) => theme.fontSize.sm};
  margin-top: 4px;
  color: ${({ theme, $variant }: { theme: SCTheme; $variant: string }) =>
    $variant === "dark" ? theme.colors.textOnDark : theme.colors.textSecondary};
`;

export default function QuoteBlock({ quote, author, role, variant = "light" }: QuoteBlockProps) {
  return (
    <Wrapper $variant={variant}>
      <QuoteIcon $variant={variant}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M8 25.333C8 21.333 10 17.667 14 14.333L16.333 17C13.667 19 12.333 21.333 12.333 24H17.333V30.667H8V25.333ZM22.667 25.333C22.667 21.333 24.667 17.667 28.667 14.333L31 17C28.333 19 27 21.333 27 24H32V30.667H22.667V25.333Z"
            fill="currentColor"
          />
        </svg>
      </QuoteIcon>
      <QuoteText $variant={variant}>{quote}</QuoteText>
      <AuthorName $variant={variant}>{author}</AuthorName>
      {role && <AuthorRole $variant={variant}>{role}</AuthorRole>}
    </Wrapper>
  );
}
