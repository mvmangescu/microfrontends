import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { Button } from './button';
import { Icon } from '../icon/icon';

const meta: Meta<Button> = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'The variant of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'The type of the button',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should be full width',
    },
  },
};
export default meta;
type Story = StoryObj<Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template:
      '<mfs-button [variant]="variant" [size]="size" [disabled]="disabled">Primary</mfs-button>',
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template:
      '<mfs-button [variant]="variant" [size]="size" [disabled]="disabled">Secondary</mfs-button>',
  }),
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template:
      '<mfs-button [variant]="variant" [size]="size" [disabled]="disabled">Outline</mfs-button>',
  }),
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template:
      '<mfs-button [variant]="variant" [size]="size" [disabled]="disabled">Ghost</mfs-button>',
  }),
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template:
      '<mfs-button [variant]="variant" [size]="size" [disabled]="disabled">Danger</mfs-button>',
  }),
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template:
      '<mfs-button [variant]="variant" [size]="size" [disabled]="disabled">Small</mfs-button>',
  }),
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template:
      '<mfs-button [variant]="variant" [size]="size" [disabled]="disabled">Medium</mfs-button>',
  }),
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template:
      '<mfs-button [variant]="variant" [size]="size" [disabled]="disabled">Large</mfs-button>',
  }),
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template:
      '<mfs-button [variant]="variant" [size]="size" [disabled]="disabled">Disabled</mfs-button>',
  }),
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    fullWidth: true,
  },
  render: (args) => ({
    props: args,
    template:
      '<mfs-button [variant]="variant" [size]="size" [disabled]="disabled" [fullWidth]="fullWidth">Full Width</mfs-button>',
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; padding: 1rem;">
        <div style="display: flex; gap: 1rem;">
          <mfs-button variant="primary">Primary</mfs-button>
          <mfs-button variant="secondary">Secondary</mfs-button>
          <mfs-button variant="outline">Outline</mfs-button>
          <mfs-button variant="ghost">Ghost</mfs-button>
          <mfs-button variant="danger">Danger</mfs-button>
        </div>
        <div style="display: flex; gap: 1rem;">
          <mfs-button variant="primary" disabled>Primary</mfs-button>
          <mfs-button variant="secondary" disabled>Secondary</mfs-button>
          <mfs-button variant="outline" disabled>Outline</mfs-button>
          <mfs-button variant="ghost" disabled>Ghost</mfs-button>
          <mfs-button variant="danger" disabled>Danger</mfs-button>
        </div>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem;">
        <mfs-button size="sm">Small</mfs-button>
        <mfs-button size="md">Medium</mfs-button>
        <mfs-button size="lg">Large</mfs-button>
      </div>
    `,
  }),
};

export const WithIcons: Story = {
  decorators: [
    moduleMetadata({
      imports: [Icon],
    }),
  ],
  render: () => ({
    template: `
      <div style="display: flex; gap: 1rem; padding: 1rem;">
        <mfs-button variant="primary">
          <mfs-icon name="home" size="sm"></mfs-icon>
          <span>Home</span>
        </mfs-button>
        <mfs-button variant="secondary">
          <mfs-icon name="user" size="sm"></mfs-icon>
          <span>Profile</span>
        </mfs-button>
        <mfs-button variant="outline">
          <mfs-icon name="settings" size="sm"></mfs-icon>
          <span>Settings</span>
        </mfs-button>
        <mfs-button variant="danger">
          <mfs-icon name="close" size="sm"></mfs-icon>
          <span>Delete</span>
        </mfs-button>
      </div>
    `,
  }),
};
