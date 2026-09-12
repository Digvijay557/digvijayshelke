import { useTranslation } from 'next-i18next'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { usePostHog } from 'posthog-js/react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ButtonArrow } from '@components/meta'
import { env } from '@config/browser.env'

const MotionHeading = motion.create(Heading)
const MotionVStack = motion.create(VStack)

const ContactMeSchema = z
  .object({
    email: z.string().email(),
    message: z.string().min(1),
  })
  .strict()

type ContactMeData = z.infer<typeof ContactMeSchema>

export const ContactMe: React.FC = () => {
  const { t } = useTranslation('common')
  const posthog = usePostHog()
  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactMeData>({
    resolver: zodResolver(ContactMeSchema),
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (!env.NEXT_PUBLIC_FORMSPREE_URL) {
        throw new Error('Form endpoint is not configured')
      }

      const response = await fetch(env.NEXT_PUBLIC_FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Contact form submission failed')

      posthog.capture('contact_form_submitted_successfully', {
        email: data.email,
      })

      posthog.identify(data.email)

      toast({
        title: t('message-sent'),
        description: t('message-text'),
        status: 'success',
        duration: 7500,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: t('message-error'),
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  })

  return (
    <Stack
      as='section'
      id='contact'
      direction={{ base: 'column', md: 'row' }}
      py='20'
      px={{ base: '4', md: '8' }}
      borderColor='border'
      borderTop='1px solid'
      spacing={{ base: '16', md: '4', xl: '2' }}
      scrollMarginTop='calc(var(--chakra-sizes-header-height) - 1px)'
    >
      <MotionHeading
        as='h2'
        flex='1'
        variant='section'
        size='2xl'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {t('contact-me')}
      </MotionHeading>
      <MotionVStack
        as='form'
        onSubmit={onSubmit}
        flex='1'
        spacing='6'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      >
        <FormControl isInvalid={!!errors.email}>
          <FormLabel>{t('email')}</FormLabel>
          <Input placeholder={t('email-placeholder')} {...register('email')} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.message}>
          <FormLabel>{t('message')}</FormLabel>
          <Textarea
            minH='40'
            placeholder={t('message-placeholder')}
            {...register('message')}
          />
          <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
        </FormControl>
        <Button
          aria-label={t('send')}
          alignSelf='flex-start'
          variant='block'
          isLoading={isSubmitting}
          type='submit'
          sx={{
            '&:hover svg': {
              transform: 'scaleX(1)',
            },
          }}
        >
          <span>{t('send')}</span>
          <ButtonArrow
            right='-7.5rem'
            pos='absolute'
            transform='scaleX(0)'
            transformOrigin='left'
            transition='transform 0.2s ease-in-out, fill 0.2s ease-in-out'
          />
        </Button>
        <Button
          as='a'
          href='https://wa.me/919960150439'
          target='_blank'
          rel='noopener noreferrer'
          alignSelf='flex-start'
          variant='block'
        >
          {t('whatsapp')}
        </Button>
      </MotionVStack>
    </Stack>
  )
}
