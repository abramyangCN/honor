/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import cookies from 'react-cookies';
import { Events, scrollSpy } from 'react-scroll';

import Header from './components/header';
import HeroBanner from './components/herobanner';
import Prize from './components/prize';
// import Tutorial from './components/tutorial';
import Join from './components/join';
import Judge from './components/judge';
import Footer from './components/footer';
import { isLogin } from './plugin/login';

import './App.css';

const data = [
  {
    id: '0',
    title: 'About M365',
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
    title: 'How To Join',
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

let cookieInfo = cookies.loadAll();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookie: {},
    };
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', arguments);
    });

    scrollSpy.update();

    console.log(cookieInfo);

    this.setState({ cookie: cookieInfo, isLogin: isLogin() });

    if (isLogin()) {
    }
  }

  getUserInfo() {
    console.log(this.state.cookie);
  }

  render() {
    return (
      <React.Fragment>
        <Header
          data={data}
          isLogin={isLogin()}
          username={this.state.cookie.displayName}
        />
        <HeroBanner style={{ marginTop: '6.25rem' }} />
        <Prize />
        {/* <Tutorial /> */}
        <Join username={this.state.cookie.displayName} userid={''} />
        <Judge />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
