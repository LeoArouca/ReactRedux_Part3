// Axios js does same as JQuery for ajax calls
import axios from 'axios';

const API_KEY = '3011d0a34726bb34d6f98d4f828571a1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// By exporting this variable, it makes a single variable for the action for the entire app and reducers.
// saves time if want to change it by not having that many
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},au`;
  const request = axios.get(url);

  console.log('Request', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
