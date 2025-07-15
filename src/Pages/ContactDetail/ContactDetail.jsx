import React, { useContext, useEffect, useState } from 'react'
import './ContactDetail.css'
import { useNavigate, useParams } from 'react-router-dom'
import { ContactContext } from '../../Context/Context'
import { faDollar, faEnvelope, faMailBulk, faMessage, faPalette, faPhone, faUser, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast } from 'react-toastify';
const ContactDetail = () => {
  const url = useParams()
const { usersdetails,setusersdetail } = useContext(ContactContext);
const [selectedUser, setselecteduser] = useState(null);
const navigate = useNavigate()

useEffect(() => {
  const user = usersdetails.find(a => a.id == url.contactId);
  if (user) {
    setselecteduser(user);
  }
  console.log(usersdetails)
}, [usersdetails, url.contactId]);

// delete contact 

   const deleteContact = () => {
    const updatedContacts = usersdetails.filter(contact => contact.id != url.contactId);
    setusersdetail(updatedContacts); // update context
    localStorage.setItem("contacts", JSON.stringify(updatedContacts)); // update local storage
     toast.success("Contact deleted successfully!");
      setTimeout(() => navigate('/'), 1000);
  };

 return (
  <div className='Contact-detail-page'>
    {selectedUser ? (
      <div className="contact-detail">
        <h3>{selectedUser.name}</h3>
        <div className="call-options">
          <div className="icon">
            <div className="div">
              <FontAwesomeIcon icon={faMessage} />
              <p>message</p>
            </div>   
          </div>
          <div className="icon">
            <div className="div">
              <FontAwesomeIcon icon={faPhone} />
              <p>Call</p>
            </div> 
          </div>
          <div className="icon">
            <div className="div">
              <FontAwesomeIcon icon={faVideoCamera} />
              <p>facetime</p>
            </div> 
          </div>
          <div className="icon">
            <div className="div">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>Email</p>
            </div> 
          </div>
        </div>
        <div className="mobil-num">
          <p>mobile</p>
          <p className='mobil-num-data'>{selectedUser.phone_number}</p>
        </div>
        <div className="note">
          notes
        </div>
        <button onClick={deleteContact}>Delete Contact</button>
      </div>
    ) : (
      <p>Loading contact details...</p>
    )}
  </div>
);

}

export default ContactDetail
