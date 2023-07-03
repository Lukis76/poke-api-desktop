import { RouteObject } from 'react-router-dom'

export const Home: RouteObject = {
  path: '/home',
  element: (
    <div>
      {/* <h1>Home</h1> */}
      <button>
        <a href='/about'>About</a>
      </button>
    </div>
  ),
}
