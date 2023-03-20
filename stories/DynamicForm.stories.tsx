import { StoryFn, Meta } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { DynamicForm } from '@shared/components/DynamicForm';
import { FormDataProps } from '@shared/components/DynamicForm/types';
import { formData } from '../src/features/CreateCardholder/presentation/pages/Details/formData';

export default {
  title: 'DynamicForm',
  component: DynamicForm,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta<typeof DynamicForm>;

const Template: StoryFn<typeof DynamicForm> = (args) => (
  <MemoryRouter initialEntries={['/']}>
    <Routes>
      <Route path="/" element={<DynamicForm {...args} />} />
    </Routes>
  </MemoryRouter>
);

export const Regular = Template.bind({});
Regular.args = {
  calcHeight: '12rem',
  formData: formData as unknown as FormDataProps[],
  formValues: {
    product: 'Corporate',
    department: 'Human Resources',
    fullName: 'Mateus Coutinho',
    gender: 'male',
    mothersName: 'Maria Antônio',
    nationality: 'Brazillian',
    documentId: '00.000.000-00',
    issuingAuthority: 'SSP',
    taxIdCpf: 'XXX.XXX.XXX-XX',
    mobilePhoneNumber: '(00) 00000-0000',
    homePhoneNumber: '(00) 00000-0000',
    workPhoneNumber: '(00) 00000-0000',
    zipCode: '12560-000',
    address: 'Santos Dumount',
    number: '87',
    neighborhood: 'Interlagos',
    cityState: 'São Paulo - SP',
    complement: 'Complement',
  },
  nextRoute: '/',
};
