import { TextArea, TextAreaComponentProps } from '@shared/components/TextArea';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'TextArea',
} as Meta<typeof TextArea>;

const Template: StoryFn<typeof TextArea> = ({
  label,
  placeholder,
  helpText,
}: TextAreaComponentProps) => (
  <TextArea label={label} placeholder={placeholder} helpText={helpText} />
);

export const Regular = Template.bind({});
Regular.args = {
  label: 'Label do TextArea',
  placeholder: 'placeholder...',
};

export const WHelpText = Template.bind({});
WHelpText.args = {
  label: 'Label do TextArea',
  placeholder: 'placeholder...',
  helpText: 'help text...',
};
