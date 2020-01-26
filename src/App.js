import React, { Component } from 'react';
import { Grid, Col, Row  } from "react-flexbox-grid";
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  "Quito,ec",
  "Bogota,col",
  "Washington,us",
  "Ciudad de México,mx",
  "Madrid,es",
  "Lima,pe"
];

class App extends Component {
  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
  }
  render() {
    return (
      <Grid>
        <Row>
          Titulo
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
              cities={cities}
              onSelectedLocation={this.handleSelectionLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <div className="details"></div>
          </Col>
        </Row>        
      </Grid>      
    );
  }
}

export default App;
