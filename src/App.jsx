import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Index from './Components/Index'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header/>
<Footer/>
</>
  )
}

export default App
