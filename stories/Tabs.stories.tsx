import { Accordion, AccordionProps } from '@shared/components/Accordion';
import { Input } from '@shared/components/Input';
import { TextArea } from '@shared/components/TextArea';
import { StoryFn, Meta } from '@storybook/react';
import { Typography } from '@mui/material';
import {
  CustomTabs,
  CustomTitleTab,
  TabsComponentProps,
} from '../src/shared/components/Tabs';

export default {
  title: 'Tabs',
} as Meta<typeof CustomTabs>;

const Template: StoryFn<typeof CustomTabs> = ({
  label,
  childrens,
  orientation,
}: TabsComponentProps) => (
  <CustomTabs label={label} childrens={childrens} orientation={orientation} />
);
const childrens: JSX.Element[] = [
  <>
    <CustomTitleTab label="teste" disabled />
    <Typography>The first tab</Typography>
    <Typography>The first tab</Typography>
  </>,
  <Typography key={1}>The second tab</Typography>,
  <Typography key={2}>The third tab</Typography>,
];
export const Regular = Template.bind({});
Regular.args = {
  label: ['tab1', 'tab2', 'tab3'],
  childrens,
};

export const VerticalTab = Template.bind({});
VerticalTab.args = {
  label: ['vertical 1', 'vertical 2', 'vertical 3'],
  childrens,
  orientation: 'vertical',
};
