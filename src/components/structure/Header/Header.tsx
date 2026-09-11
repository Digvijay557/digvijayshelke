import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import NextLink from 'next/link'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { VscChromeClose } from 'react-icons/vsc'
import { FiMoon, FiSun } from 'react-icons/fi'
import { NAME } from '@config/config'
import { Menu } from './Menu'

export const Header: React.FC = () => {
  const { t } = useTranslation('common')
  const { isOpen, onToggle, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  const headerBackground = useColorModeValue(
    'rgba(255, 255, 255, 0.92)',
    'rgba(17, 19, 24, 0.72)'
  )
  const [isClientWorkVisible, setIsClientWorkVisible] = useState(false)

  useEffect(() => {
    const clientWorkSection = document.getElementById('client-work')
    if (!clientWorkSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsClientWorkVisible(entry.isIntersecting)
        if (entry.isIntersecting) onClose()
      },
      { threshold: 0.2 }
    )

    observer.observe(clientWorkSection)
    return () => observer.disconnect()
  }, [onClose])

  return (
    <Box
      as='header'
      pos='sticky'
      zIndex='banner'
      top='0'
      left='0'
      right='0'
      transform={isClientWorkVisible ? 'translateY(-100%)' : 'translateY(0)'}
      transition='transform 0.35s ease'
    >
      <Flex
        pos='relative'
        zIndex='banner'
        align='center'
        justify='space-between'
        bg={headerBackground}
        backdropFilter='blur(18px)'
        borderBottomRadius={{ base: 'xl', md: '2xl' }}
        boxShadow='0 14px 40px rgba(0, 0, 0, 0.16)'
        pt='12'
        pb='4'
        px={{ base: '4', md: '8' }}
        borderColor='border'
        borderTop='1px solid rgba(255, 255, 255, 0.12)'
        borderBottom='1px solid'
      >
        <Text
          as={NextLink}
          href='/'
          fontWeight='bold'
          fontSize={{ base: 'lg', md: '2xl' }}
          casing='uppercase'
        >
          {NAME}
        </Text>
        <HStack
          spacing='1'
          p='1'
          borderRadius='full'
          bg='rgba(255, 255, 255, 0.08)'
          border='1px solid rgba(255, 255, 255, 0.14)'
        >
          <IconButton
            aria-label={
              colorMode === 'dark' ? 'Enable light mode' : 'Enable dark mode'
            }
            title={
              colorMode === 'dark' ? 'Enable light mode' : 'Enable dark mode'
            }
            icon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
            variant='icon'
            size='icon'
            borderRadius='full'
            onClick={toggleColorMode}
          />
          <IconButton
            aria-label={t(isOpen ? 'close-menu' : 'open-menu')}
            icon={isOpen ? <VscChromeClose /> : <HiOutlineMenuAlt4 />}
            variant='icon'
            size='icon'
            borderRadius='full'
            onClick={onToggle}
          />
        </HStack>
      </Flex>
      <Menu isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}
