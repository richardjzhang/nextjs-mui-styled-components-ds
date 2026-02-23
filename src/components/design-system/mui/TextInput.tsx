"use client";

import TextField, { type TextFieldProps } from "@mui/material/TextField";

type TextInputProps = Omit<TextFieldProps, "variant"> & {
  variant?: "outlined" | "filled" | "standard";
};

export default function TextInput({ variant = "outlined", ...props }: TextInputProps) {
  return (
    <TextField
      variant={variant}
      fullWidth
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
        },
      }}
      {...props}
    />
  );
}
