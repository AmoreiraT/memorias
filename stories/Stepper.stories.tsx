import { StoryFn, Meta } from "@storybook/react";
import { Stepper, StepperProps } from "@shared/components/Stepper";

export default {
  title: "Stepper",
  component: Stepper,

  argTypes: {
    disabled: {
      defaultValue: false,
      control: "radio",
      options: [true, false],
    },
  },
} as Meta<typeof Stepper>;

const dados = [
  {
    id: 1,
    title: "Visualized",
    subTitle: "Short step description 1",
    pageStep: 1,
  },
  {
    id: 2,
    title: "Selected",
    subTitle: "Short step description 2",
    pageStep: 2,
  },
  {
    id: 3,
    title: "Next",
    subTitle: "Short step description 3",
    pageStep: 3,
  },
  {
    id: 4,
    title: "Next",
    subTitle: "Short step description 3",
    pageStep: 4,
  },
];

const dadosSemSubtitle = [
  {
    id: 1,
    title: "Visualized",
    pageStep: 1,
  },
  {
    id: 2,
    title: "Selected",
    pageStep: 2,
  },
  {
    id: 3,
    title: "Next",
    pageStep: 3,
  },
  {
    id: 4,
    title: "Next",
    pageStep: 4,
  },
];

const Template: StoryFn<typeof Stepper> = ({ ...args }: StepperProps) => (
  <Stepper {...args} />
);

export const WithTitle = Template.bind({});
WithTitle.args = {
  step: 2,
  data: dados,
};

export const LessSubtitle = Template.bind({});
LessSubtitle.args = {
  step: 2,
  data: dadosSemSubtitle,
};
