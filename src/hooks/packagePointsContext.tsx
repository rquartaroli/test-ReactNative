import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import * as Location from 'expo-location';
import { useNetInfo } from '@react-native-community/netinfo';

import { LocationPackageDTO, PackagePointsDTO } from '../DTOs/locationPackageDTO';
import { generateId } from "../utils/generateID";
import api from "../services/api";

interface PackagePointProviderProps {
  children: ReactNode
}

type PackagePointsToDisplay = {
  id: string,
  latitude: number,
  longitude: number,
  speed: number,
  time: string,
  isSync: boolean,
  hour: string,
}

interface PackagePointContextData {
  packagesPoint: PackagePointsToDisplay[]
  insertPackagePoint: () => Promise<void>
  changeIntervalSeconds: (intervalSeconds: number) => void;
  location: null | LocationPackageDTO
  errorMsg: null | any
  isOnline: boolean
  toggleSwitchStatusOnLine: () => void
  disabledToggleStatusOnline: boolean
}

const PackagePointContext = createContext({} as PackagePointContextData)

function PackagePointProvider({ children }: PackagePointProviderProps) {
  const [packagesPoint, setPackagesPoint] = useState<PackagePointsToDisplay[]>([]);
  const [idInterval, setIdInterval] = useState<any>();
  const [intervalSeconds, setIntervalSeconds] = useState(10000);

  const [location, setLocation] = useState<null | LocationPackageDTO>(null);
  const [errorMsg, setErrorMsg] = useState<null | any>(null);

  const netInfo = useNetInfo();
  const [isOnline, setIsOnline] = useState(true);
  const [offlineFirst, setOfflineFirts] = useState(false);
  const [disabledToggleStatusOnline, setDisabledToggleStatusOnline] = useState(false);

  function toggleSwitchStatusOnLine() {
    if(idInterval) {
      clearInterval(idInterval)
    }
    setOfflineFirts(true)
    setIsOnline(previousState => !previousState)
  }

  async function insertPackagePoint() {
    if(location) {
      const allPackages = [...packagesPoint];

      clearInterval(idInterval)

      if(offlineFirst && isOnline) {
        const packagesOffline = allPackages.filter(packages => !packages.isSync && packages)

        if(packagesOffline.length > 0) {
          const packagesOfflineForAdd = packagesOffline.map(packages => {
            packages.isSync = true;
            return packages
          })

          try {
            packagesOfflineForAdd.forEach(async (packageForAdd) => {

              const packageForAddFormated = {
                id: packageForAdd.id,
                latitude: packageForAdd.latitude,
                longitude: packageForAdd.longitude,
                speed: packageForAdd.speed,
                time: packageForAdd.time,
              } as PackagePointsDTO
  
              await api.post(`/points/${packageForAdd.id}`, {
                pointsItems: [packageForAddFormated]
              })
  
            })
          } catch (error) {
            // console.log('Error Insert', error);
            packagesOffline.forEach(packages => {
              packages.isSync = false;
            })
          }
        }
        setOfflineFirts(false)
      }
      
      let currentDatePackage = new Date(location.timestamp);
      let hour = currentDatePackage.getHours();
      let minutes = currentDatePackage.getMinutes();

      let day = currentDatePackage.getDate();
      let month = (currentDatePackage.getMonth() + 1);
      let year = currentDatePackage.getFullYear();
    
      let hourFormated = String(hour).padStart(2, '0') + ':'+ String(minutes).padStart(2, '0');
      
      let dateFormated = year + '-' + String(month).padStart(2, '0') + '-' + String(day).padStart(2, '0');

      const newPackage = {
        id: generateId(10),
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        speed: location.coords.speed,
        time: dateFormated,
        isSync: isOnline ? true : false,
        hour: hourFormated,
      } as PackagePointsToDisplay

      try {
        if(isOnline) {

          let pointsItems = [];
      
          const newPackagePoint = {
            id: newPackage.id,
            latitude: newPackage.latitude,
            longitude: newPackage.longitude,
            speed: newPackage.speed,
            time: newPackage.time,
          } as PackagePointsDTO

          pointsItems.push(newPackagePoint)

          await api.post(`/points/${newPackage.id}`, {
            pointsItems
          })
        }
      } catch(error) {
        // console.log('Error Insert', error);
        newPackage.isSync = false;
      }

      allPackages.push(newPackage)
      setPackagesPoint(allPackages)

      try {
        const locationCurrent = await Location.getLastKnownPositionAsync({}) as LocationPackageDTO;
        if(locationCurrent && locationCurrent.timestamp !== location.timestamp) {
          setLocation(locationCurrent);
        } else {
          const locationCurrent = await Location.getCurrentPositionAsync({}) as LocationPackageDTO;
          setLocation(locationCurrent);
        }
      } catch (error) {
        // console.log("Error Location:", error)
      }
      
    }
  }

  function changeIntervalSeconds(intervalSeconds: number) {
    setIntervalSeconds(intervalSeconds)
  }

  useEffect(() => {
    (async () => {

      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        const location = await Location.getLastKnownPositionAsync({}) as LocationPackageDTO;
        if(location) {
          setLocation(location);
        } else {
          const location = await Location.getCurrentPositionAsync({}) as LocationPackageDTO;
          setLocation(location);
        }
      } catch(error) {
        // console.log("Error Initial location:", error)
      }
    })();
  }, [])

  useEffect(() => {
    if(netInfo.isConnected) {
      setIsOnline(true)
      setDisabledToggleStatusOnline(false)
    } else {
      setIsOnline(false)
      setOfflineFirts(true)
      setDisabledToggleStatusOnline(true)
    }
  }, [netInfo.isConnected])

  useEffect(() => {
    if(idInterval) {
      clearInterval(idInterval)
    }
    if(location) {
      const iddInterval = setInterval(() => {
        
        insertPackagePoint()
        
      }, intervalSeconds)
      
      setIdInterval(iddInterval)
    }

  }, [intervalSeconds, location, isOnline])
  

  return (
    <PackagePointContext.Provider value={{
      packagesPoint,
      insertPackagePoint,
      changeIntervalSeconds,
      location,
      errorMsg,
      isOnline,
      toggleSwitchStatusOnLine,
      disabledToggleStatusOnline,
    }}>
      {children}
    </PackagePointContext.Provider>
  )
}

function usePackagePoint() {
  const context = useContext(PackagePointContext);

  return context;
}

export { PackagePointProvider, usePackagePoint };