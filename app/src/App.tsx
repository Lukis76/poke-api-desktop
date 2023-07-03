import { router } from '@/routers/initialRoting'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'

function App() {
  return (
    <div className='content-root'>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
