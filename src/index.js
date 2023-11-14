import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>  <App/></BrowserRouter> {/* place entaire file in browserrouter it is imported from react-router-dom */}
 
  </React.StrictMode>
);

