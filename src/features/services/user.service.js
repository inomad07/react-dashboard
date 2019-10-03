import axios from 'axios';
import config from '../../common/config/api.config';

const api = `${config.protocol}://${config.host}/api/v1/user`;

const headers = {
  headers: {
    'Content-Type': `application/json`
  }
};

const testData = {
  pin: "testpin01",
  password: "test password",
  salt:	"test salt",
  people_id: 23,
  email: "postman@test.test",
  name: "test name",
  user_level_id: 1
};

class UserService {
  static getAll() {
    return axios.post(`${api}/getAll`, {}, headers)
      .then((res) => {
        console.log('get',res);
        return res;
      })
      .catch((error) => {
        console.log(error)
      })
  }

  static add() {
    return axios.post(`${api}/add`, testData, headers)
      .then((res) => {
        console.log('res:',res);
        return res.data;
      })
      .catch((error) => {
        console.log(error)
      })
  }

  static edit() {
    return axios.post(`${api}/update`, {
      "pin":          	"update pin",
      "password":     	"updated test password",
      "salt":				"updated test salt",
      "people_id":    	2,
      "email":        	"postman@test.test",
      "name":         	"updated test name",
      "user_level_id":	1,
      "userId":			2
    }, headers)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error)
      })
  }

  static remove() {
    return axios.post(`${api}/delete`, {
      "userId":	2
    }, headers)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error)
      })
  }

}

export default UserService;
