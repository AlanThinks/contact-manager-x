import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';
/* eslint-disable */
import Boostrap from 'bootstrap/dist/css/bootstrap.css';
/* eslint-enable */

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
