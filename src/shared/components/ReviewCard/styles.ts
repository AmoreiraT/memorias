import styled from 'styled-components';

import * as typography from '@shared/styles/typography';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const LabelBox = styled.div`
  margin-top: 3.2rem;
  margin-bottom: 1.6rem;
`;

export const KeyText = styled.span`
  ${typography.m2.body[2]}
`;

export const ValueText = styled.span`
  ${typography.m2.label.medium}
  color: black;
  margin-left: 0.6rem;
`;
