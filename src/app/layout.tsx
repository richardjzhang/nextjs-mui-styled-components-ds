import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import MuiRegistry from "@/lib/MuiRegistry";

export const metadata: Metadata = {
  title: "x15ventures Design System",
  description:
    "Design system built with Styled Components and Material UI, themed to match the x15ventures brand. Powered by Next.js 15.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif', background: '#F0F2F5' }}>
        <StyledComponentsRegistry>
          <MuiRegistry>{children}</MuiRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
