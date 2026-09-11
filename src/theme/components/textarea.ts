import type { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Textarea: ComponentSingleStyleConfig = {
  variants: {
    primary: {
      bg: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(14px)',
      borderRadius: 'xl',
      borderColor: 'rgba(255, 255, 255, 0.22)',
      border: '1px solid',
      _disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
}
