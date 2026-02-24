"use client";

import styled from "styled-components";
import type { SCTheme } from "../../../theme/scTheme";

interface VentureCardProps {
  name: string;
  year: string;
  category: string;
  description: string;
  brandColor?: string;
}

const Card = styled.div<{ $brandColor: string }>`
  position: relative;
  overflow: hidden;
  border-radius: 0;
  background: ${({ $brandColor }) => $brandColor};
  display: flex;
  flex-direction: column;
  min-height: 400px;
  cursor: pointer;
  transition: transform ${({ theme }: { theme: SCTheme }) => theme.transition.normal};

  &:hover {
    transform: scale(0.98);
  }
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 32px;
`;

const WatermarkLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
`;

const WatermarkLine = styled.span<{ $brandColor: string }>`
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.05;
  white-space: nowrap;
  color: ${({ $brandColor }) => $brandColor};
  filter: brightness(0.85);
`;

const CategoryChip = styled.span`
  position: absolute;
  top: 24px;
  right: 24px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  padding: 4px 14px;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #1A1D23;
  z-index: 2;
`;

const InfoBar = styled.div`
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  padding: 20px 24px;
`;

const VentureName = styled.h3`
  margin: 0 0 4px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1A1D23;
`;

const VentureDescription = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #5C6370;
  line-height: 1.5;
`;

export default function VentureCard({
  name,
  year,
  category,
  description,
  brandColor = "#2B3039",
}: VentureCardProps) {
  const lines = Array.from({ length: 6 });

  return (
    <Card $brandColor={brandColor}>
      <CardContent>
        <CategoryChip>{category}</CategoryChip>
        <WatermarkLayer>
          {lines.map((_, i) => (
            <WatermarkLine key={i} $brandColor={brandColor}>
              {name}
            </WatermarkLine>
          ))}
        </WatermarkLayer>
      </CardContent>
      <InfoBar>
        <VentureName>
          {name} <span style={{ fontWeight: 400, fontSize: "0.85rem", color: "#7B8FA1" }}>{year}</span>
        </VentureName>
        <VentureDescription>{description}</VentureDescription>
      </InfoBar>
    </Card>
  );
}
