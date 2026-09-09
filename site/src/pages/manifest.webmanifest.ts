import type { APIRoute } from 'astro'
import { brandSlogan } from '@/lib/brand'
import { sitePath } from '@/lib/site'

export const prerender = true

export const GET: APIRoute = () => new Response(JSON.stringify({
  name: 'AnyTTY',
  short_name: 'AnyTTY',
  description: brandSlogan,
  start_url: sitePath('/'),
  display: 'standalone',
  background_color: '#ffffff',
  theme_color: '#ffffff',
  icons: [{ src: sitePath('/assets/brand/pwa-icon.webp'), sizes: '512x512', type: 'image/webp', purpose: 'any' }],
}), { headers: { 'Content-Type': 'application/manifest+json' } })
