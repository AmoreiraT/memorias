import styled from 'styled-components';
import * as typography from '@shared/styles/typography';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.neutral[100]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 2rem;

  gap: 2rem;
  padding: 2rem 4rem;

  @media (${({ theme }) => theme.media.medium}) {
    gap: 4rem;
    padding: 4rem 8rem;
    height: auto;
  }
`;

export const Logo = styled.img`
  height: auto;
  width: 20rem;
  @media (${({ theme }) => theme.media.medium}) {
    width: 28rem;
  }
`;

export const TitleLogin = styled.label`
  align-self: flex-start;
  ${typography.headline.large};
  color: ${({ theme }) => theme.color.primary[20]};
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
`;
