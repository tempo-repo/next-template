import clsx from 'clsx';
import type { FC } from 'react';

import type { ExampleViewProps } from './ExampleView.props';
import type { ExampleViewVariantsType } from './ExampleView.variants';
import { exampleViewVariants } from './ExampleView.variants';

export const ExampleView: FC<ExampleViewProps & ExampleViewVariantsType> = ({
  message = 'world',
  variant,
}) => {
  return (
    <div
      className={clsx(
        exampleViewVariants({
          variant,
        }),
      )}
    >
      Hello, {message}!
    </div>
  );
};
