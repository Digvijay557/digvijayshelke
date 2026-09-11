import { useTranslation } from 'next-i18next'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion.create(Box)
const MotionHeading = motion.create(Heading)

const benefits = [
  { number: '01', title: 'why-work-1-title' },
  { number: '02', title: 'why-work-2-title' },
  { number: '03', title: 'why-work-3-title' },
  { number: '04', title: 'why-work-4-title' },
] as const

export const WhyWorkWithMe: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <VStack
      as='section'
      align='stretch'
      py={{ base: '20', md: '28' }}
      px={{ base: '4', md: '8' }}
      borderColor='border'
      borderTop='1px solid'
      spacing={{ base: '12', md: '16' }}
    >
      <MotionHeading
        as='h2'
        variant='section'
        size='2xl'
        alignSelf='center'
        textAlign='center'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {t('why-work-title')}
      </MotionHeading>
      <VStack
        align='stretch'
        spacing='0'
        w='full'
        maxW='5xl'
        alignSelf='center'
      >
        {benefits.map((benefit, index) => (
          <MotionBox
            key={benefit.number}
            p={{ base: '8', md: '12' }}
            minH={{ base: '65vh', md: '68vh' }}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            gap={{ base: '8', md: '12' }}
            alignItems='center'
            textAlign='center'
            position='sticky'
            top={{ base: '1.5rem', md: '3rem' }}
            zIndex={index + 1}
            border='1px solid'
            borderColor='rgba(255, 255, 255, 0.22)'
            borderRadius='2xl'
            bg='rgba(255, 255, 255, 0.08)'
            backdropFilter='blur(18px)'
            boxShadow='0 24px 80px rgba(0, 0, 0, 0.22)'
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
          >
            <Text fontSize='sm' fontWeight='bold' color='primary.500'>
              {benefit.number}
            </Text>
            <Box w='full' px={{ base: '2', md: '8' }}>
              <Heading
                as='h3'
                fontSize={{ base: '3xl', md: '5xl' }}
                lineHeight='0.95'
                maxW='3xl'
              >
                {t(benefit.title)}
              </Heading>
            </Box>
          </MotionBox>
        ))}
      </VStack>
    </VStack>
  )
}