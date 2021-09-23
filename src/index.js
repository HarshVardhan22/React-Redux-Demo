import React from 'react';
import ReactDOM from 'react-dom';
//! importing provider whose function is same as of a context provider
import {Provider} from 'react-redux'

//!importing the store thatwe created and it will have all the data stored 
import store from './store';


import './index.css';
import App from './App';


//!to let the redux provider know what it has to provide or from where it has prop named store
//!we pass the store we created to this Provider andconnect them
ReactDOM.render(<Provider store={store}><App /></Provider> ,document.getElementById('root'));
