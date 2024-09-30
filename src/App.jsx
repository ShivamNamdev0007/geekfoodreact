import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Home/Navbar/Navbar.jsx'
import Section1 from './Home/section1/section1.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Section1/>
    </>
  )
}

export default App
