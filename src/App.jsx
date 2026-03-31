
import Movies from './components/movies.jsx'
import Footer from './components/footer.jsx'

import './App.css'
import Header from './components/header.jsx'
import Addmovie from './components/addmovie';
import { use, useState } from 'react';
function App() {
  const [newmovie,setnewmovie]=useState({title:"",year:""})
   const onsubmit=(data)=>{
     setnewmovie(data)
     console.log(data)
   }

  return (
    <>
   
      <Addmovie onsubmit={onsubmit}></Addmovie>
      <Movies newmovie={newmovie}></Movies>
      <Footer></Footer>
    </>
     
  )
 
}

export default App
