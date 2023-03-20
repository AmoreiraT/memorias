import { StoryFn, Meta } from '@storybook/react';

import { SummaryCard } from '@shared/components/SummaryCard';

export default {
  title: 'SummaryCard',
  component: SummaryCard,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta<typeof SummaryCard>;

const Template: StoryFn<typeof SummaryCard> = (args) => (
  <div style={{ maxWidth: '50rem' }}>
    <SummaryCard {...args} />
  </div>
);

export const Regular = Template.bind({});
Regular.args = {
  nationalPurchasesValue: 'R$ 800.000,00',
  internationalPurchasesValue: 'R$ 200.000,00',
  taxsValue: 'R$ 0,00',
  usedLimitValue: 'R$ 1.000.000,00',
  maxLimitValue: 'R$ 1.000.000,00',
  remainingimitValue: 'R$ 0,00',
};
