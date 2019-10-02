import types from './types';
import { combineReducers } from 'redux';

const initialData = {
  data: []
};


const rootReducer = (state = initialData, action) => {
  const { payload, type } = action;
  switch (type) {
    case types.GET_ALL_USERS: {
      return state = {
        ...state,
        data: payload.data
      };
    }
    case types.ADD_USER: {
      return state = {
        ...state,
        data: payload.data
      };
    }
    default:
      return state
  }
};

export default combineReducers({
  rootReducer
});
