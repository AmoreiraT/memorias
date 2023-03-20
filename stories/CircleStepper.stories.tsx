import { StoryFn, Meta } from '@storybook/react';

import { CircleStepper } from '@shared/components/CircleStepper';

import { stepsMock } from '@shared/components/CircleStepper/mock';

export default {
  title: 'CircleStepper',
  component: CircleStepper,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta<typeof CircleStepper>;

const Template: StoryFn<typeof CircleStepper> = (args) => (
  <CircleStepper {...args} />
);

export const StepOne = Template.bind({});
StepOne.args = {
  stepsList: stepsMock,
  stepNumber: 1,
};

export const StepTwo = Template.bind({});
StepTwo.args = {
  stepsList: stepsMock,
  stepNumber: 2,
};

export const StepThree = Template.bind({});
StepThree.args = {
  stepsList: stepsMock,
  stepNumber: 3,
};

export const StepFour = Template.bind({});
StepFour.args = {
  stepsList: stepsMock,
  stepNumber: 4,
};
