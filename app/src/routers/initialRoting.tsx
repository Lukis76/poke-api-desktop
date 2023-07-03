import { createBrowserRouter } from 'react-router-dom'
import { About } from './about'
import { Home } from './home'
import { Listpokemons } from './listpokemons'

export const router = createBrowserRouter([Home, About, Listpokemons])
