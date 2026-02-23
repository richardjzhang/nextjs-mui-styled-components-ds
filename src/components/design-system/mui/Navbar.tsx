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
        sx={{ borderBottom: elevation === 0 ? 1 : 0, borderColor: "divider" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ fontWeight: 700, mr: 4 }}>
            {title}
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, flexGrow: 1 }}>
            {items.map((item) => (
              <Button key={item.label} color="inherit" href={item.href} sx={{ textTransform: "none" }}>
                {item.label}
              </Button>
            ))}
          </Box>
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
