import React from 'react';
import { FormattedMessage } from 'react-intl';

import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import Spacer from './Spacer';

function Footer() {
  return (
    <Wrapper>
      <FormattedMessage {...messages.language} />
      <LocaleToggle />
      <Spacer />
      <FormattedMessage {...messages.platform} />
      <Spacer />
      <FormattedMessage
        {...messages.author}
        values={{
          author: 'Michael Cuneo',
        }}
      />
    </Wrapper>
  );
}

export default Footer;
