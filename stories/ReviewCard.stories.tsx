import { StoryFn, Meta } from '@storybook/react';

import { ReviewCard } from '@shared/components/ReviewCard';

import { FieldProps } from '@shared/components/DynamicForm/types';
import {
  reviewCardfieldsMock,
  reviewCardStateInfosMock,
} from '../src/shared/components/ReviewCard/mock';

export default {
  title: 'ReviewCard',
  component: ReviewCard,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta<typeof ReviewCard>;

const Template: StoryFn<typeof ReviewCard> = (args) => <ReviewCard {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  label: 'Cardholder data',
  fields: reviewCardfieldsMock as FieldProps[],
  cardholderInfos: reviewCardStateInfosMock,
};
