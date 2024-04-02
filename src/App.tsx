import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import './App.css'

import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/Home'
import About from './pages/About'
// import Project from './pages/Project'
import Contact from './pages/Contact'

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: white;
  height: 100vh;
`

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App">
      {isLoading ? (
        <LoadingContainer>Loading...</LoadingContainer>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/project" element={<Project />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </>
      )}
    </div>
  )
}

export default App
