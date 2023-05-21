import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './pages/home/Home'
import Aboutus from './pages/aboutus/Aboutus'
import Services from './pages/services/Services'
import Newsandblogs from './pages/newsandblogs/Newsandblogs'
import Team from './pages/team/Team'
import Error from './pages/error/Error'
import Addnews from './components/addnews/Addnews'
import Rendernewstest from './components/rendernewstest/Rendernewstest'
import Addcores from './components/addcores/Addcores'
import Rendercorestest from './components/rendercorestest/Rendercorestest'
import Addmembers from './components/addmembers/Addmembers'
import News from './pages/news/News'

const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<Home />}/>
    <Route path='/aboutus' element={<Aboutus />}/>
    <Route path='/services' element={<Services />} />
    <Route path='/newsandblogs' element={<Newsandblogs />} />
    <Route path='/news/:id' element={<News />} />
    <Route path='/team' element={<Team />} />
    <Route path='/addnews' element={<Addnews />}   />
    <Route path='/rendernewstest' element={<Rendernewstest />} />
    <Route path='/addcore' element={<Addcores />}></Route>
    <Route path='/rendercorestest' element={<Rendercorestest />}></Route>
    <Route path='/addmembers' element={<Addmembers />}></Route>
    <Route path='*' element={<Error />} />
  </Route>
)

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
