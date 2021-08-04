import React, { Component } from 'react'
import './App.css';

import WeatherInfo from './components/WeatherInfo';
import WeatherForm from "./components/WeatherForm";

class App extends Component {

  state = {
    temperatura: '',
    descripcion: '',
    humedad: '',
    ciudad: '',
    pais: ''
  }
  
  getWeather = async evento => {
    evento.preventDefault();

    const {city} = evento.target.elements;//extraigo la informacion del input
    const cityValue = city.value;//le asigno el valor de la entrada a la constante

    const apiKey = "abf490b2a323940e432b0ea3234d9b01";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric&lang=es`;
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      temperatura: data.main.temp,
      descripcion: data.weather[0].description,
      humedad: data.main.humidity,
      ciudad: data.name,
      pais: data.sys.country,
    });
    
  }
  
  render(){
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <WeatherForm getWeather={ this.getWeather } />
            <WeatherInfo { ...this.state } />{/* este componente muestra la info obtenida del clima */}
          </div>
        </div>
    
      </div>
    )
  }
}

export default App;