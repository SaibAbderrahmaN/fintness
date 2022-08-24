import React,{ useRef }from 'react'
import './index.scss'
import Loader from 'react-loaders'
import {Box,Stack,Typography} from '@mui/material'
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_957xmfj', 'template_tx735k6', form.current, '8iRdDorHR2UIKUGI2')
    .then(
      () => {
        alert('Message successfully sent!')
        window.location.reload(false)
      },
      () => {
        alert('Failed to send the message, please try again')
      }
    )
  };
  return (
    <>
    
<div className='contact-container'>
    <Box className='contact'>

<Box className='text'>
<Typography variant='h3'>
contct us
</Typography>
<p>At Our Gym barika, we love the sense of community that we are able to create!

We love getting to know you so why not get to know a little more about us?</p>

</Box>

 <Box className='contact-form'>
<form ref={form} onSubmit={sendEmail}>
<ul>
<li>
  <input type='name' placeholder='name' required />
</li>
<li>
  <input type='email' placeholder='email' required />
</li>

<li>
  <textarea name='message'  placeholder='message' required /> 
</li>
<li>
<input type='submit' placeholder='submit' className="flat-button" value="send" />


</li>
</ul>
</form>




 </Box>




</Box>



<div className="map-wrap">

          <MapContainer center={[35.381286,5.379843]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[35.381286,5.379843]}>
              <Popup>our gym here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        

  </div>


  





  </div>
    
   
       
        
      
      

    
 
    
    <Loader type="pacman" />
    </>
  )
}

export default Contact