import clsx from 'clsx';
import type { LucideIcon, LucideProps } from 'lucide-react';
import type { ElementType } from 'react';

import type { FieldAlikeComponent } from '@ui/kit';
import { Field } from '@ui/kit';

import type { ButtonProps } from './Button.props';

export function Button<C extends FieldAlikeComponent = 'button'>({
  as,
  className,
  children,
  leadingIcon: LeadingIcon = undefined,
  trailingIcon: TrailingIcon = undefined,
  ...props
}: ButtonProps<C>) {
  const Component: ElementType = as ?? ('button' as C);

  return (
    <Field
      as={Component}
      className={clsx(
        'cursor-pointer',
        'flex items-center justify-center gap-[0.8rem]',
        className,
      )}
      {...props}
    >
      <HandledIcon icon={LeadingIcon} />
      {children}
      <HandledIcon icon={TrailingIcon} />
    </Field>
  );
}

function HandledIcon({ icon: Icon }: { icon?: LucideIcon | null | undefined }) {
  const iconSize = 16;

  return !!Icon ? (
    <Icon
      size={iconSize}
      color={'currentColor'}
    />
  ) : Icon === null ? (
    <div
      style={{
        background: 'transparent',
        width: iconSize,
        height: iconSize,
      }}
      aria-hidden
    ></div>
  ) : undefined;
}
