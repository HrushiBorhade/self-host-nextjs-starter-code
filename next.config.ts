import type { NextConfig } from "next";
import "@/lib/env/client";
import "@/lib/env/server";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core", "geist"],
};

export default nextConfig;
