/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Header from './components/header';
import HeroBanner from './components/herobanner';
import Prize from './components/prize';
// import Tutorial from './components/tutorial';
import Join from './components/join';
import Judge from './components/judge';
import Footer from './components/footer';

import { Events, scrollSpy } from 'react-scroll';

import './App.css';

const data = [
  {
    id: '0',
    title: 'About M360',
    link: 'home',
    isAnchor: true,
  },
  { id: '1', title: 'Prize', link: 'prize', isAnchor: true },
  // {
  //   id: '2',
  //   title: 'Tutorial Video',
  //   link: 'tutorial',
  //   isAnchor: true,
  // },
  {
    id: '3',
    title: 'How to join',
    link: 'join',
    isAnchor: true,
  },
  {
    id: '4',
    title: 'Our Judges',
    link: 'judge',
    isAnchor: true,
  },
  { id: '5', title: 'T&C', hrefLink: 'tc', isAnchor: false },
];


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }

  render() {
    return (
      <React.Fragment>
        <Header data={data} />
        <HeroBanner style={{ marginTop: '6.25rem' }} />
        <Prize />
        {/* <Tutorial /> */}
        <Join />
        <Judge />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
