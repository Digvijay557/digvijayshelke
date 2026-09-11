import { useTranslation } from 'next-i18next'
import NextImage from 'next/image'
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { usePostHog } from 'posthog-js/react'
import type { Project } from '@utils/types'

const MotionBox = motion.create(Box)

export const ProjectShowcase: React.FC<Project> = ({
  title,
  description,
  image,
  homepage,
  github,
}) => {
  const { t, i18n } = useTranslation('common')
  const posthog = usePostHog()
  const isHighlighted = title.toLowerCase().includes('swag')

  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      h='96'
      px='6'
      borderColor={isHighlighted ? 'yellow.400' : 'border'}
      border='1px solid'
      bg={isHighlighted ? 'rgba(250, 204, 21, 0.08)' : 'rgba(255, 255, 255, 0.06)'}
      backdropFilter='blur(14px)'
      boxShadow={
        isHighlighted
          ? '0 0 0 1px rgba(250, 204, 21, 0.8), 0 20px 60px rgba(250, 204, 21, 0.2)'
          : '0 20px 60px rgba(0, 0, 0, 0.16)'
      }
      spacing={{ base: '0', md: '24' }}
      role='group'
      overflow='hidden'
    >
      <VStack flex='2' py='4' align='flex-start' justify='center' spacing='4'>
        {isHighlighted && (
          <Box
            px='2'
            py='1'
            borderRadius='full'
            bg='yellow.400'
            color='black'
            fontSize='xs'
            fontWeight='bold'
            letterSpacing='widest'
            textTransform='uppercase'
          >
            Currently Working
          </Box>
        )}
        <Heading as='h3'>{title}</Heading>
        <Divider opacity='1' />
        <Text>{description[i18n.language as keyof typeof description]}</Text>
        <HStack spacing='4'>
          {homepage && (
            <Link
              href={homepage}
              variant='projectLink'
              onClick={() =>
                posthog.capture('project_link_clicked', {
                  type: 'website',
                  title,
                })
              }
              isExternal
            >
              {t('website')}
            </Link>
          )}
          {github && (
            <Link
              href={github}
              variant='projectLink'
              onClick={() =>
                posthog.capture('project_link_clicked', {
                  type: 'github',
                  title,
                })
              }
              isExternal
            >
              Github
            </Link>
          )}
        </HStack>
      </VStack>
      <Flex flex='3' align='flex-end' pos='relative'>
        <Box
          display={{ md: 'none' }}
          mt='4'
          pt='1.5'
          px='1.5'
          border='1px solid rgba(255, 255, 255, 0.18)'
          borderBottom='none'
          borderTopRadius='1.375rem'
        >
          <ImageWithBorder title={title} image={image} />
        </Box>
        <MotionBox
          display={{ base: 'none', md: 'block' }}
          pos='absolute'
          pt='3.5'
          px='3.5'
          bg='rgba(255, 255, 255, 0.08)'
          backdropFilter='blur(12px)'
          w='full'
          top='0'
          left='0'
          right='0'
          border='1px solid rgba(255, 255, 255, 0.18)'
          borderBottom='0'
          borderTopRadius='1.875rem'
          initial={{ y: '4rem' }}
          whileHover={{ y: '2.5rem' }}
        >
          <ImageWithBorder title={title} image={image} />
        </MotionBox>
      </Flex>
    </Stack>
  )
}

const ImageWithBorder: React.FC<Pick<Project, 'title' | 'image'>> = ({
  title,
  image,
}) => (
  <Box
    pos='relative'
    w='full'
    borderTopRadius='2xl'
    overflow='hidden'
    borderColor='border'
    borderTop='1px solid'
    borderLeft='1px solid'
    borderRight='1px solid'
  >
    <NextImage src={image.src} alt={title} draggable='false' />
  </Box>
)
