import React from 'react';
import { PropTypes } from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Location from './Location';
import WeatherData from './WeatherData';
import "./styles.css";

/*
handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve => {            
            return resolve.json()
        }).then(data => {
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            })            
        });
    }
*/

const  WeatherLocation = ({ onWeatherLocationClick, city, data }) => (    
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        {data ?
            <WeatherData data={data}></WeatherData> : 
            <CircularProgress size={50} />
        }
    </div>
);

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherLocation;