import { z } from 'zod';

import { openEndedString } from './zod';

const envSchema = z.object({
  NODE_ENV: openEndedString('development', 'production').optional(),
  SERVER_SIDE_VAR: z.string().optional(),
  NEXT_PUBLIC_PUBLIC_VAR: z.string().optional(),
});

export const env = envSchema.parse(process.env);
