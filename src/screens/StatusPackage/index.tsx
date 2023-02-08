import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { RowStatusPackage } from '../../components/RowStatusPackage';

import * as S from './styles';
import { usePackagePoint } from '../../hooks/packagePointsContext';
import { FlatList } from 'react-native';

export function StatusPackage() {
  const navigation = useNavigation();

  const { packagesPoint } = usePackagePoint();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <Header variant="status" actionPress={handleGoBack} />
      <S.Content>

        <FlatList
          data={packagesPoint}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => 
            <>
              <S.Hr />
              <RowStatusPackage
                idPackage={item.id}
                hourPackage={item.hour}
                isCompleted={item.isSync}
              />
              {index === (packagesPoint.length - 1) &&
              <S.Hr />
              }
            </>
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 25,
          }}
        />
      </S.Content>
    </S.Container>
  );
}