import React, { useState } from 'react';
import { Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { IntervalButton } from '../../components/IntervalButton';

import * as S from './styles';
import { LocationPackageDTO } from '../../DTOs/locationPackageDTO';
import { usePackagePoint } from '../../hooks/packagePointsContext';

export function Dashboard() {
  const theme = useTheme();
  const [isTenSecondsActive, setIsTenSecondsActive] = useState(true);
  const [isFiveSecondsActive, setIsFiveSecondsActive] = useState(false);
  const [isThreeSecondsActive, setIsThreeSecondsActive] = useState(false);
  const [isOneSecondActive, setIsOneSecondActive] = useState(false);

  const { 
    location,
    errorMsg,
    changeIntervalSeconds,
    isOnline,
    toggleSwitchStatusOnLine,
    disabledToggleStatusOnline,
  } = usePackagePoint();

  const navigation = useNavigation();

  function handleGoStatusScreen() {
    navigation.navigate('statusPackage');
  }

  async function handleChangeActiveButtonTen() {
    changeIntervalSeconds(10000)
    if(!isTenSecondsActive)  {
      setIsTenSecondsActive(true)
      setIsFiveSecondsActive(false)
      setIsThreeSecondsActive(false)
      setIsOneSecondActive(false)
    }
  }

  async function handleChangeActiveButtonFive() {
    changeIntervalSeconds(5000)
    if(!isFiveSecondsActive)  {
      setIsTenSecondsActive(false)
      setIsFiveSecondsActive(true)
      setIsThreeSecondsActive(false)
      setIsOneSecondActive(false)
    }
  }

  function handleChangeActiveButtonThree() {
    changeIntervalSeconds(3000)
    if(!isThreeSecondsActive)  {
      setIsTenSecondsActive(false)
      setIsFiveSecondsActive(false)
      setIsThreeSecondsActive(true)
      setIsOneSecondActive(false)
    }
  }

  function handleChangeActiveButtonOne() {
    changeIntervalSeconds(1000)
    if(!isOneSecondActive)  {
      setIsTenSecondsActive(false)
      setIsFiveSecondsActive(false)
      setIsThreeSecondsActive(false)
      setIsOneSecondActive(true)
    }
  }

  let text: string | any = 'Esperando....';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = location as LocationPackageDTO;
  }

  return (
    <S.Container>
      <Header actionPress={handleGoStatusScreen}/>
      <S.ScrollContainer contentContainerStyle={{ paddingBottom: 32 }}>
        <S.ContainerGPS>
          <Feather name="compass" size={55} color={theme.colors.secondary} />
          <S.WrapperInfoStatusGPS>
            <S.TitleGPS>
              My GPS - Tracking
            </S.TitleGPS>
            <S.StatusInfoGPS>
            {isOnline ? 'Online' : 'Offline'}
            </S.StatusInfoGPS>
          </S.WrapperInfoStatusGPS>
        </S.ContainerGPS>
        
        <S.ContainerStatusService>
          <S.WrapperStatusService>
            <S.TitleService>
              Status do serviço
            </S.TitleService>
            <S.InfoService>
              {isOnline ? 'Serviço ativo' : 'Serviço inativo'}
            </S.InfoService>
          </S.WrapperStatusService>
          <Switch 
            trackColor={{false: theme.colors.gray300, true: theme.colors.gray300}}
            thumbColor={isOnline ? theme.colors.green500 : theme.colors.gray100}
            ios_backgroundColor="#3e3e3e"
            disabled={disabledToggleStatusOnline}
            onValueChange={toggleSwitchStatusOnLine}
            value={isOnline}
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
      </S.ScrollContainer>
    </S.Container>
  );
}