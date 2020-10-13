export type Main = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

export type Sys = {
  type: number
  id: number
  message: number
  country: string
  sunrise: number
  sunset: number
}
export type Weather = {
  id: number
  main: string
  description: string
  icon: string
}

export type LocationWeather = {
  coord: {
    lon: number
    lat: number
  },
  weather: [Weather],
  base: string
  main: Main,
  visibility: number
  wind: {
    speed: number
    deg: number
  },
  clouds: {
    all: number
  },
  dt: number
  sys: Sys,
  timezone: number
  id: number
  name: string
  cod: number
}

