import { writeFileSync } from 'fs';

// page.tsx
const page = `import HomeBody from "@/components/HomeBody";

export default function Home() {
  return <HomeBody />;
}
`;

// HomeBody.tsx
const homeBody = `"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Navbar,
  SectionHeader,
  VentureCard,
  QuoteBlock,
  IconCard,
  CTABanner,
  ValueCard,
  Button,
} from "@/components/design-system";
import StyledHero from "@/components/StyledHero";
import MuiCardSection from "@/components/MuiCardSection";
import StyledFooter from "@/components/StyledFooter";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Design System", href: "/design-system" },
];

const VENTURES = [
  { name: "Home-in", year: "2020", category: "Home", description: "Home-in simplifies the complex process of buying a home. It helps buyers navigate the home buying journey and reach settlement with certainty.", brandColor: "#1A6B54" },
  { name: "Credit Savvy", year: "2020", category: "Everyday", description: "Credit Savvy powers a free credit score service in the CommBank app.", brandColor: "#1B4D8E" },
  { name: "Doshii", year: "2021", category: "Business", description: "Doshii gets hospitality apps talking to a venue\\u2019s POS, helping business owners spend less time on tech.", brandColor: "#3B4FBF" },
  { name: "Unloan", year: "2022", category: "Home", description: "A new kind of home loan with one great rate, 10-minute application time, and a discount that gets better.", brandColor: "#FF6B35" },
  { name: "Kit", year: "2022", category: "Everyday", description: "Kit is a pocket money app and prepaid card, helping improve the financial capability of young people.", brandColor: "#2DB87D" },
  { name: "Truyu", year: "2024", category: "Everyday", description: "Digital identity protection tool alerting consumers when their identity is being used or misused online.", brandColor: "#2B3039" },
];

export default function HomeBody() {
  return (
    <>
      <Navbar title="x15ventures" items={NAV_ITEMS} />

      <StyledHero />

      <Box sx={{ px: { xs: 3, md: 6 }, py: { xs: 8, md: 12 }, maxWidth: 1200, mx: "auto" }}>
        <SectionHeader
          title={"We build, buy, and invest in startups that would benefit from connections to Australia\\u2019s leading bank, and could improve the lives of its 15 million customers."}
          variant="light"
        />
      </Box>

      <Box sx={{ px: { xs: 3, md: 6 }, py: { xs: 6, md: 10 }, maxWidth: 1200, mx: "auto" }}>
        <SectionHeader
          title={"We\\u2019re made to scale. To move and grow, learn and thrive."}
          subtitle={"We\\u2019re human. Real people, getting stuck in and doing the work. We come together as a team to drive and deliver new ideas, capability, and innovations that\\u2019ll help shape the bank of the future."}
          variant="light"
        />
        <Box sx={{ mt: 4 }}>
          <Button variant="outline">Working at x15</Button>
        </Box>
      </Box>

      <MuiCardSection />

      <Box sx={{ px: { xs: 3, md: 6 }, py: { xs: 8, md: 12 }, maxWidth: 1200, mx: "auto" }}>
        <SectionHeader
          title="Our ventures"
          subtitle={"We\\u2019re helping CommBank reimagine what it means to be a bank, with products and services that improve people\\u2019s lives in the moments that matter."}
          variant="light"
        />
        <Typography sx={{ fontSize: "0.875rem", fontWeight: 600, color: "#1A1D23", mt: 6, mb: 3, textTransform: "uppercase", letterSpacing: "0.03em" }}>
          Built and owned
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 3 }}>
          {VENTURES.map((v) => (
            <VentureCard key={v.name} {...v} />
          ))}
        </Box>
      </Box>

      <Box sx={{ px: { xs: 3, md: 6 }, maxWidth: 1200, mx: "auto" }}>
        <QuoteBlock
          quote={"There\\u2019s a blurring of industry lines happening everywhere. To meet customer needs and expectations, we have to look more broadly than just traditional products and services and really enrich the proposition in aggregate."}
          author="Stuart Munro"
          role="Group Executive Group Strategy, CommBank"
          variant="light"
        />
      </Box>

      <Box sx={{ px: { xs: 3, md: 6 }, py: { xs: 8, md: 12 }, maxWidth: 1200, mx: "auto" }}>
        <SectionHeader
          eyebrow="values"
          title="Care, Courage and Commitment"
          subtitle="These are our values. They guide how we work, collaborate, and show up for each other every day."
          variant="light"
        />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2, mt: 4 }}>
          <ValueCard title="Tune in" description={"We\\u2019re aware, attuned, and always act to help others. We show up for our customers and our people."} variant="light" />
          <ValueCard title="Lead with grit and grace" description={"We\\u2019re galvanisers, peacemakers, thinkers and doers. We never pass a problem without looking for a solution."} variant="light" />
          <ValueCard title="Find a way" description={"We\\u2019re tenacious, resilient and do what\\u2019s right \\u2013 even if it\\u2019s hard."} variant="light" />
        </Box>
      </Box>

      <CTABanner
        title="See all the roles available at x15ventures"
        subtitle="Ready to scale your career with us? See the range of current opportunities."
        buttonLabel="View open roles"
        variant="dark"
      />

      <StyledFooter />
    </>
  );
}
`;

// Write all files
const files = [
  ['/vercel/share/v0-next-shadcn/src/app/page.tsx', page],
  ['/vercel/share/v0-project/src/app/page.tsx', page],
  ['/vercel/share/v0-next-shadcn/src/components/HomeBody.tsx', homeBody],
  ['/vercel/share/v0-project/src/components/HomeBody.tsx', homeBody],
];

for (const [path, content] of files) {
  writeFileSync(path, content);
  console.log('Written:', path);
}
