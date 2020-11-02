import {getWeatherApi} from '../api/weatherApi'
import {Dispatch} from 'redux'
import {Weather} from '../types/entities'
import {InferActionTypes} from './store'


const SET_WEATHER_DATA = 'SET_WEATHER_DATA'
const SET_WEATHER_HISTORY = 'SET_WEATHER_HISTORY'


const initialState = {
  weather: {} as Weather,
  weatherHistory: [] as Weather[]
}

type InitialStateType = typeof initialState

export const weatherReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case SET_WEATHER_DATA: {
      return {
        ...state,
        weather: action.weather,

      }
    }
    case SET_WEATHER_HISTORY: {
      return {
        ...state,
        weatherHistory: action.weatherHistory.reverse()
      }
    }
    default:
      return state
  }
}

type ActionsType = InferActionTypes<typeof actions>

const actions = {
  setWeatherDataSuccess: (weather: Weather) => {
    return {
      type: SET_WEATHER_DATA,
      weather
    } as const
  },
  setWeatherHistorySuccess: (weatherHistory: Weather[]) => {
    return {
      type: SET_WEATHER_HISTORY,
      weatherHistory
    } as const
  },

}


export const getCityWeather = (cityName: string) => async (dispatch: Dispatch<ActionsType>) => {
  let data = await getWeatherApi.getWeather(cityName)
  console.log(data)
  dispatch(actions.setWeatherDataSuccess(data.weather))

}


export const getHistoryWeather = () => async (dispatch: Dispatch<ActionsType>) => {
  let data = await getWeatherApi.getHistoryWeather()
  console.log(data)
  dispatch(actions.setWeatherHistorySuccess(data))

}