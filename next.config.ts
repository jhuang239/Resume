import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    devIndicators: false,
    output: "standalone",
};

export default withFlowbiteReact(nextConfig);
