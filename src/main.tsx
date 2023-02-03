import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@/state'
import App from './App'
import './index.css'
import { initializeFirebase } from '@/firebase'
import { initializeAlgoliaSearchClient } from '@/services'

initializeFirebase()
initializeAlgoliaSearchClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
)
