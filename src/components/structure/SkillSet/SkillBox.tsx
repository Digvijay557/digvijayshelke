import { Center, Icon, Tooltip, useDisclosure } from '@chakra-ui/react'
import type { Skill } from '@utils/types'

export interface SkillProps extends Skill {
  setBorderColor: (color: string) => void
}

export const SkillBox: React.FC<SkillProps> = ({
  name,
  icon,
  color,
  setBorderColor,
}) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

  return (
    <Tooltip
      aria-label={name}
      label={name}
      isOpen={isOpen}
      placement='bottom'
      gutter={-8}
      shouldWrapChildren
    >
      <Center
        p='1'
        boxSize='16'
          bg='rgba(255, 255, 255, 0.08)'
          backdropFilter='blur(12px)'
          border='1px solid'
          borderColor='rgba(255, 255, 255, 0.16)'
          borderRadius='xl'
        onMouseEnter={() => {
          setBorderColor(color)
          onOpen()
        }}
        onMouseLeave={() => {
          setBorderColor('border')
          onClose()
        }}
        onClick={onToggle}
      >
        <Icon as={icon} aria-label={name} boxSize='8' color={color} />
      </Center>
    </Tooltip>
  )
}
