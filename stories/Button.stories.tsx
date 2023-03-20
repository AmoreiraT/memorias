import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from '@shared/components/Button';
import { Calendar } from '../src/assets/svg/hsbc_icons/calendar';

export default {
  title: 'Button',
  args: {
    disabled: false,
    fullWidth: false,
  },
  argTypes: {
    disabled: {
      control: 'radio',
      options: [true, false],
    },
    fullWidth: {
      control: 'radio',
      options: [true, false],
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({
  children,
  ...args
}: ButtonProps) => <Button {...args}>{children}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Button label',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  variant: 'primary',
  children: (
    <>
      <Calendar /> Button
    </>
  ),
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Button label',
};

export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
  variant: 'secondary',
  children: (
    <>
      <Calendar /> Button label
    </>
  ),
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  children: 'Button label',
};

export const TertiaryWithIcon = Template.bind({});
TertiaryWithIcon.args = {
  variant: 'tertiary',
  children: (
    <>
      <Calendar /> Button label
    </>
  ),
};
