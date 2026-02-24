"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const portfolioTypes = [
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="20" width="24" height="24" stroke="#7B8FA1" strokeWidth="2" fill="none" />
        <rect x="20" y="8" width="16" height="16" stroke="#7B8FA1" strokeWidth="2" fill="none" />
      </svg>
    ),
    title: "Built & owned ventures",
    description:
      "Wholly-owned startups we have either built and launched, or acquired.",
  },
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="8" width="20" height="20" stroke="#7B8FA1" strokeWidth="2" fill="none" />
        <rect x="24" y="24" width="20" height="20" stroke="#7B8FA1" strokeWidth="2" fill="none" />
      </svg>
    ),
    title: "Early-stage investments",
    description:
      "Pre-Series B startups with a clear benefit to CommBank, and that demonstrate readiness for strategic partnership commitments.",
  },
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <path d="M32 8L32 56M8 32L56 32M15 15L49 49M49 15L15 49" stroke="#7B8FA1" strokeWidth="2" />
      </svg>
    ),
    title: "Xccelerate investments",
    description:
      "Pre-Series A startups with a minimum viable product (MVP) and potential pathway to partnership with CommBank in the future.",
  },
];

export default function MuiCardSection() {
  return (
    <Box
      sx={{
        bgcolor: "#2B3039",
        px: { xs: 3, md: 6 },
        py: { xs: 6, md: 8 },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#FFFFFF",
          fontWeight: 600,
          mb: 6,
        }}
      >
        Our portfolio comprises:
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 4,
        }}
      >
        {portfolioTypes.map((item) => (
          <Box key={item.title}>
            <Box sx={{ mb: 3 }}>{item.icon}</Box>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#FFFFFF",
                fontWeight: 600,
                mb: 1.5,
                fontSize: "1.1rem",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#7B8FA1",
                lineHeight: 1.7,
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
