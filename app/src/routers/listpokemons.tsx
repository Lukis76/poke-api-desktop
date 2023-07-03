import { RouteObject } from 'react-router-dom'
import CatalogOfPokemons from '../page/catalogOfPokemons'

export const Listpokemons: RouteObject = {
  path: '/listpokemons',
  element: <CatalogOfPokemons />,
}
