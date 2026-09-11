import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'
import {
  Button,
  chakra,
  Flex,
  Heading,
  Text,
  Box,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { motion, type Variants } from 'framer-motion'
import { usePostHog } from 'posthog-js/react'
import { config } from '@config/config'
import { ButtonArrow } from '../../meta'

const MotionFlex = motion.create(Flex)
const MotionHeading = motion.create(Heading)
const MotionBox = motion.create(Box)

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export const Hero: React.FC = () => {
  const { t } = useTranslation('common')
  const posthog = usePostHog()
  const heroGradient = useColorModeValue(
    [
      'linear-gradient(80deg, #ddcbf8 0%, #eaed9e 100%)',
      'linear-gradient(120deg, #ddfffc 0%, #C79DEE 100%)',
    ],
    [
      'linear-gradient(80deg, #12343B 0%, #3B2A4A 100%)',
      'linear-gradient(120deg, #102A43 0%, #50345A 100%)',
    ]
  )

  return (
    <MotionFlex
      position='relative'
      h='calc(100vh - var(--chakra-sizes-header-height))'
      px={{ base: '4', md: '8' }}
      align='center'
      overflow='hidden'
      animate={{ background: heroGradient }}
      transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.75 }}
    >
      {/* Subtle floating accent orb */}
      <MotionBox
        position='absolute'
        top={{ base: '-10%', md: '10%' }}
        right={{ base: '-20%', md: '5%' }}
        w={{ base: '260px', md: '420px' }}
        h={{ base: '260px', md: '420px' }}
        borderRadius='full'
        bg='whiteAlpha.200'
        filter='blur(80px)'
        pointerEvents='none'
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' as const }}
      />

      <VStack
        as={motion.div}
        variants={container}
        initial='hidden'
        animate='show'
        align='flex-start'
        pb='32'
        maxW='container.md'
        spacing='10'
        position='relative'
        zIndex={1}
      >
        <MotionBox variants={item}>
          <Text
            fontSize='sm'
            fontWeight='semibold'
            letterSpacing='widest'
            textTransform='uppercase'
            opacity={0.7}
            mb='3'
          >
            {t('hero-subtitle')}
          </Text>
        </MotionBox>

        <MotionHeading
          as='h1'
          variant='hero'
          size='hero'
          wordBreak='break-word'
          variants={item}
          lineHeight='1.05'
          letterSpacing='tight'
        >
          {t('hero-title')}
        </MotionHeading>

        <MotionBox variants={item}>
          <Button
            as={NextLink}
            href='/#projects'
            variant='secondary'
            size='lg'
            px='8'
            border='none'
            boxShadow='none'
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'none',
            }}
            sx={{
              transition: 'transform 0.2s ease-in-out',
              '&:hover svg': {
                transform: 'scaleX(1.1)',
              },
            }}
            onClick={() => posthog.capture('hero_button_clicked')}
          >
            <chakra.span mr='4'>{t('hero-cta')}</chakra.span>
            <ButtonArrow
              transformOrigin='left'
              transition='transform 0.2s ease-in-out, fill 0.2s ease-in-out'
            />
          </Button>
        </MotionBox>
      </VStack>

      {/* Scroll cue */}
      <MotionBox
        position='absolute'
        bottom='8'
        left='50%'
        transform='translateX(-50%)'
        display={{ base: 'none', md: 'block' }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' as const }}
      >
        <Box w='1px' h='40px' bg='whiteAlpha.500' />
      </MotionBox>
    </MotionFlex>
  )
}