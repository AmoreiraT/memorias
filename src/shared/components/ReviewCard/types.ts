import {
  FieldProps,
  FormValuesProps,
} from '../../../features/CreateCardholder/presentation/types';

export interface ReviewCardProps {
  label: string;
  fields: FieldProps[];
  cardholderInfos: FormValuesProps;
}
