import types from './types';
import { combineReducers } from 'redux';

const initialData = {
  data: []
};


const rootReducer = (state = initialData, action) => {
  switch (action.type) {
    case types.GET_ALL: {
      return state = {
        ...state,
        data: action.payload.data
      };
    }

    default:
      return state
  }
};

export default combineReducers({
  rootReducer
});
