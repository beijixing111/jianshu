import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  title: '',
  content: ''
});


export default (state = defaultState, action) => {
  // immutable对象的set方法，会结合之前immutable对象的值
  // 和设置的值，返回一个全新的对象
  // console.
  switch (action.type) {
    case constants.CHANGE_DETAIL_DATA:
      return state.merge({
        title: action.data.title,
        content: action.data.content
      });
    default:
      return state;
  }
}