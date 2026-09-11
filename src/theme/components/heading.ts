import type { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Heading: ComponentSingleStyleConfig = {
  variants: {
    hero: {
      color: 'ink',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    section: {
      color: 'ink',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    skillCategory: {
      fontSize: '2rem',
      fontFamily: 'body',
      color: 'ink',
    },
  },
  sizes: {
    hero: {
      fontSize: { base: '4xl', md: '4rem' },
      lineHeight: 1,
    },
  },
}
