import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import type common from '@public/locales/en/common.json'
import { Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import { motion, type Variants } from 'framer-motion'
import type { SkillGroup as ISkillGroup } from '@utils/types'
import { SkillBox } from './SkillBox'

const group: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SkillGroupProps extends ISkillGroup {}

export const SkillGroup: React.FC<SkillGroupProps> = ({ category, skills }) => {
  const { t } = useTranslation('common')
  const [borderColor, setBorderColor] = useState('border')

  return (
    <motion.div variants={group}>
      <VStack
        align='flex-start'
        p='6'
        borderColor={borderColor === 'border' ? 'rgba(255, 255, 255, 0.22)' : borderColor}
        borderWidth='1px'
        borderStyle='solid'
        borderRadius='2xl'
        bg='rgba(255, 255, 255, 0.07)'
        backdropFilter='blur(18px)'
        boxShadow='0 18px 55px rgba(0, 0, 0, 0.16)'
        spacing='6'
        transition='border-color 0.1s ease-in-out'
      >
        <Heading as='h3' variant='skillCategory'>
          {t(category as keyof typeof common)}
        </Heading>
        <SimpleGrid columns={3} spacing='5' w='full'>
          {skills.map((skill) => (
            <SkillBox
              key={skill.name}
              setBorderColor={setBorderColor}
              {...skill}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </motion.div>
  )
}
