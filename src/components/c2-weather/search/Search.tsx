import React, {ChangeEvent, useState} from 'react';
import TextField from '@material-ui/core/TextField';

export default function Search() {

  const [city, setCity] = useState('')

  const getWeatherInCity = () => {
    alert(city)
    setCity('')
  }

  const handleWordSearchChange = (e:ChangeEvent<HTMLInputElement>) => setCity(e.currentTarget.value)


  return (
    <form onSubmit={getWeatherInCity}>
    <TextField
      label="Enter City"
      color="secondary"
      value={city}
      onChange={handleWordSearchChange}
    />
  </form>)

}

