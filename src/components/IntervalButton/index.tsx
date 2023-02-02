import React from 'react';

import * as S from './styles';

type IntervalButtonProps = {
  seconds: '10s' | '5s' | '3s' | '1s'
  isActive?: boolean
  activePress: () => void 
}

export function IntervalButton({ seconds, isActive = false, activePress }: IntervalButtonProps) { 
  return (
    <S.Container isActive={isActive} onPress={activePress}>
      <S.NumberInterval isActive={isActive}>
        {seconds}
      </S.NumberInterval>
    </S.Container>
  );
}