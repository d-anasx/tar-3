import React from 'react';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { configureStore } from  '@reduxjs/toolkit';
import employeeReducer from './redux/employeeSlice';
import App from './App';
import './index.css';

const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);