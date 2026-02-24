import { writeFileSync, mkdirSync } from 'fs';

const content = `"use client";

import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Button,
  Avatar,
  Badge,
  StatCard,
  Skeleton,
  Divider,
  Alert,
  Navbar,
  ConfirmDialog,
  TextInput,
  DataTable,
  TabPanel,
  SectionHeader,
  Chip,
  VentureCard,
  QuoteBlock,
  IconCard,
  CTABanner,
  ValueCard,
} from "@/components/design-system";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Design System", href: "/design-system" },
];

const TABLE_DATA = [
  { id: 1, name: "Alice Chen", role: "Engineer", status: "Active" },
  { id: 2, name: "Bob Rivera", role: "Designer", status: "Away" },
  { id: 3, name: "Carol Patel", role: "PM", status: "Active" },
  { id: 4, name: "Dan Kim", role: "Engineer", status: "Offline" },
];

const BRAND_COLORS = [
  { name: "Primary (Hot Pink)", value: "#FF0080", text: "#FFFFFF" },
  { name: "Primary Dark", value: "#D9006C", text: "#FFFFFF" },
  { name: "Dark Charcoal", value: "#2B3039", text: "#FFFFFF" },
  { name: "Dark Light", value: "#343A44", text: "#FFFFFF" },
  { name: "Slate Blue", value: "#7B8FA1", text: "#FFFFFF" },
  { name: "Background", value: "#F0F2F5", text: "#1A1D23" },
  { name: "Surface", value: "#FFFFFF", text: "#1A1D23" },
  { name: "Text Primary", value: "#1A1D23", text: "#FFFFFF" },
  { name: "Text Secondary", value: "#5C6370", text: "#FFFFFF" },
  { name: "Border", value: "#D4D8DE", text: "#1A1D23" },
];

function DSTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <Typography id={id} variant="h5" sx={{ fontWeight: 700, mt: 6, mb: 1 }}>
      {children}
    </Typography>
  );
}

function DSCaption({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant="body2" sx={{ color: "#5C6370", mb: 3, maxWidth: 640 }}>
      {children}
    </Typography>
  );
}

function CodeSnippet({ children }: { children: string }) {
  return (
    <Box
      component="pre"
      sx={{
        bgcolor: "#2B3039",
        color: "#F0F2F5",
        p: 2.5,
        borderRadius: 1,
        fontSize: "0.8rem",
        lineHeight: 1.7,
        overflowX: "auto",
        my: 2,
        fontFamily: '"SF Mono", "Fira Code", monospace',
      }}
    >
      <code>{children}</code>
    </Box>
  );
}

function ComponentRow({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, alignItems: "center" }}>
      {children}
    </Box>
  );
}

export default function DesignSystemPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeChip, setActiveChip] = useState(0);

  return (
    <>
      <Navbar title="x15ventures" items={NAV_ITEMS} />

      <Box sx={{ bgcolor: "#2B3039", px: { xs: 3, md: 6 }, py: { xs: 8, md: 12 }, position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "relative", zIndex: 1, maxWidth: 800 }}>
          <Typography sx={{ color: "#7B8FA1", fontSize: "0.875rem", fontWeight: 500, mb: 1.5, textTransform: "lowercase" }}>
            design system
          </Typography>
          <Typography variant="h2" sx={{ color: "#FFFFFF", fontWeight: 700, lineHeight: 1.1, mb: 2, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            x15ventures Component Library
          </Typography>
          <Typography sx={{ color: "#7B8FA1", fontSize: "1.125rem", lineHeight: 1.6, maxWidth: 600 }}>
            {"A comprehensive design system built with Styled Components for custom visual primitives and Material UI for complex interactive patterns. Mirroring the x15ventures brand identity."}
          </Typography>
        </Box>
        <Box sx={{ position: "absolute", bottom: -40, left: 0, right: 0, fontSize: "12rem", fontWeight: 700, color: "#343A44", lineHeight: 1, whiteSpace: "nowrap", pointerEvents: "none", userSelect: "none" }}>
          x15ventures
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Divider label="Brand Foundations" spacing="lg" />

        <DSTitle id="colors">Color Palette</DSTitle>
        <DSCaption>{"The x15ventures palette centres on a dark charcoal (#2B3039) background with hot-pink (#FF0080) accents, slate-blue muted text, and clean white surfaces."}</DSCaption>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(5, 1fr)" }, gap: 1.5 }}>
          {BRAND_COLORS.map((c) => (
            <Box key={c.value} sx={{ borderRadius: 1, overflow: "hidden", border: "1px solid #D4D8DE" }}>
              <Box sx={{ bgcolor: c.value, height: 72, display: "flex", alignItems: "flex-end", p: 1.5 }}>
                <Typography sx={{ fontSize: "0.7rem", fontFamily: "monospace", color: c.text, fontWeight: 600 }}>{c.value}</Typography>
              </Box>
              <Box sx={{ p: 1.5, bgcolor: "#FFFFFF" }}>
                <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, color: "#1A1D23" }}>{c.name}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <DSTitle id="typography">Typography</DSTitle>
        <DSCaption>{"x15ventures uses Inter as its primary font family, with bold weights for headlines and medium weights for body copy."}</DSCaption>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 4, bgcolor: "#FFFFFF", border: "1px solid #D4D8DE", borderRadius: 1 }}>
          <Typography sx={{ fontSize: "3.5rem", fontWeight: 700, lineHeight: 1.1, color: "#1A1D23" }}>{"Hero 3.5rem / 700"}</Typography>
          <Typography sx={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1.2, color: "#1A1D23" }}>{"Display 2rem / 700"}</Typography>
          <Typography sx={{ fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.3, color: "#1A1D23" }}>{"Heading 1.5rem / 700"}</Typography>
          <Typography sx={{ fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.4, color: "#1A1D23" }}>{"Subheading 1.125rem / 600"}</Typography>
          <Typography sx={{ fontSize: "1rem", fontWeight: 400, lineHeight: 1.6, color: "#5C6370" }}>{"Body 1rem / 400 \\u2013 We build, buy, and invest in startups."}</Typography>
          <Typography sx={{ fontSize: "0.75rem", fontWeight: 500, lineHeight: 1.5, color: "#7B8FA1", textTransform: "uppercase", letterSpacing: "0.05em" }}>{"Overline 0.75rem / 500"}</Typography>
        </Box>

        <Divider label="Styled Components" spacing="lg" />

        <DSTitle id="button">Button</DSTitle>
        <DSCaption>{"Primary action buttons use the hot-pink brand colour. Secondary, outline, and ghost variants follow the dark charcoal palette."}</DSCaption>
        <ComponentRow>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </ComponentRow>
        <Typography sx={{ fontSize: "0.8rem", color: "#5C6370", mt: 2, mb: 1, fontWeight: 600 }}>Sizes</Typography>
        <ComponentRow>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </ComponentRow>
        <Typography sx={{ fontSize: "0.8rem", color: "#5C6370", mt: 2, mb: 1, fontWeight: 600 }}>States</Typography>
        <ComponentRow>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="outline" disabled>Disabled Outline</Button>
        </ComponentRow>
        <CodeSnippet>{'<Button variant="primary" size="lg">Get Started</Button>'}</CodeSnippet>

        <DSTitle id="avatar">Avatar</DSTitle>
        <DSCaption>{"Displays user images or auto-generated initials with deterministic colour assignment from the brand palette."}</DSCaption>
        <ComponentRow>
          <Avatar name="Alice Chen" size="sm" />
          <Avatar name="Bob Rivera" size="md" />
          <Avatar name="Carol Patel" size="lg" />
          <Avatar src="https://i.pravatar.cc/150?img=12" alt="Demo user" name="Demo" size="lg" />
        </ComponentRow>

        <DSTitle id="badge">Badge</DSTitle>
        <DSCaption>{"Colour-coded status indicators with optional dot prefix."}</DSCaption>
        <ComponentRow>
          <Badge>Default</Badge>
          <Badge variant="success" dot>Active</Badge>
          <Badge variant="warning" dot>Pending</Badge>
          <Badge variant="error" dot>Failed</Badge>
          <Badge variant="info">New</Badge>
        </ComponentRow>

        <DSTitle id="chip">Chip</DSTitle>
        <DSCaption>{"Filter/category chips used for venture categories (Home, Business, Everyday)."}</DSCaption>
        <Typography sx={{ fontSize: "0.8rem", color: "#5C6370", mb: 1, fontWeight: 600 }}>{"Interactive (click to toggle)"}</Typography>
        <ComponentRow>
          {["All", "Home", "Business", "Everyday", "Investing"].map((label, i) => (
            <Chip key={label} variant="outlined" active={activeChip === i} onClick={() => setActiveChip(i)}>
              {label}
            </Chip>
          ))}
        </ComponentRow>
        <Typography sx={{ fontSize: "0.8rem", color: "#5C6370", mt: 2, mb: 1, fontWeight: 600 }}>Variants</Typography>
        <ComponentRow>
          <Chip variant="default">Default</Chip>
          <Chip variant="default" active>Default Active</Chip>
          <Chip variant="outlined">Outlined</Chip>
          <Chip variant="outlined" active>Outlined Active</Chip>
          <Chip variant="filled">Filled</Chip>
          <Chip variant="filled" active>Filled Active</Chip>
        </ComponentRow>

        <DSTitle id="stat-card">Stat Card</DSTitle>
        <DSCaption>{"Dashboard metric cards with trend indicators."}</DSCaption>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }, gap: 2 }}>
          <StatCard label="Ventures" value="12" change="+2 this year" trend="up" />
          <StatCard label="Team Size" value="150+" change="+23% YoY" trend="up" />
          <StatCard label="Customers" value="15M" change="CommBank users" trend="neutral" />
          <StatCard label="Founded" value="2020" change="4 years strong" trend="neutral" />
        </Box>

        <DSTitle id="section-header">Section Header</DSTitle>
        <DSCaption>{"The primary heading pattern used across all x15 page sections."}</DSCaption>
        <Box sx={{ p: 4, bgcolor: "#FFFFFF", border: "1px solid #D4D8DE", borderRadius: 1, mb: 2 }}>
          <SectionHeader eyebrow="portfolio" title="Our ventures" subtitle={"We\\u2019re helping CommBank reimagine what it means to be a bank."} variant="light" />
        </Box>
        <Box sx={{ p: 4, bgcolor: "#2B3039", borderRadius: 1 }}>
          <SectionHeader eyebrow="about" title={"We\\u2019re made to scale."} subtitle="To move and grow, learn and thrive." variant="dark" />
        </Box>

        <DSTitle id="quote-block">Quote Block</DSTitle>
        <DSCaption>{"Testimonial / executive quote component as seen on the x15 portfolio page."}</DSCaption>
        <QuoteBlock quote={"There\\u2019s a blurring of industry lines happening everywhere. To meet customer needs and expectations, we have to look more broadly."} author="Stuart Munro" role="Group Executive Group Strategy, CommBank" variant="light" />
        <Box sx={{ mt: 2 }}>
          <QuoteBlock quote={"We operate in a space between corporate and startup, where people are able to explore, innovate and create without fear."} author="Toby Norton-Smith" role="Managing Director, x15ventures" variant="dark" />
        </Box>

        <DSTitle id="venture-card">Venture Card</DSTitle>
        <DSCaption>{"The signature card pattern from the x15 portfolio page."}</DSCaption>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 3 }}>
          <VentureCard name="Home-in" year="2020" category="Home" description="Home-in simplifies the complex process of buying a home." brandColor="#1A6B54" />
          <VentureCard name="Kit" year="2022" category="Everyday" description="Kit is a pocket money app helping improve financial capability." brandColor="#2DB87D" />
          <VentureCard name="Doshii" year="2021" category="Business" description={"Doshii gets hospitality apps talking to a venue\\u2019s POS platform."} brandColor="#3B4FBF" />
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" }, gap: 3, mt: 3 }}>
          <VentureCard name="Unloan" year="2022" category="Home" description="A new kind of home loan with one great rate." brandColor="#FF6B35" />
          <VentureCard name="Truyu" year="2024" category="Everyday" description="Digital identity protection tool." brandColor="#2B3039" />
        </Box>

        <DSTitle id="icon-card">Icon Card</DSTitle>
        <DSCaption>{"Portfolio category cards matching the portfolio section."}</DSCaption>
        <Box sx={{ bgcolor: "#2B3039", p: { xs: 3, md: 6 }, borderRadius: 1 }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 4 }}>
            <IconCard icon={<svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="8" y="20" width="24" height="24" stroke="#7B8FA1" strokeWidth="2" fill="none" /><rect x="20" y="8" width="16" height="16" stroke="#7B8FA1" strokeWidth="2" fill="none" /></svg>} title={"Built & owned ventures"} description="Wholly-owned startups we have either built and launched, or acquired." variant="dark" />
            <IconCard icon={<svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="8" y="8" width="20" height="20" stroke="#7B8FA1" strokeWidth="2" fill="none" /><rect x="24" y="24" width="20" height="20" stroke="#7B8FA1" strokeWidth="2" fill="none" /></svg>} title="Early-stage investments" description="Pre-Series B startups with a clear benefit to CommBank." variant="dark" />
            <IconCard icon={<svg width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M32 8L32 56M8 32L56 32M15 15L49 49M49 15L15 49" stroke="#7B8FA1" strokeWidth="2" /></svg>} title="Xccelerate investments" description="Pre-Series A startups with MVP." variant="dark" />
          </Box>
        </Box>

        <DSTitle id="value-card">Value Card</DSTitle>
        <DSCaption>{"Used for the team values section."}</DSCaption>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2 }}>
          <ValueCard title="Tune in" description={"We\\u2019re aware, attuned, and always act to help others."} variant="light" />
          <ValueCard title="Lead with grit" description={"We\\u2019re galvanisers, peacemakers, thinkers and doers."} variant="light" />
          <ValueCard title="Find a way" description={"We\\u2019re tenacious, resilient and do what\\u2019s right."} variant="light" />
        </Box>

        <DSTitle id="cta-banner">CTA Banner</DSTitle>
        <DSCaption>{"Full-width call-to-action banners in primary and dark variants."}</DSCaption>
        <CTABanner title="See all the roles available at x15ventures" subtitle="Ready to scale your career with us?" buttonLabel="View open roles" variant="dark" />
        <Box sx={{ mt: 2 }}>
          <CTABanner title="Working at x15" subtitle="Discover how you can scale your impact." buttonLabel="Learn more" variant="primary" />
        </Box>

        <DSTitle id="skeleton">Skeleton</DSTitle>
        <DSCaption>{"Animated loading placeholders."}</DSCaption>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Box sx={{ flex: 1 }}>
            <Skeleton variant="circular" width={48} height={48} />
            <Box sx={{ mt: 1.5 }}><Skeleton lines={3} /></Box>
          </Box>
          <Box sx={{ flex: 1 }}><Skeleton variant="rectangular" height={120} /></Box>
        </Box>

        <DSTitle id="divider">Divider</DSTitle>
        <DSCaption>{"Section separators with optional inline label."}</DSCaption>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Divider />
          <Divider label="Or continue with" />
          <Divider label="Section" spacing="lg" />
        </Box>

        <Divider label="MUI Components" spacing="lg" />

        <DSTitle id="alert">Alert</DSTitle>
        <DSCaption>{"Notification banners with severity levels."}</DSCaption>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Alert severity="success" title="Success">{"Operation completed."}</Alert>
          <Alert severity="info">{"Informational message."}</Alert>
          <Alert severity="warning" variant="outlined" dismissible>{"Dismissible warning."}</Alert>
          <Alert severity="error" variant="filled">{"Something went wrong."}</Alert>
        </Box>

        <DSTitle id="confirm-dialog">Confirm Dialog</DSTitle>
        <DSCaption>{"Modal confirmation with focus trapping."}</DSCaption>
        <Button variant="outline" onClick={() => setDialogOpen(true)}>Open Confirm Dialog</Button>
        <ConfirmDialog open={dialogOpen} title="Delete item?" description="This action cannot be undone." confirmLabel="Delete" confirmColor="error" onConfirm={() => setDialogOpen(false)} onCancel={() => setDialogOpen(false)} />

        <DSTitle id="text-input">Text Input</DSTitle>
        <DSCaption>{"Form fields with labels, placeholders, and error states."}</DSCaption>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
          <TextInput label="Name" placeholder="Enter your name" />
          <TextInput label="Email" type="email" placeholder="you@example.com" helperText={"We will never share your email."} />
          <TextInput label="Password" type="password" error helperText="Password must be at least 8 characters." />
          <TextInput label="Disabled" disabled value="Cannot edit" />
        </Box>

        <DSTitle id="data-table">Data Table</DSTitle>
        <DSCaption>{"Structured data display with typed columns."}</DSCaption>
        <DataTable
          columns={[
            { key: "id", label: "ID", align: "center" },
            { key: "name", label: "Name" },
            { key: "role", label: "Role" },
            { key: "status", label: "Status", render: (value) => (<Badge variant={value === "Active" ? "success" : value === "Away" ? "warning" : "default"} dot>{String(value)}</Badge>) },
          ]}
          rows={TABLE_DATA}
          rowKey="id"
        />

        <DSTitle id="tab-panel">Tab Panel</DSTitle>
        <DSCaption>{"Keyboard-accessible tabbed interface."}</DSCaption>
        <TabPanel
          tabs={[
            { label: "Overview", content: <Typography sx={{ color: "#5C6370" }}>{"Tab panels handle keyboard navigation and ARIA attributes automatically."}</Typography> },
            { label: "Metrics", content: (<Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: 2 }}><StatCard label="Views" value="12.4k" change="+8%" trend="up" /><StatCard label="Clicks" value="1,023" change="-3%" trend="down" /><StatCard label="CTR" value="8.2%" change="Stable" trend="neutral" /></Box>) },
            { label: "Settings", content: (<Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400 }}><TextInput label="Display Name" defaultValue="x15ventures" /><TextInput label="Bio" multiline rows={3} placeholder="Tell us about this venture..." /><Button variant="primary">Save Changes</Button></Box>) },
          ]}
        />

        <DSTitle id="navbar">Navbar</DSTitle>
        <DSCaption>{"The x15ventures navigation bar with responsive hamburger menu."}</DSCaption>
        <Box sx={{ border: "1px solid #D4D8DE", borderRadius: 1, overflow: "hidden" }}>
          <Navbar title="x15ventures" items={[{ label: "Home", href: "#" }, { label: "About", href: "#" }, { label: "Portfolio", href: "#" }, { label: "People", href: "#" }, { label: "Jobs", href: "#" }]} />
        </Box>

        <Box sx={{ py: 6 }} />
      </Container>
    </>
  );
}
`;

const targets = [
  '/vercel/share/v0-next-shadcn/src/app/design-system/page.tsx',
  '/vercel/share/v0-project/src/app/design-system/page.tsx',
];

for (const target of targets) {
  try {
    mkdirSync(target.replace('/page.tsx', ''), { recursive: true });
    writeFileSync(target, content);
    console.log('Written:', target);
  } catch (e) {
    console.error('Error writing', target, e.message);
  }
}
