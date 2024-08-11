import React from 'react'
import './App.css'
import {Box} from '@mui/material'
import {Route, Routes} from 'react-router-dom'
// import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Navbar from './components/Navbar'

// import ExerciseDetail from './pages/ExerciseDetail'

const App = () => {
  return (
<>
<Box>
    <Navbar/>
    <Routes>
<Route path='/' element={<Home/>} />
<Route path='/exercise/:id' element={<ExerciseDetail/>}/>
</Routes>
<Footer/>
</Box>

    </>
  )
}

export default App