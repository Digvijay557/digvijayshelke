import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Flex, Text } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

const MotionText = motion.create(Text)
const clientWorkWordKeys = [
  'client-work-word',
  'client-work-third-word',
] as const

export const ClientWork: React.FC = () => {
  const { t } = useTranslation('common')
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % 2)
    }, 2600)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <Flex
      id='client-work'
      minH='100vh'
      align='center'
      justify='center'
      direction='column'
      bg='#000000'
      color='white'
      px={{ base: '6', md: '12' }}
      py={{ base: '20', md: '32' }}
    >
      <MotionText
        maxW='7xl'
        fontSize={{ base: '4rem', sm: '5rem', md: '8rem' }}
        fontWeight='bold'
        lineHeight={{ base: '1.05', sm: '1', md: '0.95' }}
        letterSpacing='-0.03em'
        textTransform='uppercase'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {t('client-work-prefix')}{' '}
        <Text
          as='span'
          display='inline-block'
          minW={{ base: '7ch', md: '9ch' }}
          lineHeight='1.1'
          verticalAlign='baseline'
        >
          <AnimatePresence mode='wait' initial={false}>
            <motion.span
              key={wordIndex}
              style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
              initial={{ opacity: 0, y: '0.35em' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-0.35em' }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
            >
              {t(clientWorkWordKeys[wordIndex])}
            </motion.span>
          </AnimatePresence>
        </Text>
      </MotionText>
    </Flex>
  )
}