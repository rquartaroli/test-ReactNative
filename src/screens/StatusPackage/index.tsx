import React from 'react';
import { Header } from '../../components/Header';
import { RowStatusPackage } from '../../components/RowStatusPackage';

import * as S from './styles';

export function StatusPackage() {

  function handleGoBack() {
    console.log("voltar para o dashboard");
  }

  return (
    <S.Container>
      <Header variant="status" actionPress={handleGoBack} />
      <S.Content>
        <S.Hr />
        <RowStatusPackage
          idPackage="XXXXX"
          hourPackage="11:32"
          isCompleted={false}
        />
        <RowStatusPackage
          idPackage="XXXXX"
          hourPackage="10:32"
          isCompleted={false}
        />
        <RowStatusPackage
          idPackage="XXXX"
          hourPackage="09:32"
          isCompleted={true}
        />
      </S.Content>
    </S.Container>
  );
}