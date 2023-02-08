export type LocationPackageDTO = {
    coords: {
      accuracy: number,
      altitude: number,
      altitudeAccuracy: number,
      heading: number,
      latitude: number,
      longitude: number,
      speed: number,
    },
    mocked: boolean,
    timestamp: number,
}

export type PackagePointsDTO = {
  id: string,
  latitude: number,
  longitude: number,
  speed: number,
  time: string,
}