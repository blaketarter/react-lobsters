import React from 'react';
import NavBar from './navBar';
import SwipeableTabView from './swipableTabView';

export default class LobstersApp extends React.Component {  
  render() {
    return (
      <div>
        <NavBar title={ this.props.title } color={ this.props.color } />
        <SwipeableTabView tabs={ this.props.tabs } />
      </div>
    );
  }
};
