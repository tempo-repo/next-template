import type { Meta } from '@storybook/nextjs-vite';

import { StoryBuilder } from '@/utils/storybook';

import { Button } from './Button';

const meta = {
  title: 'UI Kit / Button',
  component: Button,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;

const builder = new StoryBuilder().defineMeta(meta).defineSharedProps({
  children: 'Click me!',
  onClick: () => alert('You clicked.'),
});

export const Base = builder.buildStory({});
