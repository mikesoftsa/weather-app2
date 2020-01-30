import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { setSelectedCity } from "./../actions";
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    
    handleSelectionLocation = city => {        
        this.props.setCity(city);
    }

    render() {
        return (
            <LocationList
              cities={this.props.cities}
              onSelectedLocation={this.handleSelectionLocation}
            />
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispathToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value))
});

export default connect(null, mapDispathToProps)(LocationListContainer);