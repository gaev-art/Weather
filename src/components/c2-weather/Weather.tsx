import React from 'react';
import style from '../c3- history/History.module.css';
import Search from './search/Search';
import {useAppSelector} from '../../redux/store';


export default function Weather() {


  const name = useAppSelector(state => state.weatherPage.name)
  const temp = useAppSelector(state => state.weatherPage.temp.temp)
  const icon = useAppSelector((state) => state.weatherPage.weather[0]?.icon)
  const description = useAppSelector((state) => {
    if (state.weatherPage.weather.length === 1) {
      return state.weatherPage.weather[0].description
    }
    return ''
  })
  const sunrise = useAppSelector(state => state.weatherPage.sys.sunrise)
  const sunset = useAppSelector(state => state.weatherPage.sys.sunset)


  const sunRise = new Date(Number(sunrise) * 1000);
  const sunSet = new Date(Number(sunset) * 1000);
  const timeSunrise = sunRise.toLocaleTimeString();
  const timeSunset = sunSet.toLocaleTimeString();


  return <div className={style.container}>
    <div className={style.item}>
      <Search/>
      {name && <div><b>City : </b>{name}</div>}
      {temp && <div><b>Temperature : </b>{Math.floor(temp)}C{'\u00b0'}</div>}
      <img style={{width: '30px', verticalAlign: 'middle'}}
           src={`http://openweathermap.org/img/w/${icon}.png`}
           alt=''/>
      {description && <div><b>Description : </b>{description}</div>}
      {sunrise && <div><b>Sunrise : </b>{timeSunrise}</div>}
      {sunset && <div><b>Sunset : </b>{timeSunset}</div>}

    </div>
  </div>
}

