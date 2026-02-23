"use client";

import styled from "styled-components";
import type { SCTheme } from "../../../theme/scTheme";

interface DividerProps {
  label?: string;
  spacing?: "sm" | "md" | "lg";
}

const spacingMap = { sm: "8px", md: "16px", lg: "24px" };

const DividerWrapper = styled.div<{ $spacing: string }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }: { theme: SCTheme }) => theme.spacing.md};
  margin: ${({ $spacing }) => $spacing} 0;
`;

const Line = styled.hr`
  flex: 1;
  border: none;
  height: 1px;
  background: ${({ theme }: { theme: SCTheme }) => theme.colors.border};
  margin: 0;
`;

const Label = styled.span`
  font-size: ${({ theme }: { theme: SCTheme }) => theme.fontSize.xs};
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }: { theme: SCTheme }) => theme.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
`;

export default function Divider({ label, spacing = "md" }: DividerProps) {
  if (!label) {
    return (
      <DividerWrapper $spacing={spacingMap[spacing]}>
        <Line />
      </DividerWrapper>
    );
  }

  return (
    <DividerWrapper $spacing={spacingMap[spacing]}>
      <Line />
      <Label>{label}</Label>
      <Line />
    </DividerWrapper>
  );
}
