import type { FieldAlikeComponent, Morphable } from '@ui/kit';

export type ButtonProps<C extends FieldAlikeComponent = 'button'> =
  Morphable<C>;
