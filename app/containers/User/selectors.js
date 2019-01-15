import { createSelector } from 'reselect';

const selectUser = state => state.get('user');

const makeSelectUserName = () =>
  createSelector(selectUser, userState => userState.get('username'));

const makeSelectLoggedIn = () =>
  createSelector(selectUser, userState => userState.get('loggedIn'));

const makeSelectPicture = () =>
  createSelector(selectUser, userState => userState.get('picture'));

export {
  selectUser,
  makeSelectUserName,
  makeSelectLoggedIn,
  makeSelectPicture,
};
