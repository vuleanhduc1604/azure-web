import { useState } from 'react'
import { ReactDOM } from 'react'
import { useEffect } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router'



function App() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }, [])
  return (
    <div className="App">
      <Header />

      <Outlet />

      <Footer />
    </div>
  )
}

export default App
