import { CustomTitleTab } from '../Tabs';
import { ReviewCardProps } from './types';

import * as S from './styles';

export function ReviewCard({
  label,
  fields,
  cardholderInfos,
}: ReviewCardProps) {
  return (
    <S.Container>
      <S.LabelBox>
        <CustomTitleTab label={label} disabled />
      </S.LabelBox>

      <S.Content>
        {fields.map((field) => (
          <S.KeyText key={field.id}>
            {`${field.label}`}:
            <S.ValueText>{cardholderInfos[field.id]}</S.ValueText>
          </S.KeyText>
        ))}
      </S.Content>
    </S.Container>
  );
}
