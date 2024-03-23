import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(!isLoading)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App">
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
