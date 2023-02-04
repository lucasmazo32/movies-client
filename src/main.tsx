import { initializeFirebase } from '@/firebase'
import { initializeAlgoliaSearchClient } from '@/services'
import { store } from '@/state'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { ErrorBoundary } from '@/components'
import './index.css'

initializeFirebase()
initializeAlgoliaSearchClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
)
