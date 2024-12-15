import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "static.lolesports.com",
      },
    ],
  },
  experimental: {
    taint: true,
  },
};

export default withNextIntl(nextConfig);
