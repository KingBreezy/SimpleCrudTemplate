import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './actions/store'
import {ToastProvider} from 'react-toast-notifications'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
// components are wrapped in browser router so that routing can be link, provider and toast provider so that each component can use
//the store and toasts respectively
ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <ToastProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ToastProvider>
  </BrowserRouter>,
  rootElement);

registerServiceWorker();

