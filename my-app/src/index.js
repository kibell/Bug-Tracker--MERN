import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {configureStore, combineReducers} from '@reduxjs/toolkit'

//Reducer
import AuthReducer from './Controllers/Redux/authSlice'
import bugReducer from './Controllers/Redux/bugSlice'
import userReducer from './Controllers/Redux/userSlice'


//Redux Configure
const reducer = combineReducers({
auth: AuthReducer,
bug: bugReducer,
user:userReducer

})

const store = configureStore({
  reducer
})


ReactDOM.render(
  <Provider store ={store}>

      <App />
  </Provider>
    
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
