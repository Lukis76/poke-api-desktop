import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)

postMessage({ payload: 'removeLoading' }, '*')