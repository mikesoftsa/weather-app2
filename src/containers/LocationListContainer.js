import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { setSelectedCity, setWeather } from "./../actions";
import { getWeatherCities, getCity } from "./../reducers";
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    componentDidMount() {
        const { setWeather, setCity, cities, city } = this.props
        setWeather(cities);
        setCity(city);
    }
    
    handleSelectionLocation = city => {        
        this.props.setCity(city);
    }

    render() {
        return (
            <LocationList
              cities={this.props.citiesWeather}
              onSelectedLocation={this.handleSelectionLocation}
            />
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
};

const mapDispathToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
});

const mapStateToProps = state => ({ 
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
})

export default connect(mapStateToProps, mapDispathToProps)(LocationListContainer);