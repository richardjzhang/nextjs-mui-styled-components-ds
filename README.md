# x15ventures Design System

A component library built with **Styled Components 5** and **Material UI 7**, themed to the x15ventures brand. Published as `@richardjzhang/design-system` on GitHub Packages.

**Stack:** Next.js 15 &bull; React 19 &bull; TypeScript 5 &bull; Styled Components 5 &bull; MUI 7

---

## Installation

```bash
npm install @richardjzhang/design-system
```

### Peer dependencies

```bash
npm install react react-dom styled-components @mui/material @mui/icons-material @emotion/react @emotion/styled
```

---

## Setup

Wrap your app in both the **Styled Components** and **MUI** theme providers.

### Styled Components theme provider

```tsx
import { ThemeProvider } from "styled-components";
import scTheme from "@richardjzhang/design-system/theme/scTheme";

<ThemeProvider theme={scTheme}>
  {children}
</ThemeProvider>
```

### MUI theme provider

```tsx
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import muiTheme from "@richardjzhang/design-system/theme/muiTheme";

<MuiThemeProvider theme={muiTheme}>
  {children}
</MuiThemeProvider>
```

### Next.js SSR registries

For Next.js App Router, use the included SSR registries in your root layout to prevent FOUC:

```tsx
import StyledComponentsRegistry from "@richardjzhang/design-system/next";
import MuiRegistry from "@richardjzhang/design-system/next";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <MuiRegistry>{children}</MuiRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
```

---

## Importing components

All components are exported from the package root:

```tsx
import {
  // Styled Components (visual primitives)
  Button, Avatar, Badge, StatCard, Skeleton, Divider,
  SectionHeader, Chip, VentureCard, QuoteBlock, IconCard,
  CTABanner, ValueCard,

  // MUI Components (interactive / accessible)
  Alert, Navbar, ConfirmDialog, TextInput, DataTable, TabPanel,

  // Page-section Components (composed page sections)
  StyledHero, StyledFooter, MissionSection, CorporateSection,
  MuiCardSection, VenturesList, SpaceBetween, WorkAtX15,
} from "@richardjzhang/design-system";
```

---

## Theme tokens

The Styled Components theme (`scTheme`) exposes the following tokens. All styled components consume these automatically via the `ThemeProvider`.

### Colors

| Token | Value | Usage |
|---|---|---|
| `primary` | `#FF0080` | Hot pink, CTAs and links |
| `primaryLight` | `#FF3399` | Hover tint |
| `primaryDark` | `#D9006C` | Active / pressed |
| `secondary` | `#2B3039` | Dark charcoal |
| `secondaryLight` | `#343A44` | Dark card bg |
| `secondaryDark` | `#1A1D23` | Near-black |
| `success` | `#2e7d32` | Success states |
| `warning` | `#ed6c02` | Warning states |
| `error` | `#d32f2f` | Error states |
| `info` | `#7B8FA1` | Slate blue accent |
| `background` | `#F0F2F5` | Page background |
| `surface` | `#FFFFFF` | Card / panel bg |
| `surfaceHover` | `#E8EAEE` | Hover state |
| `border` | `#D4D8DE` | Default border |
| `borderLight` | `#E8EAEE` | Subtle border |
| `text` | `#1A1D23` | Primary text |
| `textSecondary` | `#5C6370` | Secondary text |
| `textDisabled` | `#9DA3AE` | Disabled text |
| `textOnDark` | `#7B8FA1` | Muted text on dark bg |
| `white` | `#FFFFFF` | White |
| `dark` | `#2B3039` | Dark section bg |
| `darkLight` | `#343A44` | Slightly lighter dark |
| `darkLighter` | `#3E444E` | Card/hover on dark |

### Spacing

| Token | Value |
|---|---|
| `xs` | `4px` |
| `sm` | `8px` |
| `md` | `16px` |
| `lg` | `24px` |
| `xl` | `32px` |
| `xxl` | `48px` |

### Font sizes

| Token | Value |
|---|---|
| `xs` | `0.75rem` |
| `sm` | `0.875rem` |
| `md` | `1rem` |
| `lg` | `1.125rem` |
| `xl` | `1.25rem` |
| `xxl` | `1.5rem` |
| `display` | `2rem` |
| `hero` | `3.5rem` |

### Font weights

`normal` (400), `medium` (500), `semibold` (600), `bold` (700)

### Border radii

`borderRadius` (4px), `borderRadiusSm` (2px), `borderRadiusLg` (8px), `borderRadiusFull` (9999px)

### Shadows

`sm`, `md`, `lg`, `xl` -- escalating elevation from subtle to dramatic.

### Transitions

`fast` (150ms), `normal` (250ms), `slow` (350ms) -- all use `ease` easing.

---

## Styled Components (custom visual primitives)

These are built with `styled-components` and automatically consume the `scTheme` via the ThemeProvider.

---

### Button

A themed button with four variants and three sizes.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"primary" \| "secondary" \| "outline" \| "ghost"` | `"primary"` | Visual style |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size preset |
| `fullWidth` | `boolean` | `false` | Stretch to fill container |
| `disabled` | `boolean` | `false` | Disabled state |
| `children` | `ReactNode` | -- | Button label |
| `onClick` | `() => void` | -- | Click handler |

Also accepts all native `<button>` HTML attributes.

#### Usage

```tsx
import { Button } from "@richardjzhang/design-system";

// Primary (default)
<Button>Get started</Button>

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Full width
<Button fullWidth>Submit</Button>

// Disabled
<Button disabled>Unavailable</Button>
```

#### Notes

- The `outline` and `ghost` variants use `currentColor`, so they automatically adapt to light or dark parent backgrounds.
- Focus-visible shows a 2px primary-colored outline ring.

---

### Avatar

Displays a user's image or their initials derived from their name. Colour is deterministically assigned from the name string.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | `string` | -- | Image URL |
| `alt` | `string` | -- | Alt text for the image |
| `name` | `string` | -- | Full name (used for initials and colour) |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size: 32px / 40px / 56px |

#### Usage

```tsx
import { Avatar } from "@richardjzhang/design-system";

// Initials from name
<Avatar name="Toby Norton-Smith" size="lg" />

// With image
<Avatar src="/headshot.jpg" alt="Toby" name="Toby Norton-Smith" />

// Small
<Avatar name="Alex Lee" size="sm" />
```

---

### Badge

Inline status indicator with five colour variants and an optional leading dot.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"default" \| "success" \| "warning" \| "error" \| "info"` | `"default"` | Colour scheme |
| `dot` | `boolean` | `false` | Show a coloured dot before the label |
| `children` | `ReactNode` | -- | Badge label |

#### Usage

```tsx
import { Badge } from "@richardjzhang/design-system";

<Badge variant="success" dot>Active</Badge>
<Badge variant="warning" dot>In Pilot</Badge>
<Badge variant="error" dot>Closed</Badge>
<Badge variant="info">Series A</Badge>
<Badge variant="default">PropTech</Badge>
```

---

### Chip

Filter or label chip with three style variants. Supports an active state and click interaction.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"default" \| "outlined" \| "filled"` | `"outlined"` | Visual style |
| `size` | `"sm" \| "md"` | `"md"` | Size |
| `active` | `boolean` | `false` | Active / selected state |
| `onClick` | `() => void` | -- | Click handler (makes chip interactive) |
| `children` | `ReactNode` | -- | Chip label |

#### Usage

```tsx
import { Chip } from "@richardjzhang/design-system";

// Filter group
<Chip variant="outlined" active>All</Chip>
<Chip variant="outlined">Built & owned</Chip>
<Chip variant="outlined">Early-stage</Chip>

// Filled style
<Chip variant="filled" active>Featured</Chip>

// Clickable
<Chip variant="default" onClick={() => setFilter("fintech")}>
  Fintech
</Chip>
```

---

### StatCard

Metric display card with label, large value, and optional trend indicator.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | -- | Metric label |
| `value` | `string \| number` | -- | Large display value |
| `change` | `string` | -- | Change description text |
| `trend` | `"up" \| "down" \| "neutral"` | `"neutral"` | Arrow direction and colour |

#### Usage

```tsx
import { StatCard } from "@richardjzhang/design-system";

<StatCard
  label="Portfolio companies"
  value="14"
  change="+2 this year"
  trend="up"
/>

<StatCard
  label="Active ventures"
  value={7}
  change="Same as last quarter"
  trend="neutral"
/>
```

---

### ValueCard

Content card with title and description. Supports light and dark variants with a primary-colour hover accent on the border.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | -- | Card heading |
| `description` | `string` | -- | Supporting text |
| `variant` | `"light" \| "dark"` | `"light"` | Background style |

#### Usage

```tsx
import { ValueCard } from "@richardjzhang/design-system";

// Light background
<ValueCard
  title="Move fast"
  description="We ship early, iterate quickly, and make decisions with urgency."
  variant="light"
/>

// Dark background (use inside a dark container)
<ValueCard
  title="Think big"
  description="We tackle hard problems that can change millions of lives."
  variant="dark"
/>
```

---

### IconCard

Feature card with an icon slot, title, and description. Typically used in a grid on dark backgrounds.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `icon` | `ReactNode` | -- | Icon element (SVG or component) |
| `title` | `string` | -- | Feature title |
| `description` | `string` | -- | Feature description |
| `variant` | `"light" \| "dark"` | `"dark"` | Background context |

#### Usage

```tsx
import { IconCard } from "@richardjzhang/design-system";

<IconCard
  icon={<MyIcon />}
  title="Built & owned ventures"
  description="Wholly-owned startups we have built, launched, or acquired."
  variant="dark"
/>
```

---

### VentureCard

Portfolio card with a coloured background, repeating watermark effect, category chip, and info bar. Designed for venture/product showcases.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | `string` | -- | Venture name (also used as watermark text) |
| `year` | `string` | -- | Year founded |
| `category` | `string` | -- | Category label shown in a chip |
| `description` | `string` | -- | Short description |
| `brandColor` | `string` | `"#2B3039"` | Card background colour |

#### Usage

```tsx
import { VentureCard } from "@richardjzhang/design-system";

<VentureCard
  name="Home-in"
  year="2020"
  category="Built & owned"
  description="A platform that simplifies the home-buying journey."
  brandColor="#3B82F6"
/>

<VentureCard
  name="Unloan"
  year="2022"
  category="Built & owned"
  description="A simpler, fairer home loan from CommBank."
  brandColor="#FF0080"
/>
```

---

### QuoteBlock

Blockquote with author attribution. Has a primary-colour left border accent.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `quote` | `string` | -- | Quote text |
| `author` | `string` | -- | Author name |
| `role` | `string` | -- | Author role / title |
| `variant` | `"light" \| "dark"` | `"light"` | Background style |

#### Usage

```tsx
import { QuoteBlock } from "@richardjzhang/design-system";

<QuoteBlock
  quote="We're a venture scaler powered by CommBank."
  author="Toby Norton-Smith"
  role="CEO, x15ventures"
  variant="light"
/>

<QuoteBlock
  quote="The best way to predict the future is to build it."
  author="Paul Cobban"
  role="Chief Entrepreneur, CommBank"
  variant="dark"
/>
```

---

### SectionHeader

Reusable section heading block with optional eyebrow text and subtitle. Supports light and dark backgrounds and left or centre alignment.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `eyebrow` | `string` | -- | Small text above the title |
| `title` | `string` | -- | Main heading (required) |
| `subtitle` | `string` | -- | Supporting description |
| `variant` | `"light" \| "dark"` | `"light"` | Colour mode |
| `align` | `"left" \| "center"` | `"left"` | Text alignment |

#### Usage

```tsx
import { SectionHeader } from "@richardjzhang/design-system";

<SectionHeader
  eyebrow="our mission"
  title="We build, buy, and invest in startups"
  subtitle="Connecting innovative startups to Australia's leading bank."
  variant="light"
/>

// Centered on dark bg
<SectionHeader
  title="Our ventures"
  variant="dark"
  align="center"
/>
```

---

### CTABanner

Full-width call-to-action banner with heading, subtitle, and action button. Two background variants: primary pink or dark charcoal.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | -- | Banner heading |
| `subtitle` | `string` | -- | Supporting text |
| `buttonLabel` | `string` | -- | Button text |
| `buttonHref` | `string` | `"#"` | Button link target |
| `variant` | `"primary" \| "dark"` | `"dark"` | Background style |
| `onButtonClick` | `() => void` | -- | Optional click handler (renders as button instead of link) |

#### Usage

```tsx
import { CTABanner } from "@richardjzhang/design-system";

<CTABanner
  title="Want to work at x15ventures?"
  subtitle="We're always looking for people who want to build things that matter."
  buttonLabel="View open roles"
  variant="dark"
/>

<CTABanner
  title="Partner with us"
  buttonLabel="Get in touch"
  variant="primary"
  onButtonClick={() => openContactForm()}
