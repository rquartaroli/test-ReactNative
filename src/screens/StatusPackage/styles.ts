import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px 16px;
`

export const Hr = styled.View`
  ${({ theme }) => css`
    border: 0.5px solid ${theme.colors.gray300};
  `}
`