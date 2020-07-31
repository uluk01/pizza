import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import store from "./redux/store";

import './scss/app.scss'
import App from './App';


ReactDOM.render(
    /*<React.StrictMode>*/
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    /* </React.StrictMode>,*/
    document.getElementById('root')
);
