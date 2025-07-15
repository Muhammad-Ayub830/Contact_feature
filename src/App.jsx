import React from 'react'
import ContactMenu from './Components/ContactMenu/ContactMenu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactDetail from './Pages/ContactDetail/ContactDetail'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<ContactMenu/>} />
      <Route path='/ContactDetail/:contactId' element={<ContactDetail/>}/>
    </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      
    </>
  )
}

export default App