/>
```

---

### Divider

Horizontal rule with optional centered label text. Three spacing sizes.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | -- | Optional centered text |
| `spacing` | `"sm" \| "md" \| "lg"` | `"md"` | Vertical margin: 8px / 16px / 24px |

#### Usage

```tsx
import { Divider } from "@richardjzhang/design-system";

// Simple line
<Divider />

// With label
<Divider label="Section Break" spacing="lg" />
```

---

### Skeleton

Loading placeholder with shimmer animation. Three shape variants. Supports multi-line text blocks.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"text" \| "circular" \| "rectangular"` | `"text"` | Shape |
| `width` | `string \| number` | `"100%"` | Element width |
| `height` | `string \| number` | auto | Element height |
| `lines` | `number` | -- | Render multiple text lines (last line is 75% width) |

#### Usage

```tsx
import { Skeleton } from "@richardjzhang/design-system";

// Avatar placeholder
<Skeleton variant="circular" width={48} height={48} />

// Text block
<Skeleton variant="text" lines={3} />

// Image/card placeholder
<Skeleton variant="rectangular" height={200} />

// Custom width
<Skeleton variant="text" width="60%" />
```

---

## MUI Components (complex interactive / accessible)

These wrap Material UI components with x15ventures theming. They require the MUI ThemeProvider.

---

### Alert

Themed MUI Alert with severity levels and optional dismiss button.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `severity` | `"info" \| "success" \| "warning" \| "error"` | `"info"` | Alert level |
| `title` | `string` | -- | Bold title above message |
| `children` | `ReactNode` | -- | Alert body content |
| `dismissible` | `boolean` | `false` | Show close button |
| `variant` | `"filled" \| "outlined" \| "standard"` | `"standard"` | MUI variant style |
| `onClose` | `() => void` | -- | Callback when dismissed |
| `action` | `ReactNode` | -- | Custom action element |

#### Usage

```tsx
import { Alert } from "@richardjzhang/design-system";

<Alert severity="info" title="Information">
  x15ventures is CommBank's venture scaling business.
</Alert>

<Alert severity="success" title="Success">
  Your application has been submitted.
</Alert>

<Alert severity="warning" title="Warning" dismissible>
  This venture is currently in pilot phase.
</Alert>

<Alert severity="error" title="Error">
  Unable to process your request.
</Alert>

// Outlined variant
<Alert severity="info" variant="outlined" dismissible>
  Outlined variant with dismiss.
</Alert>
```

---

### TextInput

Themed MUI TextField wrapper with full-width default and rounded corners.

#### Props

Accepts all [MUI TextField props](https://mui.com/material-ui/api/text-field/) plus:

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"outlined" \| "filled" \| "standard"` | `"outlined"` | Input style |
| `label` | `string` | -- | Field label |
| `placeholder` | `string` | -- | Placeholder text |
| `multiline` | `boolean` | `false` | Enable textarea mode |
| `rows` | `number` | -- | Number of rows (when multiline) |
| `error` | `boolean` | `false` | Error state |
| `helperText` | `string` | -- | Helper / error message |
| `disabled` | `boolean` | `false` | Disabled state |

#### Usage

```tsx
import { TextInput } from "@richardjzhang/design-system";

<TextInput label="Venture name" placeholder="e.g. Home-in" />

<TextInput label="Description" multiline rows={3} />

<TextInput label="Year" variant="filled" />

<TextInput label="Email" error helperText="This field is required" />

<TextInput label="Disabled" disabled value="x15ventures" />
```

---

### ConfirmDialog

Modal confirmation dialog built on MUI Dialog. Renders a title, description, and confirm/cancel actions.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | -- | Controls visibility |
| `title` | `string` | -- | Dialog heading |
| `description` | `string` | -- | Body text |
| `confirmLabel` | `string` | `"Confirm"` | Confirm button text |
| `cancelLabel` | `string` | `"Cancel"` | Cancel button text |
| `confirmColor` | `"primary" \| "error" \| "warning"` | `"primary"` | Confirm button colour |
| `onConfirm` | `() => void` | -- | Confirm callback |
| `onCancel` | `() => void` | -- | Cancel / close callback |
| `children` | `ReactNode` | -- | Optional custom body content |

#### Usage

```tsx
import { useState } from "react";
import { Button, ConfirmDialog } from "@richardjzhang/design-system";

function DeleteVenture() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Remove venture
      </Button>
      <ConfirmDialog
        open={open}
        title="Remove venture?"
        description="This will permanently remove the venture from the portfolio."
        confirmLabel="Remove"
        confirmColor="error"
        onConfirm={() => {
          handleDelete();
          setOpen(false);
        }}
        onCancel={() => setOpen(false)}
      />
    </>
  );
}
```

---

### DataTable

Typed data table built on MUI Table. Supports custom cell renderers, column alignment, sticky headers, and max-height scrolling.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `columns` | `Column<T>[]` | -- | Column definitions (see below) |
| `rows` | `T[]` | -- | Row data (must extend `Record<string, unknown>`) |
| `rowKey` | `keyof T & string` | -- | Unique identifier field |
| `stickyHeader` | `boolean` | `false` | Pin header row on scroll |
| `maxHeight` | `number` | -- | Scrollable container height (px) |

**`Column<T>` shape:**

```ts
interface Column<T> {
  key: keyof T & string;    // Field name in row data
  label: string;            // Column header text
  align?: "left" | "center" | "right";
  render?: (value: T[keyof T], row: T) => ReactNode;  // Custom cell renderer
}
```

#### Usage

```tsx
import { DataTable } from "@richardjzhang/design-system";

