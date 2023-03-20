import { StoryFn, Meta } from '@storybook/react';
import { Link } from '@mui/material';

import { DataGrid } from '@shared/components/DataGrid';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { dataGridMock } from '@features/CardHolders/presentation/mock';
import { ButtonsMock } from '../src/shared/components/DataGrid/mock';

export default {
  title: 'DataGrid',
  component: DataGrid,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta<typeof DataGrid>;

const Template: StoryFn<typeof DataGrid> = (args) => <DataGrid {...args} />;

export const Default = Template.bind({});
Default.args = { data: dataGridMock };

export const WithLink = Template.bind({});
WithLink.args = {
  data: dataGridMock,
  actions: {
    columnName: 'Actions',
    elements: [
      {
        id: 'link-id',
        element: (
          <Link href="http://#" style={{ color: 'black' }}>
            View
          </Link>
        ),
        onClick: (params) => alert(JSON.stringify({ link: params })),
      },
    ],
  },
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  data: dataGridMock,
  actions: {
    columnName: 'Options',
    align: 'center',
    elements: [
      {
        id: 'edit-id',
        element: <EditOutlinedIcon />,
        onClick: (params) => alert(JSON.stringify({ edit: params })),
      },
      {
        id: 'delete-id',
        element: <DeleteOutlineIcon />,
        onClick: (params) => alert(JSON.stringify({ edit: params })),
      },
    ],
  },
};

export const WithButtons = Template.bind({});
WithButtons.args = {
  data: dataGridMock,
  actions: {
    columnName: 'Options',
    align: 'center',
    cellWidth: 244,
    elements: [
      {
        id: 'buttons-id',
        element: (
          <ButtonsMock
            onButtonClick={(id, params) =>
              alert(JSON.stringify({ id, params }))
            }
          />
        ),
      },
    ],
  },
};
