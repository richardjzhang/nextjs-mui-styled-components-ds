import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import MuiRegistry from "@/lib/MuiRegistry";

export const metadata: Metadata = {
  title: "Next.js + Styled Components + MUI Demo",
  description:
    "Demonstrating coexistence of Styled Components and Material UI (Emotion) in a Next.js 15 App Router project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: '"Inter", sans-serif' }}>
        <StyledComponentsRegistry>
          <MuiRegistry>{children}</MuiRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
