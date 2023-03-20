import { StoryFn, Meta } from '@storybook/react';
import { IconButton, IconButtonProps } from '@shared/components/IconButton';
import { Print } from '../src/assets/svg/hsbc_icons/print';

export default {
  title: 'IconButton',
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: 'radio',
      options: [true, false],
    },
  },
} as Meta<typeof IconButton>;

const Template: StoryFn<typeof IconButton> = ({
  children,
  ...args
}: IconButtonProps) => <IconButton {...args}>{children}</IconButton>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: <Print />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: <Print />,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  children: <Print />,
};
