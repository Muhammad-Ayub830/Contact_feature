import React, { useState } from 'react'
import { createContext } from 'react'

export const ContactContext = createContext()
const Context = ({children}) => {
   
const[usersdetails,setusersdetail] = useState([])
  return (
    <ContactContext value={{usersdetails,setusersdetail}}>
        {children}
    </ContactContext>
  )
}

export default Context
