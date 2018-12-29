import axios from 'axios';
import { REGISTER } from './constants';


const successRegister = () => ({
  type: REGISTER,
  value: true
});

export const register = (account, password) => {
  return (dispatch) => {
    axios.get("http://localhost:3200/login.json?account=" + account + "&password=" + password)
      .then((res) => {
        const result = res.data.data;
        if (result) {
          dispatch(successRegister());
        }
      }).catch((err) => {
        console.log(err);
      })
  }
};