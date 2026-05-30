'use client';

import clsx from 'clsx';
import { useTheme } from 'next-themes';
import type { FC } from 'react';

import type { ExampleViewProps } from './ExampleView.props';
import type { ExampleViewVariantsType } from './ExampleView.variants';
import { exampleViewVariants } from './ExampleView.variants';

export const ExampleView: FC<ExampleViewProps & ExampleViewVariantsType> = ({
  message = 'world',
  variant,
}) => {
  const { setTheme } = useTheme();

  return (
    <>
      <div
        className={clsx(
          exampleViewVariants({
            variant,
          }),
        )}
      >
        Hello, {message}!
        <div>
          <button
            data-testid={'set-light-theme'}
            onClick={() => setTheme('light')}
          >
            Set light theme
          </button>

          <button
            data-testid={'set-dark-theme'}
            onClick={() => setTheme('dark')}
          >
            Set dark theme
          </button>
        </div>
      </div>
    </>
  );
};
