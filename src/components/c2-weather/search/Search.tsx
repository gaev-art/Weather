import React, {ChangeEvent, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {useDispatch} from 'react-redux';
import {getCityWeather} from '../../../redux/weatherReducer';

export default function Search() {
  const dispatch = useDispatch();


  const [city, setCity] = useState('')

  const getWeatherInCity = (e:any) => {
    e.preventDefault();
    dispatch(getCityWeather(city))
    setCity('')
  }

  const handleWordSearchChange = (e: ChangeEvent<HTMLInputElement>) => setCity(e.currentTarget.value)


  return (
    <form onSubmit={getWeatherInCity}>
      <TextField
        label="Enter City"
        color="primary"
        value={city}
        onChange={handleWordSearchChange}
      />
    </form>)

}

