import styled, { css } from 'styled-components/native';

type ActiveProps = {
 isActive: boolean
}

export const Container = styled.TouchableOpacity<ActiveProps>`
 ${({ theme, isActive = false }) => css`
   width: 70px;
   height: 60px;
   justify-content: center;
   align-items: center;
   border-radius: 4px;
   margin-right: 8px;
   ${isActive
    ?
    css`
      background-color: ${theme.colors.green100};
      border: 1px solid ${theme.colors.green500};
    `
    :
    css`
      background-color: transparent;
      border: 1px solid ${theme.colors.gray300};
    `
    }
   
 `}
`;

export const NumberInterval = styled.Text<ActiveProps>`
  ${({ theme, isActive = false }) => css`
  font-size: ${theme.fonts.sizes.lg}px;
  ${isActive 
  ? 
    css`color: ${theme.colors.gray700};` 
  :
    css`color: ${theme.colors.gray500};` 
  }
 `}
`