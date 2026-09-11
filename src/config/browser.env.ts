import { envsafe, str } from 'envsafe'

export const env = envsafe({
  NEXT_PUBLIC_CLOUDFLARE_TOKEN: str({
    input: process.env.NEXT_PUBLIC_CLOUDFLARE_TOKEN,
    allowEmpty: true,
    default: '',
  }),
  NEXT_PUBLIC_FORMSPREE_URL: str({
    input: process.env.NEXT_PUBLIC_FORMSPREE_URL,
    allowEmpty: true,
    default: '',
  }),
  NEXT_PUBLIC_POSTHOG_KEY: str({
    input: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    allowEmpty: true,
    default: '',
  }),
})
