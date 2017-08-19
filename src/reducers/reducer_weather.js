import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  console.log('Action received', action);

  switch(action.type){
    // Maps the action in here
    case FETCH_WEATHER:

      // Big can of worms and issues
      // Do not manipulate the data directly!!!!
      // return state.push(action.payload.data);

      // option 1 = does not change the array, adds new one
      return state.concat([action.payload.data]);
      // ES6 - flatten
      return [ action.payload.data, ...state ];

      //
  }

  return state;
}

