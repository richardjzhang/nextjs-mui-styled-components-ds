"use client";

import { useState } from "react";
import MuiAlert, { type AlertColor } from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface AlertProps {
  severity?: AlertColor;
  title?: string;
  children: React.ReactNode;
  dismissible?: boolean;
  variant?: "filled" | "outlined" | "standard";
  onClose?: () => void;
  action?: React.ReactNode;
}

export default function Alert({
  severity = "info",
  title,
  children,
  dismissible = false,
  variant = "standard",
  onClose,
  action,
}: AlertProps) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    onClose?.();
  };

  return (
    <Collapse in={open}>
      <MuiAlert
        severity={severity}
        variant={variant}
        action={
          action ||
          (dismissible && (
            <IconButton aria-label="close" color="inherit" size="small" onClick={handleClose}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          ))
        }
        sx={{ borderRadius: 2 }}
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {children}
      </MuiAlert>
    </Collapse>
  );
}
