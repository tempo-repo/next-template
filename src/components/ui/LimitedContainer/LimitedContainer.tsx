import clsx from 'clsx';
import type { CSSProperties, ElementType } from 'react';

import type { LimitedContainerProps } from './LimitedContainer.props';

export function LimitedContainer<
  AsType extends ElementType<{
    className?: string;
    style?: CSSProperties;
  }> = 'section',
>({
  as,
  maxSize = '500px',
  insets = '2.5rem',
  className,
  style,
  ...props
}: LimitedContainerProps<AsType>) {
  // Default element type is section.
  const Element: ElementType = as ?? 'section';
  return (
    <Element
      style={{
        width: `min(${maxSize}, calc(100% - 2 * ${insets}))`,
        ...style,
      }}
      className={clsx(className)}
      {...props}
    />
  );
}
