import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import './ContactMenu.css'
import Contact from '../Contact/Contact'
import { UsersContacts } from '../../Apis/UsersContacts'
import { faCross } from '@fortawesome/free-solid-svg-icons/faCross'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faClose } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { ContactContext } from '../../Context/Context'

const ContactMenu = () => {
  const {usersdetails,setusersdetail} = useContext(ContactContext)
  const [contacts, setcontact] = useState(localStorage.getItem("contacts") ? JSON.parse(localStorage.getItem("contacts")) : [])
  const [input, setinput] = useState('')
  const [filteredContacts, setFilteredContacts] = useState([])
  const name = useRef()
  const phone = useRef()
  const [addingContactLayou, setaddcontantLayout] = useState(true)

  // adding contact
  const add = () => {
    let newContactname = name.current.value.trim()
    let newContactphone = phone.current.value
    if (newContactphone === "" || newContactname === "") {
      return null
    }
    setcontact((prevContact) => [...prevContact, { name: newContactname, phone_number: newContactphone,id:Date.now() }])
    name.current.value = ""
    phone.current.value = ""
    setaddcontantLayout(true)
  }

  // removing contact
  const deleteContact = (id) => {
    setcontact((prev) => {
      return prev.filter((each) => each.phone_number !== id)
    })
  }

  // storing contacts in local storage
  useEffect(() => {
   setusersdetail(contacts)
    localStorage.setItem("contacts", JSON.stringify(contacts))
    setFilteredContacts(contacts) // Initialize filtered contacts with all contacts
    
  }, [contacts])

  // input handler and search functionality
  const inputHnadler = (event) => {
    const searchTerm = event.target.value.toLowerCase()
    setinput(searchTerm)
    
    if (searchTerm === '') {
      setFilteredContacts(contacts)
    } else {
      const filtered = contacts.filter(contact => 
        contact.name.toLowerCase().includes(searchTerm) || 
        contact.phone_number.includes(searchTerm)
      )
      setFilteredContacts(filtered)
    }
  }

  return (
    <div className="container">
      <div className="ContactMenu">
        
        <div className="search-compon">
          <div>
            <h3>Contacts</h3>
  <input 
            type="text" 
            placeholder='Search' 
            onChange={inputHnadler} 
            value={input}
          />
          </div>
        
          <div className='btn'>
            <div className={`new-contact ${(addingContactLayou) ? 'hide' : 'show'} `}>
              <FontAwesomeIcon icon={faClose} onClick={() => { setaddcontantLayout(true) }} className='corss-icon' />
              <input type="text" placeholder='Name' ref={name} required />
              <input type="number" placeholder='Number' ref={phone} required />
              <button onClick={add}>add</button>
            </div>
            <button onClick={() => { setaddcontantLayout(false) }}>Add <FontAwesomeIcon icon={faAdd}/></button>
          </div>
        </div>
        <div className="contacts">
          {
            filteredContacts.slice(0, 50).map((connection, index) => (
          <Contact 
                name={connection.name} 
                id={connection.id} 
                phone={connection.phone_number} 
                deleteContact={deleteContact} 
                key={index} 
                contacts={contacts}
              />
            ))
          }
          {filteredContacts.length === 0 && (
            <div className="no-contacts">No contacts found</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactMenu