import React from 'react'
import ContactMenu from './Components/ContactMenu/ContactMenu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactDetail from './Pages/contactDetail/contactDetail'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<ContactMenu/>} />
      <Route path='/ContactDetail/:contactId' element={<ContactDetail/>}/>
    </Routes>
      
      
    </>
  )
}

export default App
