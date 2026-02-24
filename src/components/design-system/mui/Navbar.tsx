"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  title: string;
  items?: NavItem[];
  elevation?: number;
  variant?: "dark" | "light";
}

const DRAWER_WIDTH = 280;

export default function Navbar({ title, items = [], elevation = 0, variant = "dark" }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isDark = variant === "dark";

  return (
    <>
      <AppBar
        position="absolute"
        elevation={elevation}
        sx={{
          bgcolor: "transparent",
          color: isDark ? "#FFFFFF" : "#1A1D23",
          boxShadow: "none",
          zIndex: 10,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            px: { xs: 3, md: 6 },
            py: 1.5,
          }}
        >
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              fontWeight: 700,
              mr: 4,
              letterSpacing: "-0.02em",
              color: isDark ? "#FFFFFF" : "#1A1D23",
              textDecoration: "none",
              fontSize: "1.1rem",
            }}
          >
            {title}
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, alignItems: "center" }}>
            {items.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                href={item.href}
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  color: isDark ? "rgba(255,255,255,0.85)" : "#5C6370",
                  "&:hover": { color: isDark ? "#FFFFFF" : "#1A1D23" },
                  fontSize: "0.9rem",
                  px: 2,
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <IconButton
            edge="end"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{
              bgcolor: isDark ? "#FFFFFF" : "#1A1D23",
              color: isDark ? "#1A1D23" : "#FFFFFF",
              width: 44,
              height: 44,
              "&:hover": {
                bgcolor: isDark ? "rgba(255,255,255,0.9)" : "rgba(26,29,35,0.9)",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            bgcolor: "#2B3039",
            color: "#FFFFFF",
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: "#FFFFFF" }}>
            {title}
          </Typography>
        </Box>
        <List>
          {items.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component="a"
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  px: 3,
                  py: 1.5,
                  "&:hover": { bgcolor: "rgba(255,255,255,0.05)" },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: { color: "rgba(255,255,255,0.85)", fontWeight: 500 },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
