import { SiJavascript, SiTypescript } from 'react-icons/si'
import type { ContributionProps } from '@components/structure/OpenSource/Contribution'

export const contributions: ContributionProps[] = [
  {
    user: 'Digvijay557',
    repository: 'portfolio',
    role: {
      label: 'creator',
      color: 'green',
    },
    githubUrl: 'https://github.com/Digvijay557',
    description: {
      en: 'Personal portfolio and experiments focused on product design, frontend craft, and modern web experiences.',
      fr: "Portfolio personnel et expérimentations axés sur la conception de produits, le design frontend et les expériences web modernes.",
    },
    topics: ['react', 'select', 'form'],
    language: {
      name: 'Typescript',
      icon: SiTypescript,
      color: '#3178C6',
    },
  },
  {
    user: 'astrofox-io',
    repository: 'astrofox',
    role: {
      label: 'contributor',
      color: 'orange',
    },
    githubUrl: 'https://github.com/astrofox-io/astrofox',
    description: {
      en: 'Astrofox is a motion graphics program that lets you turn audio into amazing videos.',
      fr: "Astrofox est un programme d'animation graphique qui vous permet de transformer l'audio en vidéos étonnantes.",
    },
    topics: ['audio', 'video', 'audio-visualizer'],
    language: {
      name: 'Javascript',
      icon: SiJavascript,
      color: '#F7DF1E',
    },
  },
]
