import { inputAnatomy as parts } from '@chakra-ui/anatomy'
import type { ComponentMultiStyleConfig } from '@chakra-ui/react'
import type { PartsStyleFunction } from '@chakra-ui/theme-tools'

export const variantPrimary: PartsStyleFunction<typeof parts> = () => ({
  field: {
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
})

export const Input: ComponentMultiStyleConfig = {
  parts: ['field'],
  variants: {
    primary: variantPrimary,
  },
  defaultProps: {
    variant: 'primary',
  },
}
