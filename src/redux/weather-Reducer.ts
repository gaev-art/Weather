import {getWeatherApi, jsonServerApi} from '../api/Weather-api';
import {Dispatch} from 'redux';
import {sys, temp, weather} from '../types/entities';
import {InferActionTypes} from './store';


const SET_WEATHER_DATA = 'SET_WEATHER_DATA'
const SET_WEATHER_HISTORY = 'SET_WEATHER_HISTORY'

type WeatherHistory = {
  weather:  Array<weather>,
  name:  string,
  sys:  sys,
  temp:  temp,
}


const initialState = {
  weather: [] as Array<weather>,
  name: '' as string,
  sys: {} as sys,
  temp: {} as temp,
  weatherHistory:[] as Array<WeatherHistory>
};

type InitialStateType = typeof initialState

export const WeatherReducer = (state = initialState, action: ActionsType):InitialStateType => {
  switch (action.type) {
    case SET_WEATHER_DATA: {
      return {
        ...state,
        weather: [action.weather],
        name: action.name,
        sys: action.sys,
        temp: action.temp
      }
    }
    case 'SET_WEATHER_HISTORY':{
      return {
        ...state,
        weatherHistory: [action.weatherHistory]
      }
    }
    default:
      return state
  }
}

type ActionsType = InferActionTypes<typeof actions>

const actions = {
  setWeatherDataSuccess: (weather: weather, name: string, sys: sys, temp: temp) => {
    return {
      type: SET_WEATHER_DATA,
      weather,
      name,
      sys,
      temp
    } as const
  },
  setWeatherHistorySuccess: (weatherHistory: WeatherHistory) => {
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
  try {
    let data = await getWeatherApi.getWeather(cityName);
    const {weather, name, sys, main} = data

    const weatherData = {weather, name, sys, main, datesInfo}

    await jsonServerApi.setWeatherData(weatherData);
    dispatch(actions.setWeatherDataSuccess(weather, name, sys, main));
  } catch (e) {
    alert(e.message)
  }
};


export const getHistoryWeather = () => async (dispatch: Dispatch<ActionsType>) => {
  let data = await jsonServerApi.getWeatherData();
  console.log(data)
  dispatch(actions.setWeatherHistorySuccess(data))
}