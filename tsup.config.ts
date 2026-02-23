import { defineConfig } from "tsup";
import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    next: "src/next.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  treeshake: true,
  clean: true,
  tsconfig: "tsconfig.build.json",
  external: [
    "react",
    "react-dom",
    "styled-components",
    "@mui/material",
    "@mui/icons-material",
    "@emotion/react",
    "@emotion/styled",
    "next",
    "next/navigation",
  ],
  async onSuccess() {
    const dir = "dist";
    const files = readdirSync(dir).filter(
      (f) => f.endsWith(".js") || f.endsWith(".mjs") || f.endsWith(".cjs")
    );
    for (const file of files) {
      const filePath = join(dir, file);
      const content = readFileSync(filePath, "utf-8");
      writeFileSync(filePath, `"use client";\n${content}`);
    }
  },
});
