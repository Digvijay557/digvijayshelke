import { useTranslation } from 'next-i18next'
import {
  AspectRatio,
  Image,
  HStack,
  Skeleton,
  Text,
  Box,
  LinkBox,
  LinkOverlay,
  Flex,
} from '@chakra-ui/react'
import { usePostHog } from 'posthog-js/react'
import type { Raindrop } from '@data/bookmarks'

export const Bookmark: React.FC<Raindrop> = ({ title, link, cover, tags }) => {
  const { t } = useTranslation('bookmarks')
  const posthog = usePostHog()
  const bookmarkTags = tags.length ? tags : ['general']

  return (
    <LinkBox
      as='article'
      bg='rgba(255, 255, 255, 0.06)'
      backdropFilter='blur(14px)'
      borderColor='border'
      border='1px solid'
      boxShadow='0 16px 45px rgba(0, 0, 0, 0.14)'
      role='group'
    >
      <Flex h='full' flexDir='column' align='stretch'>
        <Box position='relative' borderColor='border' borderBottom='1px solid'>
          <AspectRatio w='full' ratio={16 / 9}>
            <Image
              src={cover}
              alt={title}
              fallback={<Skeleton />}
              rounded='sm'
            />
          </AspectRatio>
          <Flex
            display='none'
            position='absolute'
            align='center'
            justify='center'
            left='0'
            right='0'
            top='0'
            bottom='0'
            bg='blackAlpha.600'
            _groupHover={{ display: 'flex' }}
          >
            <Text fontWeight='bold' color='white' letterSpacing='wide'>
              {t('visit')}
            </Text>
          </Flex>
        </Box>
        <Text fontWeight='semibold' py='3' px='3'>
          <LinkOverlay
            href={link}
            onClick={() => posthog.capture('bookmark_clicked', { title, link })}
            isExternal
          >
            {title}
          </LinkOverlay>
        </Text>
        <HStack mt='auto' px='3' pb='3'>
          {bookmarkTags.map((tag) => (
            <Text key={tag} casing='uppercase' fontSize='xs' color='gray.600'>
              {tag}
            </Text>
          ))}
        </HStack>
      </Flex>
    </LinkBox>
  )
}
