import axios from 'axios';
import * as constants from './constants';

const changeDetailData = (data) => ({
  type: constants.CHANGE_DETAIL_DATA,
  data
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get("http://localhost:3200/detail.json?id=" + id).then((res) => {
      const result = res.data.data;
      console.log(result);
      dispatch(changeDetailData(result));
    }).catch((err) => {
      console.log(err);
    });
  }
}