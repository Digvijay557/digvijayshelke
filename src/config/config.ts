import type { DefaultSeoProps } from 'next-seo'
import { i18n } from '../../next-i18next.config'

export const NAME = 'DIGVIJAY SHELKE'

export const config: Config = {
  isDev: process.env.NODE_ENV === 'development',
  defaultLocale: i18n.defaultLocale,
  revalidateDelay: 30,
  copyright: `© ${new Date().getFullYear()} ${NAME}`,
  seo: {
    title: `${NAME} // Full-Stack Software Developer`,
    description:
      'I design and build high-impact digital experiences for brands, businesses, and founders.',
    canonical: 'https://digvijayshelke.com',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://digvijayshelke.com',
      title: `${NAME} // Full-Stack Software Developer`,
      description:
        'I design and build high-impact digital experiences for brands, businesses, and founders.',
      site_name: `${NAME} // Full-Stack Software Developer`,
      images: [
        {
          url: 'https://digvijayshelke.com/img/banner.png',
          width: 1200,
          height: 630,
          alt: 'Digvijay Shelke banner',
        },
      ],
    },
    twitter: {
      cardType: 'summary',
    },
    languageAlternates: [
      { hrefLang: 'en', href: 'https://digvijayshelke.com' },
      { hrefLang: 'fr', href: 'https://digvijayshelke.com/fr' },
    ],
    additionalMetaTags: [
      { httpEquiv: 'x-ua-compatible', content: 'IE=edge; chrome=1' },
      { property: 'msapplication-TileColor', content: '#ffc40d' },
      { property: 'msapplication-config', content: '/icons/browserconfig.xml' },
      { property: 'theme-color', content: '#ffffff' },
    ],
    additionalLinkTags: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png',
      },
      { rel: 'manifest', href: 'site.webmanifest' },
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#ffc40d',
      },
      { rel: 'shortcut icon', href: '/icons/favicon.ico' },
    ],
  },
  email: 'digvijay55@gmail.com',
  email_link: 'mailto:digvijay55@gmail.com',
  github: 'https://github.com/Digvijay557/',
  linkedin: 'https://www.linkedin.com/in/digvijay-shelke-020a94201/',
}

interface Config {
  isDev: boolean
  defaultLocale: string
  revalidateDelay: number
  copyright: string
  seo: DefaultSeoProps
  email: string
  email_link: string
  github: string
  linkedin: string
}
