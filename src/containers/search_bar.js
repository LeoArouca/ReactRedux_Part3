import React, { Component } from 'react';

// Connect redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Connect actions
import { fetchWeather } from '../actions/index';

// controlled field is a field that the value is set by the state
class SearchBar extends Component{

  constructor(props){
    super(props);

    this.state = { term: ''};

    // To bind this to the component so in the method this is the component not the field
    // Was thrwoing error b4
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    // Stops submit auto call from the form
    event.preventDefault();

    // Need to go fetch the data
    // https://openweathermap.org/forecast5
    // api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
    // api.openweathermap.org/data/2.5/forecast?q=London,us
    // 3011d0a34726bb34d6f98d4f828571a1

    // Call the action creator
    this.props.fetchWeather(this.state.term);
    this.setState({ term: ''});
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          placeholder='Get a five day forcast in your favorite cities'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    );
  }
}

// Connect redux
function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

// Passing null here basically tells redux that this container does not care about the state
export default connect(null, mapDispatchToProps)(SearchBar);
