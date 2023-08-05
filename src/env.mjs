import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production'])
  },

  client: {
    NEXT_PUBLIC_URL: z.string().url().optional(),
    NEXT_PUBLIC_VERCEL_URL: z.string().url()
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION
});
