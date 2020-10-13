import React from 'react';
import style from '../c3- history/History.module.css';
import Search from './search/Search';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';

export default function Weather() {

  const name = useSelector<AppStateType>(state => state.weatherPage.name)
  const temp = useSelector<AppStateType>(state => state.weatherPage.temp.temp)
  // const icon = useSelector<AppStateType>(state => state.weatherPage.weather[0].icon)
  // const description = useSelector<AppStateType>(state => state.weatherPage.weather[0].description)
  const sunrise = useSelector<AppStateType>(state => state.weatherPage.sys.sunrise)
  const sunset = useSelector<AppStateType>(state => state.weatherPage.sys.sunset)


  const sunRise = new Date(Number(sunrise) * 1000);
  const sunSet = new Date(Number(sunset) * 1000);
  const timeSunrise = sunRise.toLocaleTimeString();
  const timeSunset = sunSet.toLocaleTimeString();


  return <div className={style.container}>
    <div className={style.item}>
      <Search/>
      {temp && <div><b>City :</b>{name}</div>}
      {temp && <div><b>Temperature :</b>{temp}C{'\u00b0'}</div>}
      {/*<img style={{width: '30px', verticalAlign: 'middle'}}*/}
      {/*     src={`http://openweathermap.org/img/w/${icon}.png`}*/}
      {/*     alt=''/>*/}
      {/*{description}*/}
      {sunrise && <div><b>Sunrise :</b>{timeSunrise}</div>}
      {sunset && <div><b>Sunset :</b>{timeSunset}</div>}

    </div>
  </div>
}

