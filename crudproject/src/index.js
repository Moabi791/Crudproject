import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCe3UlcSQrbmpnGIinN3gEOZJVAkHPcCgs",
  authDomain: "crudproject-3b9e1.firebaseapp.com",
  projectId: "crudproject-3b9e1",
  storageBucket: "crudproject-3b9e1.appspot.com",
  messagingSenderId: "899052077374",
  appId: "1:899052077374:web:12db32fd9424489f94ec6f",
  measurementId: "G-XWMG0K23WX"
};

firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();