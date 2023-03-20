import { StoryFn, Meta } from '@storybook/react';

import { Select } from '@shared/components/Select';

import { selectDataMock } from '../src/shared/components/Select/mock';

export default {
  title: 'Select',
  component: Select,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => (
  <div style={{ maxWidth: '50rem' }}>
    <Select {...args} />
  </div>
);

export const Regular = Template.bind({});
Regular.args = {
  required: true,
  label: 'Label',
  options: selectDataMock,
};

export const RegularInline = Template.bind({});
RegularInline.args = {
  label: 'Label',
  inline: true,
  required: true,
  options: selectDataMock,
  width: '36rem',
};

export const RegularWithError = Template.bind({});
RegularWithError.args = {
  required: true,
  label: 'Label',
  options: selectDataMock,
  error: 'Is invalid.',
};

export const RegularInlineWithError = Template.bind({});
RegularInlineWithError.args = {
  label: 'Label',
  inline: true,
  required: true,
  options: selectDataMock,
  width: '36rem',
  error: 'Is invalid.',
};