interface Venture {
  [key: string]: unknown;  // Required index signature
  id: string;
  name: string;
  year: string;
  status: string;
}

const columns = [
  { key: "name" as const, label: "Venture" },
  { key: "year" as const, label: "Year" },
  {
    key: "status" as const,
    label: "Status",
    render: (value: unknown) => (
      <span style={{ color: value === "Active" ? "#2e7d32" : "#ed6c02" }}>
        {String(value)}
      </span>
    ),
  },
];

const rows: Venture[] = [
  { id: "1", name: "Home-in", year: "2020", status: "Active" },
  { id: "2", name: "Unloan", year: "2022", status: "Active" },
  { id: "3", name: "Truyu", year: "2024", status: "In Pilot" },
];

<DataTable columns={columns} rows={rows} rowKey="id" />
```

> **TypeScript note:** Row types must include `[key: string]: unknown` index signature to satisfy the `Record<string, unknown>` constraint.

---

### TabPanel

Tabbed navigation with content panels built on MUI Tabs.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `tabs` | `TabItem[]` | -- | Tab definitions (see below) |
| `defaultIndex` | `number` | `0` | Initially active tab |
| `variant` | `"standard" \| "fullWidth" \| "scrollable"` | `"standard"` | Tab layout mode |

**`TabItem` shape:**

```ts
interface TabItem {
  label: string;           // Tab label
  content: ReactNode;      // Panel content
  disabled?: boolean;      // Grey out tab
}
```

#### Usage

```tsx
import { TabPanel } from "@richardjzhang/design-system";

<TabPanel
  tabs={[
    {
      label: "Overview",
      content: <p>x15ventures is CommBank's venture scaling business.</p>,
    },
    {
      label: "Portfolio",
      content: <VentureList />,
    },
    {
      label: "Stats",
      content: <StatsGrid />,
      disabled: false,
    },
  ]}
  defaultIndex={0}
/>
```

---

### Navbar

Top navigation bar built on MUI AppBar with transparent overlay, responsive hamburger drawer, and dark-themed mobile menu.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | -- | Brand name / logo text |
| `items` | `NavItem[]` | `[]` | Navigation links |
| `elevation` | `number` | `0` | MUI elevation shadow |
| `variant` | `"dark" \| "light"` | `"dark"` | Colour mode |

**`NavItem` shape:**

```ts
interface NavItem {
  label: string;
  href: string;
}
```

#### Usage

```tsx
import { Navbar } from "@richardjzhang/design-system";

<Navbar
  title="x15ventures"
  items={[
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
  ]}
  variant="dark"
/>
```

---

## Page-section Components (composed page sections)

These are higher-level, pre-composed page sections built with Styled Components and MUI. They combine multiple primitives into full-width layout blocks ready to drop into a page. All are `"use client"` components.

---

### StyledHero

Full-height hero section with a dark background, dot-pattern overlay, highlight-style title block, primary CTA button, and large watermark text. Designed as the landing section of a page.

#### Props

None. This is a self-contained section with no configurable props.

#### Usage

```tsx
import { StyledHero } from "@richardjzhang/design-system";

