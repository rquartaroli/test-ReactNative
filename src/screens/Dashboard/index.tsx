import React, { useState } from 'react';
import { Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Header } from '../../components/Header';
import { IntervalButton } from '../../components/IntervalButton';

import * as S from './styles';

export function Dashboard() {
  const theme = useTheme();
  const [isTenSecondsActive, setIsTenSecondsActive] = useState(true);
  const [isFiveSecondsActive, setIsFiveSecondsActive] = useState(false);
  const [isThreeSecondsActive, setIsThreeSecondsActive] = useState(false);
  const [isOneSecondActive, setIsOneSecondActive] = useState(false);

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  function handleGoStatusScreen() {
    console.log('vai ir para a status screen')
  }

  function handleChangeActiveButtonTen() {
    if(!isTenSecondsActive)  {
      setIsTenSecondsActive(true)
      setIsFiveSecondsActive(false)
      setIsThreeSecondsActive(false)
      setIsOneSecondActive(false)
    }
  }

  function handleChangeActiveButtonFive() {
    if(!isFiveSecondsActive)  {
      setIsTenSecondsActive(false)
      setIsFiveSecondsActive(true)
      setIsThreeSecondsActive(false)
      setIsOneSecondActive(false)
    }
  }

  function handleChangeActiveButtonThree() {
    if(!isThreeSecondsActive)  {
      setIsTenSecondsActive(false)
      setIsFiveSecondsActive(false)
      setIsThreeSecondsActive(true)
      setIsOneSecondActive(false)
    }
  }

  function handleChangeActiveButtonOne() {
    if(!isOneSecondActive)  {
      setIsTenSecondsActive(false)
      setIsFiveSecondsActive(false)
      setIsThreeSecondsActive(false)
      setIsOneSecondActive(true)
    }
  }

  return (
    <S.Container>
      <Header actionPress={handleGoStatusScreen}/>
      <S.ContainerGPS>
        <Feather name="compass" size={55} color={theme.colors.secondary} />
        <S.WrapperInfoStatusGPS>
          <S.TitleGPS>
            My GPS - Tracking
          </S.TitleGPS>
          <S.StatusInfoGPS>
          {isEnabled ? 'Online' : 'Offline'}
          </S.StatusInfoGPS>
        </S.WrapperInfoStatusGPS>
      </S.ContainerGPS>
      
      <S.ContainerStatusService>
        <S.WrapperStatusService>
          <S.TitleService>
            Status do serviço
          </S.TitleService>
          <S.InfoService>
            {isEnabled ? 'Serviço ativo' : 'Serviço inativo'}
          </S.InfoService>
        </S.WrapperStatusService>
        <Switch 
          trackColor={{false: theme.colors.gray300, true: theme.colors.gray300}}
          thumbColor={isEnabled ? theme.colors.green500 : theme.colors.gray100}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </S.ContainerStatusService>

      <S.ContainerComunication>
        <S.TitleComunication>
          Intervalo de comunicação
        </S.TitleComunication>
        <S.WrapperInterval>
          <IntervalButton 
            seconds="10s" 
            activePress={handleChangeActiveButtonTen}
            isActive={isTenSecondsActive} 
          />
          <IntervalButton 
            seconds="5s" 
            activePress={handleChangeActiveButtonFive}
            isActive={isFiveSecondsActive} 
          />
          <IntervalButton 
            seconds="3s" 
            activePress={handleChangeActiveButtonThree}
            isActive={isThreeSecondsActive} 
          />
          <IntervalButton 
            seconds="1s" 
            activePress={handleChangeActiveButtonOne}
            isActive={isOneSecondActive} 
          />
        </S.WrapperInterval>
        
      </S.ContainerComunication>
    </S.Container>
  );
}