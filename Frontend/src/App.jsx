import React from 'react'
import Home from './home/Home';
import Course from './components/Course';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Contact from './components/Contact';

function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

    </div>
  )
}

export default App