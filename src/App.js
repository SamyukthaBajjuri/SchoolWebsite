import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Contact from './Contact'
import Academics from './Academics'
import About from './About'
import Footer from './Footer'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/academics' element={<Academics/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
export default App
