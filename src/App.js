import React from 'react';
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

function App() {
  return (
    <div className="App">      
      <LocationList cities={cities}/>
    </div>
  );
}

export default App;
