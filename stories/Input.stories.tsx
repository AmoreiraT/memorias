import { StoryFn, Meta } from '@storybook/react';
import { Input, InputProps } from '@shared/components/Input';
import { Calendar } from '../src/assets/svg/hsbc_icons/calendar';

export default {
  title: 'Input',
  args: {
    fullWidth: false,
  },
  argTypes: {
    fullWidth: {
      control: 'radio',
      options: [true, false],
    },
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = ({
  children,
  label,
  fullWidth,
  error,
  ...inputProps
}: InputProps) => (
  <Input fullWidth={fullWidth} label={label} error={error} {...inputProps}>
    {children}
  </Input>
);

export const Regular = Template.bind({});
Regular.args = {
  placeholder: 'Placeholder...',
  label: 'Regular',
};

export const RegularDisabled = Template.bind({});
RegularDisabled.args = {
  placeholder: 'Placeholder...',
  disabled: true,
  label: 'Regular disabled',
};

export const RegularError = Template.bind({});
RegularError.args = {
  placeholder: 'Placeholder...',
  label: 'Regular error',
  error: 'Error message',
};

export const RegularWithIcon = Template.bind({});
RegularWithIcon.args = {
  children: <Calendar />,
  placeholder: 'Placeholder...',
  label: 'With icon',
};

export const RegularWithIconDisabled = Template.bind({});
RegularWithIconDisabled.args = {
  children: <Calendar />,
  placeholder: 'Placeholder...',
  disabled: true,
  label: 'With icon disabled',
};

export const RegularWithIconError = Template.bind({});
RegularWithIconError.args = {
  children: <Calendar />,
  placeholder: 'Placeholder...',
  label: 'Error with icon',
  error: 'Error message',
};

export const RegularWithBtn = Template.bind({});
RegularWithBtn.args = {
  children: (
    <button type="button" onClick={() => alert('clicked')}>
      <Calendar />
    </button>
  ),

  placeholder: 'Placeholder...',
  label: 'With button',
};

export const RegularWithBtnDisabled = Template.bind({});
RegularWithBtnDisabled.args = {
  children: (
    <button type="button" onClick={() => alert('clicked')}>
      <Calendar />
    </button>
  ),
  placeholder: 'Placeholder...',
  disabled: true,
  label: 'With button disabled',
};

export const RegularWithBtnError = Template.bind({});
RegularWithBtnError.args = {
  children: (
    <button type="button" onClick={() => alert('clicked')}>
      <Calendar />
    </button>
  ),
  placeholder: 'Placeholder...',
  label: 'Error with button',
  error: 'Error message',
};

export const Number = Template.bind({});
Number.args = {
  placeholder: 'Placeholder...',
  label: 'Number',
  type: 'number',
};

export const NumberWithIcon = Template.bind({});
NumberWithIcon.args = {
  children: (
    <button type="button" onClick={() => alert('clicked')}>
      <Calendar />
    </button>
  ),
  placeholder: 'Placeholder...',
  label: 'Number with icon',
  type: 'number',
};
