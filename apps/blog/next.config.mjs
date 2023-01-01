import { dirname, join } from "path"
import { fileURLToPath } from "url"

import rehypePrism from "@mapbox/rehype-prism"
import nextBundleAnalyzer from "@next/bundle-analyzer"
import nextMDX from "@next/mdx"
import remarkGfm from "remark-gfm"

const withBundleAnalyzer = nextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

/** @type{import('next').NextConfig} */
const config = {
  pageExtensions: ["tsx", "mdx"],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    scrollRestoration: true,
    outputFileTracingRoot: join(dirname(fileURLToPath(import.meta.url)), "../../"),
  },
}

export default withBundleAnalyzer(withMDX(config))