import axios from 'axios';
import config from '../../common/config/api.config';

const api = `${config.protocol}://${config.host}/api/v1/user`;

class UserService {
  static getAll() {
    return axios.post(`${api}/getAll`, {})
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => {
        console.log(error)
      })
  }

  static add() {
    return axios.post(`${api}/add`,  {
      pin: "testpin01",
      password: "test password",
      salt:	"test salt",
      people_id: 23,
      email: "postman@test.test",
      name: "test name",
      user_level_id: 1
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export default UserService;
