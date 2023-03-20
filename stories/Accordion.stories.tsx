import { Accordion, AccordionProps } from '@shared/components/Accordion';
import { Input } from '@shared/components/Input';
import { TextArea } from '@shared/components/TextArea';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Accordion',
} as Meta<typeof Accordion>;

const Template: StoryFn<typeof Accordion> = ({
  title,
  children,
}: AccordionProps) => <Accordion title={title}>{children}</Accordion>;

const ComponentChildren = () => {
  return (
    <div>
      <Input label="Caso" />
      <TextArea label="CNJ" />
    </div>
  );
};

export const Regular = Template.bind({});
Regular.args = {
  title: 'Título do Accordion',
  children: <ComponentChildren />,
};
