import type { Meta, StoryObj } from '@storybook/angular';
import { MfsUi } from './mfs-ui';
import { expect } from 'storybook/test';

const meta: Meta<MfsUi> = {
  component: MfsUi,
  title: 'MfsUi',
};
export default meta;

type Story = StoryObj<MfsUi>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/mfs-ui/gi)).toBeTruthy();
  },
};
