export const SET_CITY = 'SET_CITY';

export const setCity = payload => ({ type: SET_CITY,  payload});

export const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
export const url= "http://api.openweathermap.org/data/2.5/forecast";

export const fetchForecast = payload => {
    return dispatch => {
        //fetch ot axios 
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
            }
        );
        return;
    }
};