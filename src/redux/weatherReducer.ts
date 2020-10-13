import {getWeatherApi, jsonServerApi} from '../api/weatherApi';
import {Dispatch} from 'redux';
import {Sys, Main, Weather} from '../types/entities';
import {InferActionTypes} from './store';


const SET_WEATHER_DATA = 'SET_WEATHER_DATA'
const SET_WEATHER_HISTORY = 'SET_WEATHER_HISTORY'

type datesInfo = {
  year: number
  month: number
  day: number
  hours: number
  minutes: number
  id: number
}

type WeatherHistory = {
  weather: Array<Weather>,
  name: string,
  sys: Sys,
  main: Main,
  datesInfo: datesInfo
}


const initialState = {
  weather: [] as Weather[],
  name: '' as string,
  sys: {} as Sys,
  temp: {} as Main,
  weatherHistory: [] as WeatherHistory[]
};

type InitialStateType = typeof initialState

export const weatherReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case SET_WEATHER_DATA: {
      return {
        ...state,
        weather: action.weather,
        name: action.name,
        sys: action.sys,
        temp: action.temp
      }
    }
    case SET_WEATHER_HISTORY: {
      return {
        ...state,
        weatherHistory: action.weatherHistory
      }
    }
    default:
      return state
  }
}

type ActionsType = InferActionTypes<typeof actions>

const actions = {
  setWeatherDataSuccess: (weather: Array<Weather>, name: string, sys: Sys, temp: Main) => {
    return {
      type: SET_WEATHER_DATA,
      weather,
      name,
      sys,
      temp
    } as const
  },
  setWeatherHistorySuccess: (weatherHistory: Array<WeatherHistory>) => {
    return {
      type: SET_WEATHER_HISTORY,
      weatherHistory
    } as const
  },

}


export const getCityWeather = (cityName: string) => async (dispatch: Dispatch<ActionsType>) => {
  let date = new Date();
  let datesInfo = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    id: date.getSeconds()
  }

  let data = await getWeatherApi.getWeather(cityName);
  const {weather, name, sys, main} = data

  const weatherData = {weather, name, sys, main, datesInfo}

  await jsonServerApi.setWeatherData(weatherData);
  dispatch(actions.setWeatherDataSuccess(weather, name, sys, main));

};


export const getHistoryWeather = () => async (dispatch: Dispatch<ActionsType>) => {
  let data = await jsonServerApi.getWeatherData();
  dispatch(actions.setWeatherHistorySuccess(data))
}