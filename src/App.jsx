import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Movies from './components/movies.jsx'
import Footer from './components/footer.jsx'
import Task from './components/task.jsx'
import './App.css'
import Header from './components/header.jsx'
function App() {
  return (
    <>
      <Header></Header>
      <Movies></Movies>
      <Footer></Footer>
    </>
     
  )
 
}

export default App
