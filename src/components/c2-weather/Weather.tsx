import React from 'react';
import {useAppSelector} from '../../redux/store';
import style from './Weather.module.css';
import Search from './search/Search';


export default function Weather() {

  const name = useAppSelector(state => state.weatherPage.weather.name)
  const main = useAppSelector(state => state.weatherPage.weather.main)
  const weather = useAppSelector(state => state.weatherPage.weather.weather)
  const sys = useAppSelector(state => state.weatherPage.weather.sys)

  return <div className={style.container}>
    <div className={style.item}>
      <Search/>
      {name && <div><b>City : </b>{name}</div>}
      {main && <div><b>Temperature : </b>{Math.floor(main.temp)}C{'\u00b0'}</div>}
      {weather &&
      <div>
        <b>Description : </b>
        <img style={{width: '30px', verticalAlign: 'middle'}}
             src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
             alt=''/>
        {weather[0].description}
      </div>}
      {sys && <div><b>Sunrise : </b>{new Date(Number(sys.sunrise) * 1000).toLocaleTimeString()}</div>}
      {sys && <div><b>Sunset : </b>{new Date(Number(sys.sunset) * 1000).toLocaleTimeString()}</div>}

    </div>
  </div>
}

