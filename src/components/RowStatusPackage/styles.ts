import styled, { css } from 'styled-components/native';

export const Container = styled.View`
 ${({ theme }) => css`
   width: 100%;
   padding: 16px 0;
   border-bottom-width: 1px;
   border-color: ${theme.colors.gray300};
   border-style: solid;
 `}
`;

export const WrapperLineTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 6px;
`

export const TitleTextPackage = styled.Text`
  ${({ theme }) => css`
   color: ${theme.colors.gray700};
   font-size: ${theme.fonts.sizes.lg}px;
 `}
`

export const hourPackage = styled.Text`
  ${({ theme }) => css`
   color: ${theme.colors.gray300};
   font-size: ${theme.fonts.sizes.md}px;
 `}
`

export const SubTitleTextPackage = styled.Text`
  ${({ theme }) => css`
   color: ${theme.colors.gray700};
   font-size: ${theme.fonts.sizes.md}px;
 `}
`
