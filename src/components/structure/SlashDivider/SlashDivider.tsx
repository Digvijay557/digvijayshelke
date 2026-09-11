import { Box, type BoxProps } from '@chakra-ui/react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SlashDividerProps extends BoxProps {}

export const SlashDivider: React.FC<SlashDividerProps> = (props) => (
  <Box
    h='12'
    borderColor='border'
    borderTop='1px solid'
    borderBottom='1px solid'
    bg='surface'
    style={{
      backgroundImage:
        'repeating-linear-gradient(135deg, transparent, transparent 24px, var(--chakra-colors-border) 24px, var(--chakra-colors-border) 25px)',
    }}
    {...props}
  />
)
