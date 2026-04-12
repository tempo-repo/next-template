import type { Meta } from '@storybook/nextjs-vite';

import { StoryBuilder } from '@/utils/storybook';

import { LimitedContainer } from './LimitedContainer';

const meta = {
  title: 'Containers/Limited container',
  component: LimitedContainer,
  tags: ['autodoc'],
  parameters: {
    // layout: 'centered',
  },
} satisfies Meta<typeof LimitedContainer>;

export default meta;

const builder = new StoryBuilder<typeof LimitedContainer>()
  .defineMeta(meta)
  .defineSharedProps({
    className: 'bg-red-500',
    children: <p>Container</p>,
  });

export const Base = builder.buildStory({});
