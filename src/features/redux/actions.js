import types from './types'
import { UserService } from "../services"


const getAll = (data) => {
  return {
    type: types.GET_ALL_USERS,
    data
  }
};

const create = (data) => {
  return {
    type: types.GET_ALL_USERS,
    data
  }
};

export const actionCreators = {
  getAll: () => {
    return (dispatch) => {
      return UserService.getAll()
        .then((res) => {
          dispatch(getAll(res));
          }
        )
        .catch((error) => {
          console.log(error)
        })
    }
  },
  add: () => {
    return (dispatch) => {
      return UserService.add()
        .then((res) => {
            dispatch(create(res));
          }
        )
        .catch((error) => {
          console.log(error)
        })
    }
  }
};
