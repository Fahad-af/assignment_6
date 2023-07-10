import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLocationDot,faCommentSms } from '@fortawesome/free-solid-svg-icons'


const Footer = ( props) => {
  return (
    <div>
      <center> <h1>{props.footer}</h1> </center> 
      <center>
    <h1>Email: <FontAwesomeIcon icon={faEnvelope} /></h1>  
   <h1>Location:<FontAwesomeIcon icon={faLocationDot} /></h1> 
   <h1>Mobile: <FontAwesomeIcon icon={faCommentSms} /></h1>
      </center>
     
    </div>
  )
}

export default Footer