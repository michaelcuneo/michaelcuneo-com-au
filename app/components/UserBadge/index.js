import React from 'react';
import PropTypes from 'prop-types';
import UserBadgeImg from './UserBadgeImg';

// eslint-disable-next-line react/prefer-stateless-function
export default class UserBadge extends React.Component {
  static propTypes = {
    picture: PropTypes.string.isRequired,
  };

  render() {
    return <UserBadgeImg alt="avatar" src={this.props.picture} />;
  }
}
