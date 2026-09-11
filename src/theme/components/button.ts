import type { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Button: ComponentSingleStyleConfig = {
  variants: {
    icon: {
      bg: 'transparent',
      color: 'inherit',
      borderRadius: 0,
      transition: 'border 0.1s ease-in',
      _hover: {
        borderColor: 'border',
        border: '1px solid',
      },
    },
    secondary: {
      bg: 'transparent',
      textTransform: 'uppercase',
      color: 'ink',
      fontSize: 'lg',
      fontWeight: 'bold',
      p: 0,
      _hover: {
        color: 'gray.700',
        _dark: {
          color: 'gray.300',
        },
      },
    },
    block: {
      bg: 'surface',
      borderRadius: 0,
      borderColor: 'border',
      border: '1px solid',
      px: '8',
      _hover: {
        bg: 'surfaceElevated',
      },
    },
    filter: {
      bg: 'surface',
      borderRadius: 0,
      borderColor: 'border',
      border: '1px solid',
      px: '8',
      _hover: {
        bg: 'surfaceElevated',
      },
      _active: {
        bg: 'ink',
        borderColor: 'border',
        color: 'surface',
      },
    },
    navItem: {
      borderRadius: 0,
      bg: 'surface',
      justifyContent: 'flex-start',
      minW: '44',
      h: '20',
      borderColor: 'border',
      border: '1px solid',
      px: '8',
      _hover: {
        backgroundImage:
          'repeating-linear-gradient(135deg, transparent, transparent 24px, var(--chakra-colors-border) 24px, var(--chakra-colors-border) 25px)',
      },
      _activeLink: {
        fontStyle: 'italic',
      },
    },
  },
  sizes: {
    icon: {
      p: 0,
      h: 10,
      minW: 10,
      fontSize: 'lg',
    },
  },
}
