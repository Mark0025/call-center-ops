import pkg from '@next/env';
const { loadEnvConfig } = pkg;

const { combinedEnv } = loadEnvConfig(process.cwd());

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: combinedEnv.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: combinedEnv.CLERK_SECRET_KEY,
    NEXT_DEV_URL: combinedEnv.NEXT_DEV_URL,
  },
}

export default nextConfig
  
