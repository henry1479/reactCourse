import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'; 
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './components/store/rootReducer';


const store = createStore(rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION_&&
        window.__REDUX_DEVTOOLS_EXTENSION_());

const app = <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </BrowserRouter>
</Provider>

ReactDOM.render(app, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
