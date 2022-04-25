import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import userStore from './store/userStore';
import deviceStore from './store/deviceStore';

export const Context = createContext(null)

ReactDOM.render(

  <Context.Provider value={{ // получение данных из контекста объектов
    user: new userStore(),
    device: new deviceStore()
  }}>
    <App />
  </Context.Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