<StyledHero />
```

#### Visual details

- Dark (`#2B3039`) background with a subtle dot-pattern overlay
- Title text uses a white highlight box (`box-decoration-break: clone`) for the text "We're a venture scaler powered by CommBank"
- Primary pink CTA button ("Who are we?") scrolls to `#who-we-are`
- Large watermark text "x15ventures" in a slightly lighter dark shade at the bottom
- Responsive: reduces padding on mobile, disables `min-height: 100vh`

---

### StyledFooter

Dark-themed page footer with three-column navigation, social media links (LinkedIn, Instagram), an acknowledgement of country, and a large "x15ventures" watermark.

#### Props

None. This is a self-contained section with no configurable props.

#### Usage

```tsx
import { StyledFooter } from "@richardjzhang/design-system";

<StyledFooter />
```

#### Visual details

- Dark (`#2B3039`) background
- Three columns of navigation links: Home/About/Portfolio, People/Jobs/Security, Contact/Privacy Policy/Legal Terms
- Right column: social media prompt + LinkedIn and Instagram icon buttons with circular borders
- Acknowledgement of Country text at the bottom (muted, 0.6 opacity)
- Large watermark "x15ventures" text below the main content
- All links use `textOnDark` colour with hover transition to white

---

### MissionSection

Two-part content section: a mission statement heading at the top, followed by a "made to scale" section with text on the left and an image placeholder on the right. Includes a "Working at x15" outline CTA link.

#### Props

None. This is a self-contained section with no configurable props.

#### Usage

```tsx
import { MissionSection } from "@richardjzhang/design-system";

<MissionSection />
```

#### Visual details

- White background, max-width 1200px centered
- ID `who-we-are` for in-page navigation
- Top: large bold mission statement text
- Bottom: two-column flex layout (text + image placeholder) with a "Working at x15" outline button
- Responsive: stacks vertically on mobile

---

### CorporateSection

Two-column content block with a text column ("We exist in the space between corporate and startup") and an image placeholder. Includes a "More about us" outline CTA link.

#### Props

None. This is a self-contained section with no configurable props.

#### Usage

```tsx
import { CorporateSection } from "@richardjzhang/design-system";

<CorporateSection />
```

#### Visual details

- White background, max-width 1200px centered
- Two-column flex layout (text + image placeholder) with 64px gap
- "More about us" outline CTA link
- Responsive: stacks vertically on mobile

---

### MuiCardSection

Dark three-column grid section showcasing portfolio types (Built & owned, Early-stage, Xccelerate). Each card has an SVG icon, title, and description. Built with MUI `Box` and `Typography`.

#### Props

None. This is a self-contained section with no configurable props.

#### Usage

```tsx
import { MuiCardSection } from "@richardjzhang/design-system";

<MuiCardSection />
```

#### Visual details

- Dark (`#2B3039`) background, full-width
- "Our portfolio comprises:" heading in white
- 3-column responsive grid (stacks to 1 column on mobile)
- Each card: SVG icon (slate blue strokes), white title, slate-blue description text

---

### VenturesList

Configurable dark section that displays venture names in large typographic rows. Each row shows a venture name in a large bold font with a year label. Accepts props for customisation.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | -- | Section heading (required) |
| `ventures` | `Venture[]` | -- | Array of venture objects (required) |

**`Venture` shape:**

```ts
interface Venture {
  name: string;      // Venture name (displayed large)
  year: string;      // Year founded
  href?: string;     // Optional link URL
}
```

#### Usage

```tsx
import { VenturesList } from "@richardjzhang/design-system";

<VenturesList
  title="Built and owned"
  ventures={[
    { name: "Home-in", year: "2020" },
    { name: "Unloan", year: "2022" },
    { name: "Kit", year: "2022" },
    { name: "Truyu", year: "2024", href: "/ventures/truyu" },
  ]}
/>

<VenturesList
  title="Xccelerate investments"
  ventures={[
    { name: "Paytron", year: "2022" },
    { name: "Gable", year: "2024" },
  ]}
/>
```

#### Visual details

- Dark (`#2B3039`) background, full-width
- Each venture row is a clickable `<a>` element with large bold text (`clamp(2.5rem, 5vw, 4.5rem)`) in a slightly lighter dark colour, year label in muted text with 0.6 opacity
- Hover reduces opacity to 0.7

---

### SpaceBetween

Content/blog section with a "The Space Between" branded header and a 3-column article card grid. Displays article cards with type, title, author, and date.

#### Props

None. This is a self-contained section with hardcoded sample articles.

#### Usage

```tsx
import { SpaceBetween } from "@richardjzhang/design-system";

<SpaceBetween />
```

