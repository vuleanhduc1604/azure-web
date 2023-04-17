import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './pages/home/Home'
import { Provider } from 'react-redux'
import Aboutus from './pages/aboutus/Aboutus'
import Services from './pages/services/Services'
import Newsandblogs from './pages/newsandblogs/Newsandblogs'
import Team from './pages/team/Team'
const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<Home />}/>
    <Route path='/aboutus' element={<Aboutus />}/>
    <Route path='/services' element={<Services />} />
    <Route path='/newsandblogs' element={<Newsandblogs />} />
    <Route path='/team' element={<Team />} />
  </Route>
)

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
