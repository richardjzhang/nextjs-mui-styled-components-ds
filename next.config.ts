import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    // Enable SWC-based Styled Components support
    styledComponents: true,
  },
};

export default nextConfig;
