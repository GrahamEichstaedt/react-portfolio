import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Nav from './components/Nav';
import About from "./components/About";
import Moon from './components/Moon';
import './App.css'


/**
 * NEW DESIGN IDEA
 * 
 * Nav is a selection of circles in the center of the page
 * Circles expand like a dune light when hovered
 * When clicked, they expand into the full page.
 * 
 * @returns 
 */
function App() {

  const [ inComponent, setInComponent ] = useState(false);

  return (
    <>
      <BrowserRouter >
        { inComponent ? 
          <button id="return-home" onClick={() => (
          setInComponent(false)
          )}>Home</button> : 
          <Nav setInComponent={setInComponent} />}
        <Moon />
        <Routes >
          <Route path="/" element={<Home setInComponent={setInComponent} />} />
          <Route path="/About" element={<About setInComponent={setInComponent} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
