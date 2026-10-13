const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteConfig = {
  name: 'Your Brand',
  title: 'Your Brand — Official Website',
  description: 'Discover our services, projects, and latest updates.',
  url: siteUrl ? siteUrl.replace(/\/+$/, '') : 'http://localhost:3000',
  locale: 'uz_UZ',
  language: 'uz',
  defaultImage: '/og-image.jpg',
} as const;
