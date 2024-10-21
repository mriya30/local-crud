import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
// import store from './pages/redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import {Store, persistor} from './pages/reduxToolkit/Store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
)
