import {
  SiChakraui,
  SiReact,
  SiMongodb,
  SiLaravel,
  SiPostgresql,
  SiStripe,
  SiTailwindcss,
} from 'react-icons/si'
import YuvradniImage from '@public/img/projects/yuvradni.png'
import AkarInteriorsImage from '@public/img/projects/akarinterior .png'
import SwagImage from '@public/img/projects/swag.png'
import WhyPigeonsImage from '@public/img/projects/why-pigeons-full.png'
import type { Project } from '@utils/types'

export const projects: Project[] = [
  {
    id: '4',
    title: 'SWAG Testing Agency',
    description: {
      en: 'A premium testing and QA agency landing page focused on fast validation, quality assurance, and product confidence.',
      fr: 'Une landing page premium pour une agence de tests et de QA axée sur la validation rapide, l’assurance qualité et la confiance produit.',
    },
    image: { src: SwagImage },
    homepage: 'https://swagcodingtest.vercel.app/',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
    tags: [
      { label: 'currently working', colorScheme: 'yellow' },
      { label: 'testing', colorScheme: 'green' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  {
    id: '2',
    title: 'Yuvradni Vastradalan',
    description: {
      en: 'A modern clothing store experience showcasing timeless saree collections and elegant fashion.',
      fr: 'Une boutique de vêtements moderne présentant des collections de saris intemporels et une mode élégante.',
    },
    image: { src: YuvradniImage },
    homepage: 'https://kalabam.com/?ref=chr-ge.com',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'ChakraUI', icon: SiChakraui, color: '#319795' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'e-commerce', colorScheme: 'orange' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  {
    id: '1',
    title: 'AkarInteriors',
    description: {
      en: 'Connecting influencers and brands to collaborate on product advertisements and more.',
      fr: 'Nous connectons des influenceurs et des marques pour collaborer sur des publicités de produits et plus encore.',
    },
    image: { src: AkarInteriorsImage },
    homepage: 'https://hypzz.chr-ge.com/?ref=chr-ge.com',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'aws', colorScheme: 'orange' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  {
    id: '5',
    title: 'Why Pigeons',
    description: {
      en: 'Quick food delivery right to your door. User, restaurant, driver, and admin dashboards are fully functional.',
      fr: 'Livraison rapide de plats directement à votre porte. Les tableaux de bord des utilisateurs, des restaurants, des chauffeurs et des administrateurs sont entièrement fonctionnels.',
    },
    image: { src: WhyPigeonsImage },
    github: 'https://github.com/chr-ge/why-pigeons',
    technologies: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Stripe', icon: SiStripe, color: '#008CDD' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'e-commerce', colorScheme: 'purple' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: false,
  },
]
