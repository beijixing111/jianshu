import { fromJS } from 'immutable';
import { REGISTER } from './constants';

const defaultState = fromJS({
  register: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case REGISTER:
      return state.set('register', action.value);
    default:
      return state;
  }
}