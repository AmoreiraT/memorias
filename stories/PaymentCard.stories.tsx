import { StoryFn, Meta } from '@storybook/react';

import { PaymentCard } from '@shared/components/PaymentCard';

export default {
  title: 'PaymentCard',
  component: PaymentCard,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta<typeof PaymentCard>;

const Template: StoryFn<typeof PaymentCard> = (args) => (
  <div style={{ maxWidth: '65rem' }}>
    <PaymentCard {...args} />
  </div>
);

export const BankSlipPayment = Template.bind({});
BankSlipPayment.args = {
  invoiceType: 'bank-slip-payment',
};

export const AutomaticDebitPayment = Template.bind({});
AutomaticDebitPayment.args = {
  invoiceType: 'automatic-debit-payment',
};
