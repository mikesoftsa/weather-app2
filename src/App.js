import React, { Component } from 'react';
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, Col, Row  } from "react-flexbox-grid";
import PropTypes  from "prop-types";
import { setCity } from "./actions";
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from "./components/ForecastExtended";

const cities = [
  "Quito,ec",
  "Bogota,col",
  "Washington,us",
  "Ciudad de México,mx",
  "Madrid,es",
  "Lima,pe"
];



class App extends Component {

  constructor() {
    super();
    this.state = {
      city: null,
    }
  }

  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
    this.setState({ city });    
    this.props.setCity(city);
  }
  render() {

    const { city } = this.state;

    return (      
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
              cities={cities}
              onSelectedLocation={this.handleSelectionLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {
                  city &&
                    <ForecastExtended city={city}></ForecastExtended>                  
                }
                
              </div>
            </Paper>            
          </Col>
        </Row>        
      </Grid>            
    );
  }
}


App.propTypes = {
  setCity: PropTypes.func.isRequired,
}

const mapDispathToProps = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispathToProps)(App);
