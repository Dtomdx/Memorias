import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
/* login google */
import { GoogleOAuthProvider } from '@react-oauth/google'
/* redux */
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import { thunk} from "redux-thunk"
import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)))
//para dev 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* tailwind mui */
import { StyledEngineProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';


const CLIENT_ID = "451321955531-660jh2974q55sebnthrm7fammqp88ekv.apps.googleusercontent.com"

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <Provider store={store}>
      <StrictMode>
        <StyledEngineProvider enableCssLayer>
          <GlobalStyles styles="@layer theme, base, mui, components, utilities;"/>
          <App />
        </StyledEngineProvider>
      </StrictMode>,
    </Provider>
  </GoogleOAuthProvider>
)
