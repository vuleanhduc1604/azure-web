import { useState } from 'react'
import { ReactDOM } from 'react'
import { useEffect } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router'



function App() {
  const authenticate = () => new Promise((resolve) => setTimeout(resolve, 2000)) // 2 seconds
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if (ele) {
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
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
