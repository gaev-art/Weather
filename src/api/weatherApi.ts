import axios from 'axios'
import {LocationWeather, Weather} from '../types/entities'


export const getWeatherApi = {
  getWeather(cityName: string) {
    return axios.get<LocationWeather>(
      // `http://localhost:5000/weather?city=${cityName}`)
      `https://back-4-weather.herokuapp.com/weather?city=${cityName}`)
      .then(response => {
        return response.data
      })
  },
  getHistoryWeather() {
    return axios.get<Weather[]>(
      // `http://localhost:5000/history`)
      `https://back-4-weather.herokuapp.com/history`)
      .then(response => {
        return response.data
      })
  },

}







