import types from './types'
import { TodoService } from '../services'
// Helper functions to dispatch actions, optionally with payloads

const getTodoList = (data) => {
  return {
    type: types.GET_ALL,
    data
  }
};

export const getAll = () => {
  return (dispatch) => {
    return TodoService.getAll()
      .then((res) => {
        dispatch(getTodoList(res.data));
      })
      .catch((error) => {
        console.log('Cannot fetch', error)
      })
  }
};

export const getDoctors = () => {
  return (dispatch) => {
    return TodoService.getAll()
      .then((res) => {
        dispatch(getTodoList(res.data));
      })
      .catch((error) => {
        console.log('Cannot fetch', error)
      })
  }
};

export const getPatients = () => {
  return (dispatch) => {
    return TodoService.getAll()
      .then((res) => {
        dispatch(getTodoList(res.data));
      })
      .catch((error) => {
        console.log('Cannot fetch', error)
      })
  }
};



export const actionCreators = {
  getAll: () => {
    return (dispatch) => {
      return TodoService.getAll()
        .then((res) => {
          dispatch(getTodoList(res.data));
        })
        .catch((error) => {
          console.log('Cannot fetch', error)
        })
    }
  },
};
