import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'; 
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'; 
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './components/store/rootReducer';
import { ADD_MESSAGE } from './components/store/actions/addMessage';
import { setMessage } from './components/store/actions/addMessage';
import { PersistGate } from 'redux-persist/integration/react';
import { CircularProgress } from '@material-ui/core';


const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

const persistConfig = {
  key: 'root',
  storage,
}

//мидлвэр на сообщение робота
function botMiddleware(store){
  return function(next){
    return function(action) {
      if (action.type === "CHAT::ADD_MESSAGE" && action.payload.author === 'Kostya') {
        const robotResponce = {author:'Robot', text: `${action.payload.author} message is send`};
        setTimeout (()=> store.dispatch(setMessage(robotResponce, action.id)), 2000);
      }
      const result = next(action);
      console.log(store.getState());
      return result;
    }
  }
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(botMiddleware, thunk)));

export const persistor = persistStore(store);
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
