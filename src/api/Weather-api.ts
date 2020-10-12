import axios from 'axios';

const KEY = process.env.REACT_APP_KEY_FOR_WEATHER

export const getWeatherApi = {
    getWeather(cityName:string) {
        return axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&apikey=${KEY}&lang=ru&units=metric`)
            .then(response => response.data)
            .catch(e => console.log(e.message))
    }
};

