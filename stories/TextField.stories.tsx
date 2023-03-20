import { StoryFn, Meta } from '@storybook/react';

import { TextFieldWLabel } from '@shared/components/TextField';
import { TextFieldProp } from '@shared/components/TextField/types';
import { Calendar } from '../src/assets/svg/hsbc_icons/calendar';

export default {
  title: 'TextField',
  args: {
    fullWidth: false,
  },
  argTypes: {
    fullWidth: {
      control: 'radio',
      options: [true, false],
    },
  },
} as Meta<typeof TextFieldWLabel>;

const Template: StoryFn<typeof TextFieldWLabel> = ({
  iconPrefix,
  label,
  placeholder,
  fullWidth,
  error,
  actionSufix,
  disabled,
  helperText,
}: TextFieldProp) => (
  <TextFieldWLabel
    fullWidth={fullWidth}
    placeholder={placeholder}
    label={label}
    iconPrefix={iconPrefix}
    error={error}
    actionSufix={actionSufix}
    disabled={disabled}
    helperText={helperText}
  >
    {iconPrefix}
  </TextFieldWLabel>
);

export const Regular = Template.bind({});
Regular.args = {
  placeholder: 'Placeholder...',
  label: 'Regular',
  id: 'demo-helper-text-misaligned',
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
  error: 'Aqui vai um erro',
};

export const RegularWithIcon = Template.bind({});
RegularWithIcon.args = {
  iconPrefix: <Calendar />,
  placeholder: 'Placeholder...',
  label: 'With icon',
};

export const RegularWithIconDisabled = Template.bind({});
RegularWithIconDisabled.args = {
  iconPrefix: <Calendar />,
  placeholder: 'Placeholder...',
  disabled: true,
  label: 'With icon disabled',
};

export const RegularWithIconError = Template.bind({});
RegularWithIconError.args = {
  iconPrefix: <Calendar />,
  placeholder: 'Placeholder...',
  label: 'Error with icon',
  error: 'Aqui vai um erro',
};

export const RegularWithBtn = Template.bind({});
RegularWithBtn.args = {
  actionSufix: (
    <button type="button" onClick={() => alert('clicked')}>
      <Calendar />
    </button>
  ),

  placeholder: 'Placeholder...',
  label: 'With button',
};

export const RegularWithBtnDisabled = Template.bind({});
RegularWithBtnDisabled.args = {
  actionSufix: (
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
  actionSufix: (
    <button type="button" onClick={() => alert('clicked')}>
      <Calendar />
    </button>
  ),
  placeholder: 'Placeholder...',
  label: 'Error with button',
  error: 'Aqui vai um erro',
};
export const IconAndBtn = Template.bind({});
IconAndBtn.args = {
  actionSufix: (
    <button type="button" onClick={() => alert('clicked')}>
      <Calendar />
    </button>
  ),
  iconPrefix: <Calendar />,
  placeholder: 'Placeholder...',
  label: 'Icon and Button',
};

export const Number = Template.bind({});
Number.args = {
  id: 'standard-number',
  placeholder: '1',
  actionSufix: (
    <button type="button" onClick={() => alert('clicked')}>
      <Calendar />
    </button>
  ),
  label: 'Number',
  type: 'number',
};

export const NumberWithIcon = Template.bind({});
NumberWithIcon.args = {
  actionSufix: (
    <button type="button" onClick={() => alert('clicked')}>
      <Calendar />
    </button>
  ),
  iconPrefix: <Calendar />,
  placeholder: '1',
  type: 'number',
  label: 'Number with icon',
};
