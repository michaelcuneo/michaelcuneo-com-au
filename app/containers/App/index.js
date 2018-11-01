/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import BlogPage from 'containers/BlogPage/Loadable';
import PortfolioPage from 'containers/PortfolioPage/Loadable';
import AdminPage from 'containers/AdminPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import Content from './Content';
import AppWrapper from './AppWrapper';

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Content>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </Content>
      <Footer />
    </AppWrapper>
  );
}
