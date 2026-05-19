import { z } from 'zod';

export function openEndedString<Literals extends string>(
  ...literals: Literals[]
) {
  const literalValues = z.union(literals.map(lit => z.literal(lit)));
  return z
    .union([literalValues, z.string()])
    .transform(val => val as Literals | (string & {}));
}
