import React from 'react'
import './index.scss';
import {Link} from 'react-router-dom'
import home from '../../assets/images/fitness_PNG109.png'
import {Stack,Box,Typography} from '@mui/material'
import Loader from 'react-loaders'
import OurTeam from './ourTeam';




const Home = () => {
  return (


    
   <>

    <Stack >

      <Box className='main-sections' >
      <div className='home-desception'>
        <Typography variant="h3" component="h3" >welcome to gym Algeria </Typography>
        <p> Gym in Barika is a friendly and well-equipped gym.
           Currently,<br /> the cheapest gym in the town,<br /> offering amazing value,<br />
           we provide over 60 FREE ‘instructor led fitness workshops and<br /> classes, every week.</p>
        <Typography mb='1rem' mt='1rem' variant='h5' >check out the most effective exercises personilzed to you</Typography>


        <Link to='contact' className='btn'>
         <Typography mt='1rem' sx={{fontSize:{lg:'20px',xs:'10px'}}} variant='span'> contact </Typography><i></i>
        </Link>
        
        

      </div>
      <div className='home-photo '>
      <img src={home} alt='home'/>
        
        


      </div>
      </Box>
     

      <OurTeam />
     

     
    </Stack>


    
    <Loader type="pacman" />

    
    </>
     )
    
}

export default Home