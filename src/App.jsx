import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Popular from './components/popular/Popular'
import NewsLetter from './components/newsletter/NewsLetter'

const App = () => {
  return (
    <>
      <Header/>
      <About/>
      <Popular/>
      <NewsLetter/>
    </>
  )
}

export default App