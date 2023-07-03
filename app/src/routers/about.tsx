import { RouteObject } from 'react-router-dom'

export const About: RouteObject = {
  path: "/about",
  element: <div >
    {/* <h1>About</h1> */}
    <button>
      <a href="/">Home</a>
    </button>
  </div>,
}
