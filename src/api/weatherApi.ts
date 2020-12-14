import axios from 'axios'
import {LocationWeather, Weather} from '../types/entities'


const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
})

export const getWeatherApi = {
  getWeather(cityName: string) {
    return instance.get<LocationWeather>(`/weather?city=${cityName}`)
      .then(response => {
        return response.data
      })
  },
  getHistoryWeather() {
    return instance.get<Weather[]>(`/history`)
      .then(response => {
        return response.data
      })
  },

}







