import React from 'react';
import ReactDOM from 'react-dom';
import LobstersApp from './components/lobstersApp';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const tabs = [
  {
    label: 'Hottest',
    url: 'http://lobste.rs/hottest.json'
  },
  {
    label: 'Newest',
    url: 'http://lobste.rs/newest.json'
  }
];

ReactDOM.render(
  <LobstersApp
    title='Lobste.rs'
    color='#AC130D'
    tabs={ tabs }
  />,
  document.getElementById('root')
);
