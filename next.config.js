/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Modern image formats for better compression and quality
    formats: ['image/avif', 'image/webp'],
    // Device sizes for responsive images matching common breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for smaller images (icons, thumbnails)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimize layout shift by enforcing size requirements
    minimumCacheTTL: 60,
    // Allow optimization for external images if needed
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compiler: {
    // Remove console logs in production for better performance
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
