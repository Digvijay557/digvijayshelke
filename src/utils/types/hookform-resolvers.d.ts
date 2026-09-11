declare module '@hookform/resolvers/zod' {
  import type { Resolver } from 'react-hook-form'
  import type { z } from 'zod'

  export const zodResolver: <Schema extends z.ZodTypeAny>(
    schema: Schema
  ) => Resolver<z.infer<Schema>>
}
