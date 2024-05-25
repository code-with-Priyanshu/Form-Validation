import React from 'react'
import MainForm from './components/MainForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SuccessForm from './components/SuccessForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainForm />} />
        <Route path="/successPage" element={<SuccessForm />} />
      </Routes>
    </Router>
  )
}

export default App
