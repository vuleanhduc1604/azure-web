import { useState } from 'react'
import { ReactDOM } from 'react'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router'



function App() {

  return (
    <div className="App">
      <Header />

      <Outlet />

      <Footer />
    </div>
  )
}

export default App
