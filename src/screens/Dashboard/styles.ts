import styled, { css } from 'styled-components/native';

export const Container = styled.View`
 ${({ theme }) => css`
   flex: 1;
 `}
`;

export const ContainerGPS = styled.View`
  ${({ theme }) => css`
   width: 100%;
   padding: 32px;
   flex-direction: row;
   align-items: center;
   border-bottom-width: 1px;
   border-color: ${theme.colors.gray300};
   border-style: solid;
 `}
`;

export const WrapperInfoStatusGPS = styled.View`
  margin-left: 16px;
`;

export const TitleGPS = styled.Text`
  ${({ theme }) => css`
   color: ${theme.colors.gray700};
   font-size: ${theme.fonts.sizes.lg}px;
   font-weight: 700;
 `}
`

export const StatusInfoGPS = styled.Text`
  ${({ theme }) => css`
   color: ${theme.colors.green500};
   font-size: ${theme.fonts.sizes.md}px;
   font-style: italic;
 `}
`

export const ContainerStatusService = styled.View`
  width: 100%;
  padding: 32px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperStatusService = styled.View``;

export const TitleService = styled.Text`
  ${({ theme }) => css`
   color: ${theme.colors.gray700};
   font-size: ${theme.fonts.sizes.lg}px;
 `}
`

export const InfoService = styled.Text`
  ${({ theme }) => css`
   color: ${theme.colors.gray500};
   font-size: ${theme.fonts.sizes.md}px;
 `}
`

export const ContainerComunication = styled.View`
  width: 100%;
  padding: 0 32px;
`;

export const WrapperInterval = styled.View`
  flex-direction: row;
`;

export const TitleComunication = styled.Text`
  ${({ theme }) => css`
   color: ${theme.colors.gray700};
   font-size: ${theme.fonts.sizes.lg}px;
   margin-bottom: 8px;
 `}
`
