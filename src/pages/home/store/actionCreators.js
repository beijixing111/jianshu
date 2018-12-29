import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("http://localhost:3200/home.json").then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    }).catch((err) => {
      console.log(err);
    });
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get("http://localhost:3200/homeList.json?page=" + page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1));
    }).catch((err) => {
      console.log(err);
    });
  }
};

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
});