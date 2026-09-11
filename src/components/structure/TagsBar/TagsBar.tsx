import { useEffect, useRef, useState } from 'react'
import { Box, Button, HStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion.create(Box)

const HEADER_HEIGHT = 105

interface TagsBarProps {
  tags: string[]
  activeTag: string
  onTagClick: (tag: string) => void
}

export const TagsBar: React.FC<TagsBarProps> = ({
  tags,
  activeTag,
  onTagClick,
}) => {
  const [isSticky, setIsSticky] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const stickyGradient = useColorModeValue(
    [
      'linear-gradient(90deg, #fad0c4 0%, #ffd1ff 100%)',
      'linear-gradient(90deg, #fdcbf1 0%, #e6dee9 100%)',
    ],
    [
      'linear-gradient(90deg, #3B1F2B 0%, #143D4A 100%)',
      'linear-gradient(90deg, #2A1B4B 0%, #1A4A4A 100%)',
    ]
  )

  useEffect(() => {
    const updateStickyState = () => {
      if (ref.current) {
        setIsSticky(ref.current.getBoundingClientRect().top <= HEADER_HEIGHT)
      }
    }

    updateStickyState()
    window.addEventListener('scroll', updateStickyState)
    window.addEventListener('resize', updateStickyState)

    return () => {
      window.removeEventListener('scroll', updateStickyState)
      window.removeEventListener('resize', updateStickyState)
    }
  }, [])

  return (
    <MotionBox
      ref={ref}
      pos='sticky'
      top='var(--chakra-sizes-header-height)'
      bg='rgba(17, 19, 24, 0.72)'
      backdropFilter='blur(18px)'
      px={{ base: '4', md: '8' }}
      zIndex='dropdown'
      borderColor='border'
      borderBottom='1px solid'
      overflowX='auto'
      initial={{ paddingTop: '4rem', paddingBottom: '1.5rem' }}
      animate={
        isSticky
          ? {
              paddingTop: '1rem',
              paddingBottom: '1rem',
              background: stickyGradient,
            }
          : {
              paddingTop: '4rem',
              paddingBottom: '1.5rem',
              background: 'var(--chakra-colors-surface)',
            }
      }
      transition={{
        background: {
          repeat: isSticky ? Infinity : 0,
          repeatType: 'reverse',
          duration: isSticky ? 2 : 0.5,
        },
      }}
    >
      <HStack spacing='4' w='min-content'>
        {tags.map((tag) => (
          <Button
            key={tag}
            aria-label={tag}
            variant='filter'
            onClick={() => onTagClick(tag)}
            isActive={tag === activeTag}
          >
            {tag}
          </Button>
        ))}
      </HStack>
    </MotionBox>
  )
}
