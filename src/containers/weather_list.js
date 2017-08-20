import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class Weatherlist extends Component{

  renderWeather(cityData){

    // const temps = cityData.list.map(weather => weather.main.temp);
    // convert to celsius
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    // ES6
    const { lon, lat } = cityData.city.coord;

    return(
      <tr key={ cityData.city.id }>
        <td><GoogleMap lat={lat} lon={lon}/></td>

        <td><Chart data={temps} color='orange' units='C'/></td>
        <td><Chart data={pressures} color={'red'} units='hPA'/></td>
        <td><Chart data={humidities} color={'blue'} units='%'/></td>
      </tr>
    );
  }

  // Each item will call the function
  // { this.props.weather.map(this.renderWeather) }
  render(){
    return(
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPA)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

// function mapStateToProps(state){
function mapStateToProps({ weather }){
  // return { weather: state.weather };

  // When variable and value are the same name
  // return { weather: weather };
  return { weather };
}

export default connect(mapStateToProps)(Weatherlist);
