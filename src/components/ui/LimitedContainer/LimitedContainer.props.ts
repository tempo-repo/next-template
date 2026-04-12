import type { CSSProperties, ComponentProps, ElementType } from 'react';

export type LimitedContainerProps<
  AsType extends ElementType<{
    className?: string;
    style?: CSSProperties;
  }>,
> = {
  as?: AsType;
} & ComponentProps<AsType> & {
    maxSize?: string;
    insets?: string;
  };
