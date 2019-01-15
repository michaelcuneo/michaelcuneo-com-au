import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MediaQuery from 'react-responsive';
import { createStructuredSelector } from 'reselect';
import UserBadge from 'components/UserBadge';
import UserModal from 'components/UserModal';

import { Greetings } from 'aws-amplify-react';

import {
  makeSelectUserName,
  makeSelectPicture,
} from 'containers/User/selectors';

import UserName from './UserName';
import UserArea from './UserArea';
import { DropDown, DropDownButton, DropDownContent } from './Dropdown';

class UserWidget extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {};
    this.close = this.close.bind(this);
    this.show = this.show.bind(this);
  }

  show() {
    this.setState({ show: true });
  }

  close() {
    this.setState({ show: false });
  }

  render() {
    const { username, picture } = this.props;

    if (username) {
      return [
        <MediaQuery key="widgetDesktop" minWidth={1224}>
          {matches => {
            if (matches) {
              return [
                <UserArea key="userArea">
                  <UserBadge key="userBadge" picture={picture} />
                  <UserName key="userName">{username} </UserName>
                  <DropDown key="dropDown">
                    <DropDownButton
                      onMouseOver={this.show}
                      onFocus={this.close}
                    >
                      &#9660;
                    </DropDownButton>
                    <UserModal
                      closeOnOuterClick
                      show={this.state.show}
                      onClose={this.close}
                      transitionSpeed={50}
                    >
                      <DropDownContent key="content">
                        <Greetings />
                      </DropDownContent>
                    </UserModal>
                  </DropDown>
                </UserArea>,
              ];
            }
            if (!matches) {
              return [
                <UserArea key="userArea">
                  <Greetings />
                  <UserName>{username}</UserName>
                  <UserBadge picture={picture} />
                </UserArea>,
              ];
            }
            return null;
          }}
        </MediaQuery>,
      ];
    }
    return null;
  }
}

UserWidget.propTypes = {
  username: PropTypes.string,
  picture: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  username: makeSelectUserName(),
  picture: makeSelectPicture(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(UserWidget);
