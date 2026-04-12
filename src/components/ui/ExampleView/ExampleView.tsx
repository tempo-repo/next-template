import type { FC } from 'react';

import type { ExampleViewProps } from './ExampleView.props';

export const ExampleView: FC<ExampleViewProps> = ({ message = 'world' }) => {
  return <div>Hello, {message}!</div>;
};
