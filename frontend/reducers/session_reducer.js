import { merge } from 'lodash';

import {
  RECEIVE_CURRENT_USER,
  SESSION_LOGOUT
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  let currentUser = action.currentUser;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { currentUser });
    case SESSION_LOGOUT:
      return merge({}, { currentUser });
    default:
      return oldState;
  }
};

export default sessionReducer;
