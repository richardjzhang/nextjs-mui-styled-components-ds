"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";

const cards = [
  {
    icon: <RocketLaunchIcon fontSize="large" color="primary" />,
    title: "Next.js 15",
    description: "App Router with React Server Components and streaming SSR.",
  },
  {
    icon: <CodeIcon fontSize="large" color="primary" />,
    title: "Styled Components",
    description: "Custom components with tagged template literals and theming.",
  },
  {
    icon: <BrushIcon fontSize="large" color="primary" />,
    title: "Material UI",
    description: "Pre-built components powered by Emotion under the hood.",
  },
];

export default function MuiCardSection() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center", mb: 3 }}>
        Material UI Section
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 3,
        }}
      >
        {cards.map((card) => (
          <Card key={card.title} variant="outlined">
            <CardContent sx={{ textAlign: "center", py: 4 }}>
              {card.icon}
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
              <Button variant="contained" size="small" sx={{ mt: 2 }}>
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
