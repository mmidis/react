import React from 'react';
import ReactDOM from 'react-dom';

// import Saa from './components/Saa';
//import Sananlasku from './components/Sananlasku'; 

import MatkaApp from './MatkaApp'; 

// eka MatkaApp = miten lukee komponentissa ja toka miten tiedosto on nimetty

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MatkaApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
