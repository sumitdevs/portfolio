import Home from './components/home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Roots from './routes/roots'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Work from './components/Work'
import './app.css'

export function App() {
  const route = createBrowserRouter([
    {
      path:'/',
      element: <Roots/>,
       children: [
        {
          path:"",
          element: <Home/>
        },
        {
          path:"/contact",
          element: <Contact/>
        },
        {
          path:"/work",
          element: <Work/>
        },
        {
          path:"/blog",
          element: <Blog/>
        }
       ]
    }
  ])
  return (
    <RouterProvider router={route}/>
  )
}
