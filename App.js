import React, {Component} from 'react';
import {Provider} from 'react-redux';

import Map from './src/screens/Map';
// import Map from './src/screens/Map copy';

import Home from './src/screens/Home';
import TabNav from './src/Components/Navigation/TabNavigation';

import store from './src/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <TabNav /> */}
        {/* // <Home /> */}
        <Map />
      </Provider>
    );
  }
}
