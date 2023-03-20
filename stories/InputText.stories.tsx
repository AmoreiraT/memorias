import { StoryFn, Meta } from '@storybook/react';

import { InputText } from '@shared/components/InputText';

export default {
  title: 'InputText',
  component: InputText,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta<typeof InputText>;

const Template: StoryFn<typeof InputText> = (args) => <InputText {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  required: true,
  label: 'Label',
  width: '36rem',
};

export const RegularInline = Template.bind({});
RegularInline.args = {
  inline: true,
  required: true,
  label: 'Label',
  width: '36rem',
  maxLength: 30,
  value: '',
};

export const RegularWithError = Template.bind({});
RegularWithError.args = {
  required: true,
  label: 'Label',
  width: '36rem',
  error: 'Is invalid.',
};

export const RegularInlineWithError = Template.bind({});
RegularInlineWithError.args = {
  inline: true,
  required: true,
  label: 'Label',
  width: '36rem',
  maxLength: 30,
  error: 'Is invalid.',
  value: '',
};
