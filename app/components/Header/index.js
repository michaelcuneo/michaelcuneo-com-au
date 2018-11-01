import React from 'react';
import { FormattedMessage } from 'react-intl';

import Facebook from 'images/fb.svg';
import Twitter from 'images/twit.svg';
import Linked from 'images/linked.svg';

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
          <HeaderLink to="/admin">
            <FormattedMessage {...messages.admin} />
          </HeaderLink>
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
