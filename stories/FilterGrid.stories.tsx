import { StoryFn, Meta } from '@storybook/react';

import { FilterGrid } from '@shared/components/FilterGrid';

import {
  productMock,
  departmentMock,
  divisionMock,
} from '../src/shared/components/FilterGrid/mock';

export default {
  title: 'FilterGrid',
  component: FilterGrid,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta<typeof FilterGrid>;

const Template: StoryFn<typeof FilterGrid> = (args) => <FilterGrid {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  filtersData: [{ selectData: productMock, label: 'Product', required: true }],
};

export const RegularWithTwoSelects = Template.bind({});
RegularWithTwoSelects.args = {
  filtersData: [
    { selectData: productMock, label: 'Product', required: true },
    { selectData: departmentMock, label: 'Department' },
  ],
};

export const RegularWithThreeSelects = Template.bind({});
RegularWithThreeSelects.args = {
  filtersData: [
    { selectData: productMock, label: 'Product', required: true },
    {
      selectData: departmentMock,
      label: 'Department',
      required: true,
    },
    {
      selectData: divisionMock,
      label: 'Division',
    },
  ],
};
