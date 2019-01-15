/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import HomePage from 'containers/HomePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import BlogPage from 'containers/BlogPage/Loadable';
import PortfolioPage from 'containers/PortfolioPage/Loadable';
import AdminPage from 'containers/AdminPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import { makeSelectLoggedIn } from 'containers/User/selectors';
import Responsive from 'react-responsive';
import { DesktopContent, MobileContent } from './Content';
import AppWrapper from './AppWrapper';

import GlobalStyle from '../../global-styles';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header loggedIn={props.loggedIn} />
      <Desktop>
        <DesktopContent>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route path="/admin" component={AdminPage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </DesktopContent>
      </Desktop>
      <Tablet>
        <MobileContent>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route path="/admin" component={AdminPage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </MobileContent>
      </Tablet>
      <Mobile>
        <MobileContent>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route path="/admin" component={AdminPage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </MobileContent>
      </Mobile>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}

App.propTypes = {
  loggedIn: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  loggedIn: makeSelectLoggedIn(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default withRouter(compose(withConnect)(App));
