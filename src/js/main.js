import React from 'react';
import ReactDOM from 'react-dom';
import LobstersApp from './components/lobstersApp';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <LobstersApp
    title='Lobste.rs'
    color='#AC130D'
    postsUrl="http://lobste.rs/hottest.json"
  />,
  document.getElementById('root')
);
