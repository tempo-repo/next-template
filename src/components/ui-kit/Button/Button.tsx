import clsx from 'clsx';
import type { ElementType } from 'react';

import type { FieldAlikeComponent } from '@ui/kit';
import { Field } from '@ui/kit';

import type { ButtonProps } from './Button.props';

export function Button<C extends FieldAlikeComponent = 'button'>({
  as,
  className,
  children,
  ...props
}: ButtonProps<C>) {
  const Component: ElementType = as ?? ('button' as C);
  return (
    <Field
      as={Component}
      className={clsx('cursor-pointer', className)}
      {...props}
    >
      {children}
    </Field>
  );
}
