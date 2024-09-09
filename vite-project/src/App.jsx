import { useState } from 'react'


import './App.css'
import Hero from './Pages/Hero.jsx'
import Section from './Pages/Section.jsx'
import Section1 from './Pages/Section1.jsx'


function App() {
  const [count, setCount] = useState(0)
     return (
    <>
    <Hero/>
    <Section/>
    <Section1/>
    
    </>
    

  )
}

export default App
