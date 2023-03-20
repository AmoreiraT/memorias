import { StoryFn, Meta } from '@storybook/react';

import { Notification } from '@shared/components/Notification';

export default {
  title: 'Notification',
  component: Notification,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta<typeof Notification>;

const Template: StoryFn<typeof Notification> = (args) => (
  <Notification {...args} />
);

export const RegularSuccess = Template.bind({});
RegularSuccess.args = {
  message: 'You have added a cardholder.',
};
