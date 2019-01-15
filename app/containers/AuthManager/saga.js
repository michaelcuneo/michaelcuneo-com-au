/**
 * Gets the repositories of the user from Github
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { getCurrentSession } from 'utils/awsLib';

import decode from 'jwt-decode';

import userImage from 'images/user.svg';
import { setUser, setLoggedIn } from 'containers/User/actions';
import { AUTH_LOGIN, AUTH_LOGOUT } from './constants';

export function* setLogin() {
  let token;
  let decoded;
  let user;

  // Call function to get Userdata from AWS Auth.
  const session = yield call(checkCurrentSession);

  // If the user isn't no current user...
  // Grab the Token, Decode the Token, and pull the username and picture.
  if (session !== 'No current user') {
    token = session.idToken.jwtToken;
    decoded = decode(token);
    user = {
      username: decoded['cognito:username'],
      picture: userImage,
    };
  }

  try {
    yield put(setUser(user));
    yield put(setLoggedIn(true));
    yield put(push('/'));
  } catch (err) {
    yield put(setLoggedIn(false, err));
  }
}

export function* setLogout() {
  try {
    yield put(setLoggedIn(false));
    yield put(push('/'));
  } catch (err) {
    yield put(setLoggedIn(false, err));
  }
}

async function checkCurrentSession() {
  return getCurrentSession().then(result => result);
}

export default function* changeLoggedIn() {
  yield all([
    takeLatest(AUTH_LOGIN, setLogin),
    takeLatest(AUTH_LOGOUT, setLogout),
  ]);
}
