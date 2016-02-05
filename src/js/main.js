import React from 'react';
import ReactDOM from 'react-dom';
import LobstersApp from './components/lobstersApp';

ReactDOM.render(
  <LobstersApp postsUrl="http://lobste.rs/hottest.json" />,
  document.getElementById('root')
);
