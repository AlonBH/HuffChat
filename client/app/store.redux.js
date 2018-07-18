import { createStore, combineReducers, applyMiddleware } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import reduxLogger from 'redux-logger';
import { reducer as form } from 'redux-form';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: '/api'
});

export default createStore(
  combineReducers({
    form
  }),
  applyMiddleware(
    axiosMiddleware(axiosClient),
    reduxLogger
  )
);