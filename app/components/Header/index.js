import React from 'react';
import { FormattedMessage } from 'react-intl';

import Facebook from 'images/fb.svg';
import Twitter from 'images/twit.svg';
import Linked from 'images/linked.svg';

import UserWidget from 'containers/UserWidget';
// import Responsive from 'react-responsive';
// import { slide as Menu } from 'react-burger-menu';

import NavBar from './NavBar';
import Img from './Img';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import HeaderLink from './HeaderLink';
import SocialLink from './SocialLink';
import messages from './messages';
import Title from './Title';
import Subtitle from './Subtitle';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    /*
    const Desktop = props => <Responsive {...props} minWidth={992} />;
    const Tablet = props => (
      <Responsive {...props} minWidth={768} maxWidth={991} />
    );
    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    const styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '24px',
        height: '24px',
        left: '24px',
        top: '24px',
      },
      bmBurgerBars: {
        background: 'darkgray',
      },
      bmCrossButton: {
        height: '24px',
        width: '24px',
      },
      bmCross: {
        background: 'gray',
      },
      bmMenu: {
        background: 'white',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
      },
      bmMorphShape: {
        fill: '#373a47',
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em',
      },
      bmItem: {
        display: 'flex',
        flexDirection: 'column',
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.4)',
      },
    };
    */

    return (
      <NavBar>
        <HeaderLeft>
          <Title>
            <FormattedMessage {...messages.michael} />
          </Title>
          <Subtitle>
            <FormattedMessage {...messages.three} />
          </Subtitle>
        </HeaderLeft>
        <HeaderRight>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/portfolio">
            <FormattedMessage {...messages.portfolio} />
          </HeaderLink>
          <HeaderLink to="/blog">
            <FormattedMessage {...messages.blog} />
          </HeaderLink>
          <HeaderLink to="/about">
            <FormattedMessage {...messages.aboutme} />
          </HeaderLink>
          {!this.props.loggedIn ? (
            <HeaderLink to="/admin">
              <FormattedMessage {...messages.admin} />
            </HeaderLink>
          ) : (
            <UserWidget />
          )}
          <SocialLink href="https://www.facebook.com/michael.cuneo.75">
            <Img src={Facebook} alt="Facebook" />
          </SocialLink>
          <SocialLink href="https://www.twitter.com/michaelcuneo">
            <Img src={Twitter} alt="Twitter" />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/michael-cuneo-257b81111/">
            <Img src={Linked} alt="LinkedIn" />
          </SocialLink>
        </HeaderRight>
      </NavBar>
    );
  }
}

export default Header;
