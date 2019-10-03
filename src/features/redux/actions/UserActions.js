import { user as types} from '../types'
import { UserService } from "../../services"


const getAll = ({data}) => {
  return {
    type: types.GET_USERS,
    payload: data
  }
};

const create = (data) => {
  return {
    type: types.ADD_USER,
    payload: data
  }
};

const removeUser = (data) => {
  return {
    type: types.REMOVE_USER,
    payload: data
  }
};


export const getUsers = () => {
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
};
export const add = () => {
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
};
export const remove = () => {
  return (dispatch) => {
    return UserService.add()
      .then((res) => {
          dispatch(create(res));
      })
      .catch((error) => {
        console.log(error)
      })
  }
};


class UserActions  {
  static getAll = () => {
    return (dispatch) => {
      return UserService.getAll()
        .then((res) => {
          dispatch(getAll(res));
        })
        .catch((error) => {
          console.log(error)
        })
    }
  };

  static add = () => {
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
  };

  static remove = () => {
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
  };

  static update = () => {
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
}

export default UserActions
