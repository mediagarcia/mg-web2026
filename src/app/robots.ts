import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/image-staging', '/video-staging'],
    },
    sitemap: 'https://mediagarcia.com/sitemap.xml',
  }
}
