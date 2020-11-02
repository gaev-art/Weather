import axios from 'axios'
import {LocationWeather, Weather} from '../types/entities'


export const getWeatherApi = {
  getWeather(cityName: string) {
    return axios.get<LocationWeather>(
      // `http://localhost:3030/weather?city=${cityName}`)
      // `https://server-4-weather.herokuapp.com/weather?city=${cityName}`)
      `https://protected-beyond-90978.herokuapp.com/weather?city=${cityName}`)
      .then(response => {
        return response.data
      })
  },
  getHistoryWeather() {
    return axios.get<Weather[]>(
      // `http://localhost:3030/history`)
      // `https://server-4-weather.herokuapp.com/history`)
      `https://protected-beyond-90978.herokuapp.com/history`)
      .then(response => {
        return response.data
      })
  },

}







