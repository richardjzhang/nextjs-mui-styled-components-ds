"use client";

import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface TabItem {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabPanelProps {
  tabs: TabItem[];
  defaultIndex?: number;
  variant?: "standard" | "fullWidth" | "scrollable";
}

function Panel({ children, active }: { children: React.ReactNode; active: boolean }) {
  if (!active) return null;
  return (
    <Box role="tabpanel" sx={{ py: 3 }}>
      {children}
    </Box>
  );
}

export default function TabPanel({ tabs, defaultIndex = 0, variant = "standard" }: TabPanelProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <Box>
      <Tabs
        value={activeIndex}
        onChange={(_, newValue) => setActiveIndex(newValue)}
        variant={variant}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          "& .MuiTab-root": { textTransform: "none", fontWeight: 600 },
        }}
      >
        {tabs.map((tab, i) => (
          <Tab key={i} label={tab.label} disabled={tab.disabled} />
        ))}
      </Tabs>
      {tabs.map((tab, i) => (
        <Panel key={i} active={i === activeIndex}>
          {tab.content}
        </Panel>
      ))}
    </Box>
  );
}
