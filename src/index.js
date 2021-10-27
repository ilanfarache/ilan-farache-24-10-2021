import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux
import {Provider} from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "./reducers"
import { getWeather } from './actions/weather.action';
import { getFiveDays } from './actions/fivedays.action';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

 
store.dispatch(getWeather());
store.dispatch( getFiveDays());


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
