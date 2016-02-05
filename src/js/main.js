import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import moment from 'moment';
import * as Immutable from 'immutable';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';

import LobstersApp from './components/lobstersApp';

ReactDOM.render(
  <LobstersApp postsUrl="http://lobste.rs/hottest.json" />,
  document.getElementById('root')
);
