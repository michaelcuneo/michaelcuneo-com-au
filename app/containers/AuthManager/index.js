/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Hub } from 'aws-amplify';
import { withRouter } from 'react-router';

import injectSaga from 'utils/injectSaga';
import saga from './saga';

import { authLogin, authLogout } from './actions';

/* eslint-disable react/prefer-stateless-function */
class AuthManager extends React.PureComponent {
  constructor() {
    super();
    Hub.listen('auth', this, 'AuthListener');
  }

  componentWillUnmount() {
    Hub.remove();
  }

  async onHubCapsule(capsule) {
    const { channel, payload } = capsule;
    if (channel === 'auth') {
      this.onAuthEvent(payload);
    }
  }

  async onAuthEvent(payload) {
    const { event } = payload;

    switch (event) {
      case 'signIn':
        this.props.onLoggedIn(event);
        break;
      case 'signOut':
        this.props.onLoggedOut(event);
        break;
      default:
        break;
    }
  }

  render() {
    return [React.Children.only(this.props.children)];
  }
}

AuthManager.propTypes = {
  children: PropTypes.element.isRequired,
  onLoggedIn: PropTypes.func,
  onLoggedOut: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoggedIn: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(authLogin(evt));
    },
    onLoggedOut: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(authLogout(evt));
    },
  };
}

const withConnect = connect(
  () => {},
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'AuthManager', saga });

export default withRouter(
  compose(
    withConnect,
    withSaga,
  )(AuthManager),
);
