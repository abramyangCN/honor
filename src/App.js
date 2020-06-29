/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import cookies from 'react-cookies';
import { Events, scrollSpy } from 'react-scroll';

import Header from './components/header';
import HeroBanner from './components/herobanner';
import Prize from './components/prize';
import Tutorial from './components/tutorial';
import Winner from './components/winner';
import Join from './components/join';
import Judge from './components/judge';
import Footer from './components/footer';
import { isLogin } from './plugin/login';
import axios from 'axios';

import { apiHost } from './plugin/login';
import './App.css';

const data = [
  {
    id: '0',
    title: 'About M365',
    link: 'home',
    isAnchor: true,
    offset: '',
  },
  { id: '1', title: 'Prize', link: 'prize', isAnchor: true },
  {
    id: '2',
    title: 'Tutorial Video',
    link: 'tutorial',
    isAnchor: true,
    offset: '',
  },
  {
    id: '3',
    title: 'How To Join',
    link: 'join',
    isAnchor: true,
    offset: -160,
  },
  {
    id: '4',
    title: 'Our Judges',
    link: 'judge',
    isAnchor: true,
    offset: '',
  },
  // {
  //   id: '5',
  //   title: 'Winner',
  //   link: 'winner',
  //   isAnchor: true,
  //   offset: '',
  // },
  { id: '6', title: 'T&C', hrefLink: 'tc', isAnchor: false, offset: '' },
];

let cookieInfo = cookies.loadAll();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookie: {},
      countryList: [],
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

    this.setState({ cookie: cookieInfo, isLogin: isLogin() });

    axios
      .get(
        `//${apiHost}/abroad/shootMatch/galleryCountriesList?activityName=global_all_gallery`
      )
      .then((response) => {
        console.log(response);
        this.setState({ countryList: response.data.infoBean });
      })
      .catch(function (error) {
        console.log(error);
      });
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
        <Tutorial />
        <Join isLogin={isLogin()} countryList={this.state.countryList} />
        <Judge />
        {/* <Winner /> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
