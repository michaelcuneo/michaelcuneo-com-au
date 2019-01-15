import { fromJS } from 'immutable';
import DefaultUser from 'images/user.svg';

import { SET_USER, SET_LOGGED_IN, SET_LOGGED_OUT } from './constants';

const initialState = fromJS({
  username: null,
  loggedIn: false,
  picture: DefaultUser,
});

/* Figure out how to push a redirect from here so the page doesn't sit on LOGOUT indefinitely.
Apart from this the login flow works fine... */

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return state
        .set('username', action.user.username)
        .set('picture', action.user.picture);
    case SET_LOGGED_IN:
      return state.set('loggedIn', action.loggedIn);
    case SET_LOGGED_OUT:
      return state.set('loggedIn', false).clear();
    default:
      return state;
  }
}

export default userReducer;
