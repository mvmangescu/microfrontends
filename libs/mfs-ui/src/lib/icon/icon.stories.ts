import type { Meta, StoryObj } from '@storybook/angular';
import { Icon } from './icon';

const meta: Meta<Icon> = {
  component: Icon,
  title: 'Icon',
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: ['home', 'user', 'settings', 'menu', 'close', 'check', 'arrow-right', 'arrow-left'],
      description: 'The name of the icon to display',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'The size of the icon',
    },
    color: {
      control: 'color',
      description: 'The color of the icon (defaults to currentColor)',
    },
  },
};

export default meta;
type Story = StoryObj<Icon>;

export const Default: Story = {
  args: {
    name: 'home',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    name: 'home',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    name: 'home',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    name: 'home',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    name: 'home',
    size: 'xl',
  },
};

export const CustomColor: Story = {
  args: {
    name: 'check',
    size: 'lg',
    color: '#10b981',
  },
};

export const AllIcons: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; padding: 1rem;">
        <div style="text-align: center;">
          <lib-icon name="home" size="lg"></lib-icon>
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">home</p>
        </div>
        <div style="text-align: center;">
          <lib-icon name="user" size="lg"></lib-icon>
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">user</p>
        </div>
        <div style="text-align: center;">
          <lib-icon name="settings" size="lg"></lib-icon>
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">settings</p>
        </div>
        <div style="text-align: center;">
          <lib-icon name="menu" size="lg"></lib-icon>
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">menu</p>
        </div>
        <div style="text-align: center;">
          <lib-icon name="close" size="lg"></lib-icon>
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">close</p>
        </div>
        <div style="text-align: center;">
          <lib-icon name="check" size="lg"></lib-icon>
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">check</p>
        </div>
        <div style="text-align: center;">
          <lib-icon name="arrow-right" size="lg"></lib-icon>
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">arrow-right</p>
        </div>
        <div style="text-align: center;">
          <lib-icon name="arrow-left" size="lg"></lib-icon>
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">arrow-left</p>
        </div>
      </div>
    `,
  }),
};

export const SizeComparison: Story = {
  render: () => ({
    template: `
      <div style="display: flex; align-items: center; gap: 2rem; padding: 1rem;">
        <div style="text-align: center;">
          <lib-icon name="home" size="sm"></lib-icon>
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">Small</p>
        </div>
        <div style="text-align: center;">
          <lib-icon name="home" size="md"></lib-icon>
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">Medium</p>
        </div>
        <div style="text-align: center;">
          <lib-icon name="home" size="lg"></lib-icon>
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">Large</p>
        </div>
        <div style="text-align: center;">
          <lib-icon name="home" size="xl"></lib-icon>
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">Extra Large</p>
        </div>
      </div>
    `,
  }),
};

export const WithColors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 1rem; padding: 1rem;">
        <lib-icon name="check" size="xl" color="#10b981"></lib-icon>
        <lib-icon name="close" size="xl" color="#ef4444"></lib-icon>
        <lib-icon name="settings" size="xl" color="#3b82f6"></lib-icon>
        <lib-icon name="user" size="xl" color="#8b5cf6"></lib-icon>
      </div>
    `,
  }),
};
