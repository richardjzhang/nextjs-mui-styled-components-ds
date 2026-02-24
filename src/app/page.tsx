"use client";

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
} from "@/components/design-system";

const NAV_ITEMS = [
  { label: "Design System", href: "/" },
];

const TABLE_DATA = [
  { id: 1, name: "Home-in", category: "Home", year: "2020", status: "Active" },
  { id: 2, name: "Credit Savvy", category: "Everyday", year: "2020", status: "Active" },
  { id: 3, name: "Doshii", category: "Business", year: "2021", status: "Active" },
  { id: 4, name: "Unloan", category: "Home", year: "2022", status: "Joined CBA" },
  { id: 5, name: "Kit", category: "Everyday", year: "2022", status: "Active" },
  { id: 6, name: "Truyu", category: "Everyday", year: "2024", status: "In Pilot" },
];

const BRAND_COLORS = [
  { name: "Hot Pink (Primary)", hex: "#FF0080", dark: false },
  { name: "Dark Charcoal", hex: "#2B3039", dark: true },
  { name: "Slate Blue", hex: "#7B8FA1", dark: true },
  { name: "Light Gray", hex: "#F0F2F5", dark: false },
  { name: "Near Black", hex: "#1A1D23", dark: true },
  { name: "White", hex: "#FFFFFF", dark: false },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      variant="h4"
      sx={{
        fontWeight: 700,
        mt: 8,
        mb: 1,
        color: "#1A1D23",
        letterSpacing: "-0.02em",
      }}
    >
      {children}
    </Typography>
  );
}

function SectionCaption({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      variant="body1"
      sx={{
        mb: 3,
        color: "#5C6370",
        maxWidth: 640,
        lineHeight: 1.6,
      }}
    >
      {children}
    </Typography>
  );
}

function ComponentLabel({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      variant="overline"
      sx={{
        display: "block",
        mb: 1,
        color: "#7B8FA1",
        fontWeight: 600,
        letterSpacing: "0.1em",
      }}
    >
      {children}
    </Typography>
  );
}

