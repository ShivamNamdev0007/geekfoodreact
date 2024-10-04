import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Home/Home'
import Quote from './Quote/Quote'
 



// const App = () => {


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Quote/> */}
     <HomePage/>
    </>
  )
}

export default App
