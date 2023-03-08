import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from './components/Shared/Footer/Footer'
import Header from './components/Shared/Header/Header'

import Mainroutes from './routes/Mainroutes'


const App = () => {
  return (
    <>
    <Header/>

    <div className='container' style={{"minHeight" : "500px"}}>
    <Mainroutes/>
    </div>
    <Footer/>
    </>
   
  )
}

export default App