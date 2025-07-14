import React from 'react'
import './ContactDetail.css'
import { useParams } from 'react-router-dom'
const ContactDetail = () => {
  const url = useParams()
  return (
    <div className='Contact-detail'>
        <h1>{url.contactId}</h1>
    </div>
  )
}

export default ContactDetail
