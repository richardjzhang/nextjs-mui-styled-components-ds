"use client";

import styled, { keyframes } from "styled-components";
import type { SCTheme } from "../../../theme/scTheme";

type SkeletonVariant = "text" | "circular" | "rectangular";

interface SkeletonProps {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  lines?: number;
}

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const SkeletonBase = styled.div<{
  $variant: SkeletonVariant;
  $width?: string | number;
  $height?: string | number;
}>`
  background: linear-gradient(
    90deg,
    ${({ theme }: { theme: SCTheme }) => theme.colors.border} 25%,
    ${({ theme }: { theme: SCTheme }) => theme.colors.borderLight} 50%,
    ${({ theme }: { theme: SCTheme }) => theme.colors.border} 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  border-radius: ${({ $variant, theme }: { $variant: SkeletonVariant; theme: SCTheme }) =>
    $variant === "circular"
      ? theme.borderRadiusFull
      : $variant === "text"
        ? theme.borderRadiusSm
        : theme.borderRadius};
  width: ${({ $width }) => (typeof $width === "number" ? `${$width}px` : $width || "100%")};
  height: ${({ $variant, $height }) => {
    if ($height) return typeof $height === "number" ? `${$height}px` : $height;
    if ($variant === "circular") return undefined;
    if ($variant === "text") return "1em";
    return "100px";
  }};
  aspect-ratio: ${({ $variant }) => ($variant === "circular" ? "1" : undefined)};
`;

const SkeletonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default function Skeleton({ variant = "text", width, height, lines }: SkeletonProps) {
  if (lines && lines > 1) {
    return (
      <SkeletonGroup>
        {Array.from({ length: lines }).map((_, i) => (
          <SkeletonBase
            key={i}
            $variant="text"
            $width={i === lines - 1 ? "75%" : width}
            $height={height}
          />
        ))}
      </SkeletonGroup>
    );
  }

  return <SkeletonBase $variant={variant} $width={width} $height={height} />;
}
