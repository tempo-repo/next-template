'use client';

import { useTheme } from '@teispace/next-themes';
import clsx from 'clsx';
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
      <div className={'whitespace-break-spaces'}>
        {JSON.stringify(
          {
            // Change env interface at configs/declarations/env.d.ts
            env: process.env.NEXT_PUBLIC_VAR,
          },
          null,
          2,
        )}
      </div>

      <div
        className={clsx(
          exampleViewVariants({
            variant,
          }),
        )}
      >
        Hello, {message}!
        <div>
          <button onClick={() => setTheme('light')}>Set light theme</button>
          <button onClick={() => setTheme('dark')}>Set dark theme</button>
        </div>
      </div>
    </>
  );
};
