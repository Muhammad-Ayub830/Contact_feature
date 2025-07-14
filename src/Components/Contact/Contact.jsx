import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Contact = ({name,phone,deleteContact,id}) => {
  return (
    <Link      to={`/ContactDetail/${id}`} className="contact">
        <div className="contact-name">{name}</div>
        <div className="contact-info">
            <div className="icon info">
              <FontAwesomeIcon icon={faInfo}/>
                 <div className="display-num">
                  <div >{phone}</div>
                  {/* <p onClick={()=>{deleteContact(phone)}} style={{fontSize:'small',lineHeight:'3'}}>Delete Contact</p> */}
                  </div>
                
              </div>
            <div className="icon"><FontAwesomeIcon icon={faMessage} /></div>
            <div className="icon"><FontAwesomeIcon icon={faPhone} /></div>   
        </div>
    </Link>
  )
}

export default Contact
