import { z } from 'zod';

const envSchema = z
  .object({
    CANONICAL_URL: z.url().optional(),
    PORT: z.coerce.number().default(3000),
  })
  .transform(({ CANONICAL_URL, PORT, ...rest }) => ({
    CANONICAL_URL: CANONICAL_URL ?? `http://localhost:${PORT}`,
    PORT,
    ...rest,
  }));

/**
 * Applies zod schema over process.env object.
 */
export const env = envSchema.parse(process.env);
