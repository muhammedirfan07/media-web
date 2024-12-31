
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './componets/Header'
import Footers from './componets/Footers'

function App() {
 Routes

  return (
    <>
      {/* Landing(http://localhost:5173/)  home (http://localhost:5173/home) hestory(http://localhost:5173/histroy)  */}

       {/* HEADER */}
       <Header/>

      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/history' element={<History/>} />
      </Routes>

      {/* fOOTER */}
      <Footers/>
    </>
  )
}

export default App
