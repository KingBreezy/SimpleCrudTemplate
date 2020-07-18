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

