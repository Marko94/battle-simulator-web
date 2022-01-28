import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStore from "./GlobalStore";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStore>
      <App />
    </GlobalStore>
  </React.StrictMode>,
  document.getElementById('root')
);

// measure performance in our battle app, more on this link: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
