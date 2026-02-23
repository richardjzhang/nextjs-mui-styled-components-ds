"use client";

import styled from "styled-components";
import type { SCTheme } from "../../../theme/scTheme";

interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
}

const Card = styled.div`
  background: ${({ theme }: { theme: SCTheme }) => theme.colors.surface};
  border: 1px solid ${({ theme }: { theme: SCTheme }) => theme.colors.border};
  border-radius: ${({ theme }: { theme: SCTheme }) => theme.borderRadiusLg};
  padding: ${({ theme }: { theme: SCTheme }) => theme.spacing.lg};
  box-shadow: ${({ theme }: { theme: SCTheme }) => theme.shadows.sm};
  transition: box-shadow ${({ theme }: { theme: SCTheme }) => theme.transition.fast};

  &:hover {
    box-shadow: ${({ theme }: { theme: SCTheme }) => theme.shadows.md};
  }
`;

const Label = styled.p`
  margin: 0;
  font-size: ${({ theme }: { theme: SCTheme }) => theme.fontSize.sm};
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }: { theme: SCTheme }) => theme.fontWeight.medium};
`;

const Value = styled.p`
  margin: 8px 0 0;
  font-size: ${({ theme }: { theme: SCTheme }) => theme.fontSize.display};
  font-weight: ${({ theme }: { theme: SCTheme }) => theme.fontWeight.bold};
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.text};
  line-height: 1.2;
`;

const trendColors = {
  up: "success",
  down: "error",
  neutral: "textSecondary",
} as const;

const Change = styled.span<{ $trend: "up" | "down" | "neutral" }>`
  display: inline-block;
  margin-top: 8px;
  font-size: ${({ theme }: { theme: SCTheme }) => theme.fontSize.xs};
  font-weight: ${({ theme }: { theme: SCTheme }) => theme.fontWeight.medium};
  color: ${({ theme, $trend }: { theme: SCTheme; $trend: "up" | "down" | "neutral" }) =>
    theme.colors[trendColors[$trend]]};
`;

const trendArrows = { up: "\u2191", down: "\u2193", neutral: "\u2192" };

export default function StatCard({ label, value, change, trend = "neutral" }: StatCardProps) {
  return (
    <Card>
      <Label>{label}</Label>
      <Value>{value}</Value>
      {change && (
        <Change $trend={trend}>
          {trendArrows[trend]} {change}
        </Change>
      )}
    </Card>
  );
}
