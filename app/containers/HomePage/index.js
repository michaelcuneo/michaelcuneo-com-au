/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import { Gallery, Image, Overlay } from 'react-stylish-gallery';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    return [
      <Helmet key="Helmet">
        <title>Home Page</title>
        <meta name="description" content="Michael Cuneo Portfolio" />
      </Helmet>,
      <Gallery key="Gallery" withModal>
        <Image
          key="image1"
          src="https://via.placeholder.com/350x150"
          alt="Title of Image"
        >
          <Overlay key="title 1" title="Title of Image" />
        </Image>
        <Image
          key="image2"
          src="https://via.placeholder.com/350x150"
          alt="Title of Image"
        >
          <Overlay key="title 2" title="Title of Image" />
        </Image>
        <Image
          key="image3"
          src="https://via.placeholder.com/600x200"
          alt="Title of Image"
        >
          <Overlay key="title 2" title="Title of Image" />
        </Image>
        <Image
          key="image4"
          src="https://via.placeholder.com/300x500"
          alt="Title of Image"
        >
          <Overlay key="title 2" title="Title of Image" />
        </Image>
      </Gallery>,
    ];
  }
}

export default HomePage;
