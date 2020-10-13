import axios from 'axios';


const KEY = process.env.REACT_APP_KEY_FOR_WEATHER

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
})

export const getWeatherApi = {
    getWeather(cityName:string) {
        return axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&apikey=${KEY}&lang=ru&units=metric`)
            .then(response => response.data)
            .catch(e => console.log(e.message))
    }
};


export const jsonServerApi = {
    setWeatherData(weathers:any){
        return instance.post('/weather',
          weathers)
          .then((res)=>res)
    },
    getWeatherData(){
        return instance.get('/weather',)
          .then((res)=>res.data)
    },
}




