import React, {useEffect} from 'react';
import style from './History.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {getHistoryWeather} from '../../redux/weather-Reducer';
import {AppStateType} from '../../redux/store';

export default function History() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHistoryWeather())
  }, [])

  // const weatherHistory = useSelector<AppStateType>(state => state.weatherPage.weatherHistory[0])



  return <div className={style.container}>
    <div className={style.item}>
      weather history
    </div>
  </div>
}

