/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["components/*"]
    }
  }
}

module.exports = nextConfig
