import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'; 
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


const app = <BrowserRouter>
<React.StrictMode>
    <App />
  </React.StrictMode>
</BrowserRouter>

ReactDOM.render(app, document.getElementById('root'));

reportWebVitals();
