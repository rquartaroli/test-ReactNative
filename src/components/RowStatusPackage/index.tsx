import React from 'react';

import * as S from './styles';

type RowStatusPackageProps = {
  idPackage: string
  hourPackage: string
  isCompleted: boolean
}

export function RowStatusPackage({ idPackage, hourPackage, isCompleted = false }: RowStatusPackageProps) {
  return (
    <S.Container>
      <S.WrapperLineTop>
        <S.TitleTextPackage>
          Pacote ID: {idPackage}
        </S.TitleTextPackage>
        <S.hourPackage>
          {hourPackage}
        </S.hourPackage>
      </S.WrapperLineTop>

      <S.SubTitleTextPackage>
        {isCompleted ? 'Sincronizado' : 'Pendente sincronizar'}
      </S.SubTitleTextPackage>
    </S.Container>
  );
}