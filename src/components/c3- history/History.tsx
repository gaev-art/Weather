import React, {useEffect} from 'react';
import style from './History.module.css'
import {useDispatch} from 'react-redux';
import {getHistoryWeather} from '../../redux/weatherReducer';
import {useAppSelector} from '../../redux/store';

export default function History() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHistoryWeather())
  }, [])

  const weatherHistory = useAppSelector(state => state.weatherPage.weatherHistory)

  return <div className={style.container}>
    <div className={style.item}>
      {weatherHistory.reverse().map((element, index) => {
        return <div key={index} style={{
          display: 'flex'
        }}>
          <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex', margin: '10px'}}>
            {element.datesInfo.day}.{element.datesInfo.month}.{element.datesInfo.year} {element.datesInfo.hours}:{element.datesInfo.minutes}
          </div>
          <div style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            margin: '10px'
          }}>
            {element.name}
          </div>
          <div style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            margin: '10px'
          }}>
            {Math.floor(element.main.temp)}C{'\u00b0'}
          </div>
          <div style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            margin: '10px'
          }}>
            {element.weather[0].description}
          </div>
          <img style={{verticalAlign: 'middle'}}
               src={`http://openweathermap.org/img/w/${element.weather[0].icon}.png`}
               alt=''/>
        </div>
      })}
    </div>
  </div>
}

