import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Media Garcia | HubSpot Solutions Partner',
    short_name: 'Media Garcia',
    description: 'We build and run digital platforms that keep companies lean, growing, and easy to do business with.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3BB782',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
