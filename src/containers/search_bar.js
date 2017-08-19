import React, { Component } from 'react';

// controlled field is a field that the value is set by the state
export default class SearchBar extends Component{

  constructor(props){
    super(props);

    this.state = { term: ''};

    // To bind this to the component so in the method this is the component not the field
    // Was thrwoing error b4
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    // Stops submit auto call from the form
    event.preventDefault();

    // Need to go fetch the data
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
