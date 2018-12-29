import axios from 'axios';
import * as constants from './constants';
// import { fromJS } from 'immutable';

const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
});

export const logout = () => ({
  type: constants.LOGOUT,
  value: false
});

export const login = (account, password) => {
  return (dispatch) => {
    axios.get("http://localhost:3200/login.json?account=" + account + "&password=" + password)
      .then((res) => {
        // console.log(res);
        const result = res.data.data;
        if (result) {
          dispatch(changeLogin());
        } else {
          alert('失败');
        }
      }).catch((err) => {
        console.log(err);
      });
  }
}