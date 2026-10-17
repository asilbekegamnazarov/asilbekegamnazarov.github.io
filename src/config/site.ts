const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const siteConfig = {
  name: 'Asilbek Egamnazarov',
  title: 'Asilbek Egamnazarov | Developer Portfolio',
  description:
    "Explore Asilbek Egamnazarov's software development portfolio, projects, technical skills, and articles.",
  url: siteUrl,
  language: 'en',
} as const;
