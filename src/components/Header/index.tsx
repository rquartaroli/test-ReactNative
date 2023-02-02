import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

type HeaderProps = {
  variant?: 'welcome' | 'status'
  actionPress: () => void
}

export function Header({ variant = 'welcome', actionPress }: HeaderProps) {
  return (
    <S.Container>
      <S.Content>
        {
          variant === 'welcome'
          ?
          <>
            <S.WelcomeText>Olá, bem-vindo</S.WelcomeText>
            <S.StatusButton onPress={actionPress}>
              <S.TextButtonStatus>Status</S.TextButtonStatus>
            </S.StatusButton>
          </>
          :
          <>
            <S.StatusButton onPress={actionPress}>
              <S.TextButtonStatus>Voltar</S.TextButtonStatus>
            </S.StatusButton>
            <S.WelcomeText>Status</S.WelcomeText>
            <View />
          </>
        }
      </S.Content>
    </S.Container>
  );
}