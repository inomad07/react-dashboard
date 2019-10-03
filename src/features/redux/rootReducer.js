import { doctor, people, user } from './types';
import { combineReducers } from 'redux';

const initialData = {
  users: [],
  // people: [],
  // doctors: [],
  // cities: [],
  // countries: [],
};

const userReducer = (state = initialData, action) => {
  const { payload, type } = action;
  console.log(action);

  const types = user;
  switch (type) {
    case types.GET_USERS: {
      return {
        ...state,
        users: payload.data
      };
    }
    case types.ADD_USER: {
      return {
        users: [
          ...state.users,
          Object.assign({}, payload.data)
        ]
      }
    }
    default:
      return state
  }
};

const peopleReducer = (state = initialData, action) => {
  const { payload, type } = action;
  const types = people;
  switch (type) {
    case types.GET_PEOPLE: {
      return state = {
        people: payload.data
      };
    }
    case types.ADD_HUMAN: {
      return state = {
        ...state,
        people: payload.data
      };
    }
    default:
      return state
  }
};

const doctorReducer = (state = initialData, action) => {
  const { payload, type } = action;
  const types = doctor;
  switch (type) {
    case types.GET_DOCTORS: {
      return state = {
        ...state,
        doctors: payload.data
      };
    }
    case types.ADD_DOCTOR: {
      return state = {
        ...state,
        doctors: payload.data
      };
    }
    default:
      return state
  }
};

export default combineReducers({
  userReducer,
  // peopleReducer,
  // doctorReducer
});
