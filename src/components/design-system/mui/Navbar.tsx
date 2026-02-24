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
}

const DRAWER_WIDTH = 280;

export default function Navbar({ title, items = [], elevation = 0 }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        position="static"
        elevation={elevation}
        sx={{
          borderBottom: elevation === 0 ? 1 : 0,
          borderColor: "divider",
          bgcolor: "#FFFFFF",
          color: "#1A1D23",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              mr: 4,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
            {items.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                href={item.href}
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  color: "#5C6370",
                  "&:hover": { color: "#1A1D23" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{
              display: { md: "none" },
              border: "1px solid #D4D8DE",
              borderRadius: "50%",
              width: 44,
              height: 44,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ "& .MuiDrawer-paper": { width: DRAWER_WIDTH } }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {title}
          </Typography>
        </Box>
        <List>
          {items.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton component="a" href={item.href} onClick={() => setDrawerOpen(false)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
