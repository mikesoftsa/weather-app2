import React from 'react';
import './App.css';
import WeatherLocation  from './components/WeatherLocation'
function App() {
  return (
    <div className="App">      
      <WeatherLocation city="Quito,ec"></WeatherLocation>
    </div>
  );
}

export default App;
