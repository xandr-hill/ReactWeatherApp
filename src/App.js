import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <WeatherDisplay zip={"12345"} />
        {
          PLACES.map( ( place, index) => (
            <button key = {index}
              onClick = { () => { alert( "Here we go!.. " + place.name + " city number is " + (index+1) ); 
            }} >
              
              {place.name}

            </button>
              
            )) 
        }
      </div>
    );
  }
}

export default App;

class WeatherDisplay extends Component {
  render() {
    return (
      <h1> {this.props.zip} weather will be render here...</h1>
    );
  }
};