#### Visual details

- Light grey (`#F0F2F5`) background
- Header: "The Space" / "Between" with a primary-pink underline on "Between", plus a description paragraph
- 3-column responsive article grid (2-col on tablet, 1-col on mobile)
- Each article card: white background, hover shadow, type label, title, author, and date
- Article data is currently hardcoded (3 media articles)

---

### WorkAtX15

Dark CTA section with a heading, body text, and an arrow-link CTA. Designed as a recruitment/careers call-to-action block.

#### Props

None. This is a self-contained section with no configurable props.

#### Usage

```tsx
import { WorkAtX15 } from "@richardjzhang/design-system";

<WorkAtX15 />
```

#### Visual details

- Dark (`#2B3039`) background, full-width
- Heading: "Find out what it's like to work at x15"
- Body: description of the team culture
- "Life at x15" link with right-arrow SVG icon, hover reduces opacity
- Max-width 600px on heading and body text

---

## Project structure

```
src/
  components/
    design-system/
      index.ts              # Barrel export for all components
      styled/               # Styled Components (visual primitives)
        Button.tsx
        Avatar.tsx
        Badge.tsx
        StatCard.tsx
        Skeleton.tsx
        Divider.tsx
        SectionHeader.tsx
        Chip.tsx
        VentureCard.tsx
        QuoteBlock.tsx
        IconCard.tsx
        CTABanner.tsx
        ValueCard.tsx
      mui/                  # MUI wrappers (interactive/accessible)
        Alert.tsx
        Navbar.tsx
        ConfirmDialog.tsx
        TextInput.tsx
        DataTable.tsx
        TabPanel.tsx
    StyledHero.tsx           # Full-height hero section
    StyledFooter.tsx         # Dark footer with nav + socials
    MissionSection.tsx       # Mission statement + scale block
    CorporateSection.tsx     # Two-column corporate text + image
    MuiCardSection.tsx       # Dark 3-column portfolio types (MUI)
    VenturesList.tsx         # Large-type venture list (props-driven)
    SpaceBetween.tsx         # Article cards grid section
    WorkAtX15.tsx            # Dark recruitment CTA section
    HomeBody.tsx             # Documentation page composition (not exported)
  theme/
    scTheme.ts              # Styled Components theme tokens
    muiTheme.ts             # MUI createTheme configuration
  lib/
    StyledComponentsRegistry.tsx  # Next.js SSR registry
    MuiRegistry.tsx               # Next.js MUI SSR registry
```

---

## Development

```bash
# Start the dev server (documentation site)
npm run dev

# Build the Next.js documentation app
npm run build:app

# Build the library for publishing (uses tsup)
npm run build

# Type-check
npm run typecheck
```

---

## AI assistant instructions

If you are an AI tool (v0, Cursor, Copilot, etc.) generating code that uses this design system, follow these rules:

1. **Always import from `@/components/design-system`** (or the published package name). All 27 components are exported from the barrel file.
2. **Every page must be wrapped** in `StyledComponentsRegistry` + `MuiRegistry` (already done in the root layout).
3. **All components are client components** (`"use client"`) -- they can be imported into server components but will render on the client.
4. **Use the theme tokens** from `scTheme` for custom styled-components rather than hardcoding colours.
5. **DataTable row types** must include `[key: string]: unknown` to satisfy the generic constraint.
6. **Button `outline` and `ghost` variants** use `currentColor` -- they inherit text colour from their parent, so they work on both light and dark backgrounds automatically.
7. **Prefer the design system components** over raw HTML or MUI primitives for consistency.
8. **Page-section components** (`StyledHero`, `StyledFooter`, `MissionSection`, `CorporateSection`, `MuiCardSection`, `VenturesList`, `SpaceBetween`, `WorkAtX15`) are full-width composed sections. Most are self-contained with no props. `VenturesList` is the only one that accepts props (`title` and `ventures` array).
9. **Component categories:**
   - **Styled Components (13):** Button, Avatar, Badge, StatCard, Skeleton, Divider, SectionHeader, Chip, VentureCard, QuoteBlock, IconCard, CTABanner, ValueCard
   - **MUI Components (6):** Alert, Navbar, ConfirmDialog, TextInput, DataTable, TabPanel
   - **Page-section Components (8):** StyledHero, StyledFooter, MissionSection, CorporateSection, MuiCardSection, VenturesList, SpaceBetween, WorkAtX15
