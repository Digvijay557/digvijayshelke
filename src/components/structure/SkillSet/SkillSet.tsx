import { useTranslation } from 'next-i18next'
import { Box, Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import { motion, type Variants } from 'framer-motion'
import { SkillGroup } from './SkillGroup'
import { skills } from '@data/skills'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
}

const MotionSimpleGrid = motion.create(SimpleGrid)
const MotionHeading = motion.create(Heading)
const MotionBox = motion.create(Box)

export const SkillSet: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <VStack
      as='section'
      position='relative'
      overflow='hidden'
      align='stretch'
      py='20'
      px={{ base: '4', md: '8' }}
      borderColor='border'
      borderTop='1px solid'
      spacing='16'
    >
      <MotionBox
        position='absolute'
        top={{ base: '12%', md: '8%' }}
        left={{ base: '-18%', md: '8%' }}
        boxSize={{ base: '13rem', md: '22rem' }}
        borderRadius='full'
        background='radial-gradient(circle, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.42) 38%, rgba(255, 255, 255, 0.24) 70%, rgba(255, 255, 255, 0) 100%)'
        opacity='0.72'
        pointerEvents='none'
        animate={{ x: ['0%', '42%', '18%', '0%'], y: ['0%', '28%', '62%', '0%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <MotionBox
        position='absolute'
        right={{ base: '-20%', md: '4%' }}
        bottom={{ base: '5%', md: '2%' }}
        boxSize={{ base: '11rem', md: '18rem' }}
        borderRadius='full'
        background='radial-gradient(circle, rgba(0, 0, 0, 0.68) 0%, rgba(0, 0, 0, 0.36) 38%, rgba(255, 255, 255, 0.22) 70%, rgba(255, 255, 255, 0) 100%)'
        opacity='0.68'
        pointerEvents='none'
        animate={{ x: ['0%', '-36%', '-12%', '0%'], y: ['0%', '-34%', '-68%', '0%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <MotionHeading
        as='h2'
        variant='section'
        size='2xl'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        zIndex='1'
      >
        {t('skills-heading')}
      </MotionHeading>
      <MotionSimpleGrid
        columns={[1, null, 2, 3]}
        spacing='12'
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        zIndex='1'
      >
        {skills.map((skill) => (
          <SkillGroup key={skill.id} {...skill} />
        ))}
      </MotionSimpleGrid>
    </VStack>
  )
}
