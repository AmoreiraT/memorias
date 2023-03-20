import { StoryFn, Meta } from '@storybook/react';

import { RadioButtonsGroup } from '@shared/components/RadioButtonsGroup';

import { radiosMock } from '../src/shared/components/RadioButtonsGroup/mock';

export default {
  title: 'RadioButtonsGroup',
  component: RadioButtonsGroup,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta<typeof RadioButtonsGroup>;

const Template: StoryFn<typeof RadioButtonsGroup> = (args) => (
  <RadioButtonsGroup {...args} />
);

export const Regular = Template.bind({});
Regular.args = {
  required: true,
  label: 'Label',
  width: '36rem',
  options: radiosMock,
};

export const RegularInline = Template.bind({});
RegularInline.args = {
  inline: true,
  required: true,
  label: 'Label',
  width: '36rem',
  options: radiosMock,
};

export const RegularWithError = Template.bind({});
RegularWithError.args = {
  required: true,
  label: 'Label',
  width: '36rem',
  options: radiosMock,
  error: 'Is required',
};

export const RegularInlineWithError = Template.bind({});
RegularInlineWithError.args = {
  inline: true,
  required: true,
  label: 'Label',
  width: '36rem',
  options: radiosMock,
  error: 'Is required',
};
