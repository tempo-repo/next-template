import { z } from 'zod';

import { openEndedString } from './zod';

const envSchema = z.object({
  NODE_ENV: openEndedString('development', 'production').optional(),
});

export const env = envSchema.parse(process.env);
