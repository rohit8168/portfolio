import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header.jsx'
import HeroSection from './component/page1.jsx'
import FullScreenShowcase from './component/page2.jsx'
import Services from './component/ServiceCard.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />
      <FullScreenShowcase />
      <Services />
    </>
  )
}



export default App;
