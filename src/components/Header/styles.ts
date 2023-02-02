import styled, { css } from 'styled-components/native';

export const Container = styled.View`
 ${({ theme }) => css`
   width: 100%;
   height: 112px;
   justify-content: flex-end;
   background-color: ${theme.colors.primary};
 `}
`;

export const Content = styled.View`
 ${({ theme }) => css`
   width: 100%;
   height: 80px;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   background-color: ${theme.colors.secondary};
   padding: 0 16px;
 `}
`;

export const WelcomeText = styled.Text`
  ${({ theme }) => css`
   color: ${theme.colors.gray300};
   font-size: ${theme.fonts.sizes.md}px;
 `}
`

export const StatusButton = styled.TouchableOpacity`
  color: white;
`

export const TextButtonStatus = styled.Text`
  ${({ theme }) => css`
    color: white;
    font-size: ${theme.fonts.sizes.md}px;
  `}
`
