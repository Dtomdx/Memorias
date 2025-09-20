import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/* redux */
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import { thunk} from "redux-thunk"
import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)))
//para dev 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>,
  </Provider>
)
