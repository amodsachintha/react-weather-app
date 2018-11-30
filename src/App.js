import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';
import bg from './img/bg.jpg';
import './App.css';

const API_KEY = 'b87da10e009fb6b5e5955f72d0de6afb';

class App extends Component {
  state = {
    temperature: undefined,
    min:undefined,
    max: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    title: undefined,
    description: undefined,
    icon: undefined,
    time: undefined,
    error: undefined
  }

getWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
  const data = await api_call.json();
  
  if(city && country){
    console.log(data);
    if(data.cod === 200){
      this.setState({
        temperature: data.main.temp,
        min:data.main.temp_min,
        max: data.main.temp_max,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        title: data.weather[0].main,
        description: data.weather[0].description,
        icon: data.weather[0].id,
        error: ''
      });
    }else{
      this.setState({
        temperature: undefined,
        min:undefined,
        max: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        title: undefined,
        description: undefined,
        icon: undefined,
        error: data.message
      });
    }
    
  }else{
    console.log(data);
    console.log(this.state);
    this.setState({
      temperature: undefined,
      min:undefined,
      max: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      title: undefined,
      description: undefined,
      icon: undefined,
      error: "Please input City and Country Code (eg: New York, US)"
    });
  }
}

  render() {
    return (
      <div className="App mt-4">
        <div className="container">
          <div className="row mb-2">
            <div className="col-sm-6 offset-3">
            <div className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="item active">
                  <img src={bg} alt="bg" className="img-responsive img-rounded"></img>
                    <div className="carousel-caption text-dark">
                      <Titles />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
        
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <Form getWeather={this.getWeather}/>
            </div>
          </div>
        </div>
      </div>

      <div className="row"></div>
        <div className="col-sm-6 offset-3">
          <Error error={this.state.error}/>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6 offset-3">
            <Weather 
            temperature={this.state.temperature}
            min={this.state.min}
            max={this.state.max}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            title={this.state.title}
            description={this.state.description}
            icon={this.state.icon}
            error={this.state.error}
          />          
        </div>
      </div>
    </div>
    );
  }
}

export default App;
