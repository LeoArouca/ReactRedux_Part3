import React, { Component } from 'react';
import { connect } from 'react-redux';

class Weatherlist extends Component{

  renderWeather(cityData){
    return(
      <tr>
        <td key={ cityData.city.id }>{ cityData.city.name }</td>
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
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