function ShowcaseBox({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Box
      sx={{
        p: 4,
        borderRadius: "4px",
        bgcolor: dark ? "#2B3039" : "#FFFFFF",
        border: dark ? "none" : "1px solid #D4D8DE",
      }}
    >
      {children}
    </Box>
  );
}

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Navbar title="x15ventures" items={NAV_ITEMS} />

      <Box
        sx={{
          bgcolor: "#2B3039",
          px: { xs: 3, md: 6 },
          py: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{ color: "#7B8FA1", fontWeight: 600, letterSpacing: "0.1em" }}
          >
            Documentation
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "#FFFFFF",
              fontWeight: 700,
              mt: 1,
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Design System
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#7B8FA1",
              maxWidth: 600,
              lineHeight: 1.7,
              fontSize: "1.125rem",
            }}
          >
            A comprehensive component library built with Styled Components for
            custom visual primitives and Material UI for complex interactive patterns.
            Themed to match the x15ventures brand.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* ─── Color Palette ─── */}
        <SectionTitle>Color Palette</SectionTitle>
        <SectionCaption>
          The x15ventures brand uses a minimal, high-contrast palette anchored by hot
          pink for actions, dark charcoal for immersive sections, and light neutrals
          for content areas.
        </SectionCaption>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(6, 1fr)",
            },
            gap: 2,
          }}
        >
          {BRAND_COLORS.map((color) => (
            <Box key={color.hex}>
              <Box
                sx={{
                  bgcolor: color.hex,
                  height: 80,
                  borderRadius: "4px",
                  border: color.hex === "#FFFFFF" ? "1px solid #D4D8DE" : "none",
                  display: "flex",
                  alignItems: "flex-end",
                  p: 1.5,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: color.dark ? "#FFFFFF" : "#1A1D23",
                    fontFamily: "monospace",
                    fontWeight: 600,
                  }}
                >
                  {color.hex}
                </Typography>
              </Box>
              <Typography
                variant="caption"
                sx={{ mt: 0.5, display: "block", color: "#5C6370", fontWeight: 500 }}
              >
                {color.name}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* ─── Typography ─── */}
        <SectionTitle>Typography</SectionTitle>
        <SectionCaption>
          Inter is the primary typeface across all weights. Large display headings
          use tight letter spacing for impact, while body text maintains generous
          line height for readability.
        </SectionCaption>
        <ShowcaseBox>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Box>
              <ComponentLabel>Display / Hero</ComponentLabel>
              <Typography
                sx={{
                  fontSize: "3.5rem",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "#1A1D23",
                }}
              >
                {"We're made to scale."}
              </Typography>
            </Box>
            <Box>
              <ComponentLabel>Heading 1</ComponentLabel>
              <Typography variant="h3" sx={{ fontWeight: 700, color: "#1A1D23" }}>
                Our ventures
              </Typography>
            </Box>
            <Box>
              <ComponentLabel>Heading 2</ComponentLabel>
              <Typography variant="h5" sx={{ fontWeight: 600, color: "#1A1D23" }}>
                Built and owned ventures
              </Typography>
            </Box>
            <Box>
              <ComponentLabel>Body</ComponentLabel>
              <Typography
                variant="body1"
                sx={{ color: "#5C6370", lineHeight: 1.7, maxWidth: 600 }}
              >
                We sit in the unique space between corporate and startup. Close
                enough to benefit from the bank{"'"}s strategy, scale and stability,
                but separate enough that we have the autonomy to try new things.
              </Typography>
            </Box>
            <Box>
              <ComponentLabel>Caption / Overline</ComponentLabel>
              <Typography
                variant="overline"
                sx={{ color: "#7B8FA1", fontWeight: 600, letterSpacing: "0.1em" }}
              >
                About Us
              </Typography>
            </Box>
          </Box>
        </ShowcaseBox>

        <Divider label="Styled Components" spacing="lg" />

        {/* ─── Buttons ─── */}
        <SectionTitle>Button</SectionTitle>
        <SectionCaption>
          Custom styled buttons with variant and size options. The primary variant
          uses the signature hot pink, while outline and ghost variants stay neutral
          for secondary actions.
        </SectionCaption>

        <ComponentLabel>Variants</ComponentLabel>
        <ShowcaseBox>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, alignItems: "center" }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </Box>
        </ShowcaseBox>

        <Box sx={{ mt: 3 }}>
          <ComponentLabel>Sizes</ComponentLabel>
          <ShowcaseBox>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, alignItems: "center" }}>
              <Button variant="primary" size="sm">
                Small
              </Button>
              <Button variant="primary" size="md">
                Medium
              </Button>
              <Button variant="primary" size="lg">
                Large
              </Button>
            </Box>
          </ShowcaseBox>
        </Box>

        <Box sx={{ mt: 3 }}>
          <ComponentLabel>On Dark Background</ComponentLabel>
          <ShowcaseBox dark>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, alignItems: "center" }}>
              <Button variant="primary">Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </Box>
          </ShowcaseBox>
        </Box>

        {/* ─── Avatar ─── */}
        <SectionTitle>Avatar</SectionTitle>
        <SectionCaption>
          Displays user images or auto-generated initials with deterministic color
          assignment from the brand palette.
        </SectionCaption>
        <ShowcaseBox>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Avatar name="Alice Chen" size="sm" />
            <Avatar name="Bob Rivera" size="md" />
            <Avatar name="Carol Patel" size="lg" />
            <Avatar
              src="https://i.pravatar.cc/150?img=12"
              alt="Demo user"
              name="Demo"
              size="lg"
            />
          </Box>
        </ShowcaseBox>

        {/* ─── Badge ─── */}
        <SectionTitle>Badge</SectionTitle>
        <SectionCaption>
          Color-coded status indicators with optional dot prefix. Used throughout
          portfolio cards and data tables.
        </SectionCaption>
        <ShowcaseBox>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, alignItems: "center" }}>
            <Badge>Default</Badge>
            <Badge variant="success" dot>
              Active
            </Badge>
            <Badge variant="warning" dot>
              In Pilot
            </Badge>
            <Badge variant="error" dot>
              Deprecated
            </Badge>
            <Badge variant="info">New</Badge>
          </Box>
        </ShowcaseBox>

        {/* ─── Stat Card ─── */}
        <SectionTitle>Stat Card</SectionTitle>
        <SectionCaption>
          Dashboard metric cards with trend indicators for key performance data.
        </SectionCaption>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 2,
          }}
        >
          <StatCard
            label="Ventures"
            value="8"
            change="Built & owned"
            trend="up"
          />
          <StatCard
            label="Investments"
            value="12+"
            change="Early & Xccelerate"
            trend="up"
          />
          <StatCard
            label="Customers Reached"
            value="15M"
            change="CommBank customers"
            trend="neutral"
          />
          <StatCard
            label="Founded"
            value="2020"
            change="Powered by CommBank"
            trend="neutral"
          />
        </Box>

        {/* ─── Skeleton ─── */}
        <SectionTitle>Skeleton</SectionTitle>
        <SectionCaption>
          Animated loading placeholders in text, circular, and rectangular variants
          for content loading states.
        </SectionCaption>
        <ShowcaseBox>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Skeleton variant="circular" width={48} height={48} />
              <Box sx={{ mt: 1.5 }}>
                <Skeleton lines={3} />
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Skeleton variant="rectangular" height={120} />
            </Box>
          </Box>
        </ShowcaseBox>

        {/* ─── Divider ─── */}
        <SectionTitle>Divider</SectionTitle>
        <SectionCaption>
          Section separators with optional inline label for organizing content.
        </SectionCaption>
        <ShowcaseBox>
          <Divider />
          <Box sx={{ my: 2 }}>
            <Divider label="Or continue with" />
          </Box>
          <Divider label="Section" spacing="lg" />
        </ShowcaseBox>

        <Divider label="MUI Components" spacing="lg" />

        {/* ─── Alert ─── */}
        <SectionTitle>Alert</SectionTitle>
        <SectionCaption>
          Notification banners with severity levels, dismiss capability, and variant
          styles for inline messaging.
        </SectionCaption>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Alert severity="success" title="Venture launched">
            Home-in has been successfully deployed to production.
          </Alert>
          <Alert severity="info">
            x15ventures builds, buys, and invests in startups.
          </Alert>
          <Alert severity="warning" variant="outlined" dismissible>
            This venture is currently in pilot phase.
          </Alert>
          <Alert severity="error" variant="filled">
            Integration failed. Please check your configuration.
          </Alert>
        </Box>

        {/* ─── Confirm Dialog ─── */}
        <SectionTitle>Confirm Dialog</SectionTitle>
        <SectionCaption>
          Modal confirmation with focus trapping, backdrop, and customizable actions
          for destructive or important operations.
        </SectionCaption>
        <Button variant="outline" onClick={() => setDialogOpen(true)}>
          Open Confirm Dialog
        </Button>
        <ConfirmDialog
          open={dialogOpen}
          title="Archive venture?"
          description="This will move the venture to the archive. Team members will no longer have access to the active dashboard."
          confirmLabel="Archive"
          confirmColor="error"
          onConfirm={() => setDialogOpen(false)}
          onCancel={() => setDialogOpen(false)}
        />

        {/* ─── Text Input ─── */}
        <SectionTitle>Text Input</SectionTitle>
        <SectionCaption>
          Form fields with labels, placeholders, helper text, and error states
          for data capture across venture applications.
        </SectionCaption>
        <ShowcaseBox>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 2,
            }}
          >
            <TextInput label="Venture Name" placeholder="Enter venture name" />
            <TextInput
              label="Contact Email"
              type="email"
              placeholder="team@venture.com"
              helperText="Primary contact for the venture team."
            />
            <TextInput
              label="API Key"
              type="password"
              error
              helperText="Invalid API key format."
            />
            <TextInput label="Status" disabled value="Active" />
          </Box>
        </ShowcaseBox>

        {/* ─── Data Table ─── */}
        <SectionTitle>Data Table</SectionTitle>
        <SectionCaption>
          Structured data display with typed columns, sortable headers, and custom
          cell renderers for the venture portfolio.
        </SectionCaption>
        <DataTable
          columns={[
            { key: "id", label: "#", align: "center" },
            { key: "name", label: "Venture" },
            { key: "category", label: "Category" },
            { key: "year", label: "Year" },
            {
              key: "status",
              label: "Status",
              render: (value) => (
                <Badge
                  variant={
                    value === "Active"
                      ? "success"
                      : value === "In Pilot"
                        ? "warning"
                        : "info"
                  }
                  dot
                >
                  {String(value)}
                </Badge>
              ),
            },
          ]}
          rows={TABLE_DATA}
          rowKey="id"
        />

        {/* ─── Tab Panel ─── */}
        <SectionTitle>Tab Panel</SectionTitle>
        <SectionCaption>
          Keyboard-accessible tabbed interface with lazy rendering and ARIA
          attributes for organized content sections.
        </SectionCaption>
        <ShowcaseBox>
          <TabPanel
            tabs={[
              {
                label: "Overview",
                content: (
                  <Typography sx={{ color: "#5C6370", lineHeight: 1.7 }}>
                    x15ventures is a venture scaler powered by CommBank. We build,
                    buy, and invest in startups that would benefit from connections
                    to Australia{"'"}s leading bank. Tab panels handle keyboard navigation,
                    focus management, and ARIA attributes automatically.
                  </Typography>
                ),
              },
              {
                label: "Portfolio Metrics",
                content: (
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                      gap: 2,
                    }}
                  >
                    <StatCard
                      label="Built Ventures"
                      value="8"
                      change="+2 this year"
                      trend="up"
                    />
                    <StatCard
                      label="Investments"
                      value="12"
                      change="+5 this year"
                      trend="up"
                    />
                    <StatCard
                      label="Team Size"
                      value="150+"
                      change="Growing"
                      trend="up"
                    />
                  </Box>
                ),
              },
              {
                label: "Settings",
                content: (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      maxWidth: 400,
                    }}
                  >
                    <TextInput label="Display Name" defaultValue="x15ventures" />
                    <TextInput
                      label="Description"
                      multiline
                      rows={3}
                      placeholder="Enter venture description..."
                    />
                    <Button variant="primary">Save Changes</Button>
                  </Box>
                ),
              },
            ]}
          />
        </ShowcaseBox>

        {/* ─── Spacing & Layout ─── */}
        <SectionTitle>Spacing Scale</SectionTitle>
        <SectionCaption>
          Consistent spacing tokens used throughout the design system for
          padding, margins, and gaps.
        </SectionCaption>
        <ShowcaseBox>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {[
              { label: "xs", value: "4px" },
              { label: "sm", value: "8px" },
              { label: "md", value: "16px" },
              { label: "lg", value: "24px" },
              { label: "xl", value: "32px" },
              { label: "xxl", value: "48px" },
            ].map((space) => (
              <Box
                key={space.label}
                sx={{ display: "flex", alignItems: "center", gap: 2 }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    width: 40,
                    fontFamily: "monospace",
                    color: "#5C6370",
                    fontWeight: 600,
                  }}
                >
                  {space.label}
                </Typography>
                <Box
                  sx={{
                    width: space.value,
                    height: 24,
                    bgcolor: "#FF0080",
                    borderRadius: "2px",
                    opacity: 0.8,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{ fontFamily: "monospace", color: "#7B8FA1" }}
                >
                  {space.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </ShowcaseBox>

        <Box sx={{ py: 6 }} />
      </Container>
    </>
  );
}
