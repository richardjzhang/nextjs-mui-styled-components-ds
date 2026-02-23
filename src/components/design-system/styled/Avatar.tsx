"use client";

import styled from "styled-components";
import type { SCTheme } from "../../../theme/scTheme";

type AvatarSize = "sm" | "md" | "lg";

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
}

const sizeMap = { sm: "32px", md: "40px", lg: "56px" };
const fontSizeMap = { sm: "0.75rem", md: "0.875rem", lg: "1.25rem" };

const AvatarWrapper = styled.div<{ $size: AvatarSize; $color: string }>`
  width: ${({ $size }) => sizeMap[$size]};
  height: ${({ $size }) => sizeMap[$size]};
  border-radius: ${({ theme }: { theme: SCTheme }) => theme.borderRadiusFull};
  background: ${({ $color }) => $color};
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ $size }) => fontSizeMap[$size]};
  font-weight: ${({ theme }: { theme: SCTheme }) => theme.fontWeight.semibold};
  overflow: hidden;
  flex-shrink: 0;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function stringToColor(str: string): string {
  const colors = ["#1976d2", "#dc004e", "#2e7d32", "#ed6c02", "#9c27b0", "#00695c"];
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function Avatar({ src, alt, name, size = "md" }: AvatarProps) {
  const color = stringToColor(name || alt || "?");

  return (
    <AvatarWrapper $size={size} $color={color}>
      {src ? (
        <AvatarImage src={src} alt={alt || name || "avatar"} />
      ) : (
        getInitials(name || alt || "?")
      )}
    </AvatarWrapper>
  );
}
