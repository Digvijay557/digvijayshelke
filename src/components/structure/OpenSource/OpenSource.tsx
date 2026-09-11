import { useTranslation } from 'next-i18next'
import {
  Box,
  Heading,
  SimpleGrid,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { contributions } from '@data/contributions'
import { Contribution } from './Contribution'

const MotionHeading = motion.create(Heading)

export const OpenSource: React.FC = () => {
  const { t } = useTranslation('common')
  const bannerGradient = useColorModeValue(
    'linear-gradient(90deg, #93A5CF 0%, #E4EFE9 100%)',
    'linear-gradient(90deg, #26385F 0%, #1D4D4D 100%)'
  )

  return (
    <VStack
      as='section'
      align='stretch'
      pb='20'
      borderColor='border'
      borderTop='1px solid'
      spacing='16'
    >
      <Box
        px={{ base: '4', md: '8' }}
        pt='32'
        pb='3'
        bg={bannerGradient}
      >
        <MotionHeading
          as='h2'
          variant='section'
          color='white'
          size='2xl'
          wordBreak={{ base: 'break-all', sm: 'break-word' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {t('open-source')}
        </MotionHeading>
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 3 }}
        px={{ base: '4', md: '8' }}
        spacing='16'
      >
        {contributions.map((contribution) => (
          <Contribution key={contribution.repository} {...contribution} />
        ))}
      </SimpleGrid>
    </VStack>
  )
}
