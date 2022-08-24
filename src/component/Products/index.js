import React from 'react'
import { Stack , Typography , Box} from '@mui/material'
import Loader from 'react-loaders'
import './index.scss'
import {Link} from 'react-router-dom'

import pro from '../../assets/images/whey 55.png' 
import mas from '../../assets/images/mass.png' 
import advansed from '../../assets/images/whey advanced.png' 
import zama from '../../assets/images/zma capsules.png' 
import creating from '../../assets/images/creatine powder.png' 

const Products = () => {
  return (
    <>
     <Stack className='product' alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography variant="h5" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Products You <br /> Should buy
      </Typography>


      <Box className='container_card'>



        <Box className='card'>
            <img src={pro} alt='pro' />

          
          <Box className='det'>
            <Typography variant='h5'>whey protein </Typography>
            <Typography variant='h5'> 99.5$ </Typography>

            <Link to='contact' className='btn'>
         <Typography m='2rem' mt='1rem' sx={{fontSize:{lg:'20px',xs:'10px'}}} variant='span'> buy now </Typography><i></i>
        </Link>
            
          </Box>


        </Box>
        <Box className='card'>
            <img src={mas} alt='pro' />

          
          <Box className='det'>
            <Typography variant='h5'>mass protein </Typography>
            <Typography variant='h5'> 99.5$ </Typography>

            <Link to='contact' className='btn'>
         <Typography m='2rem' mt='1rem' sx={{fontSize:{lg:'20px',xs:'10px'}}} variant='span'> buy now </Typography><i></i>
        </Link>
            
          </Box>


        </Box>
        <Box className='card'>
            <img src={advansed} alt='pro' />

          
          <Box className='det'>
            <Typography variant='h5'>whey advanced </Typography>
            <Typography variant='h5'> 75.5$ </Typography>

            <Link to='contact' className='btn'>
         <Typography m='2rem' mt='1rem' sx={{fontSize:{lg:'20px',xs:'10px'}}} variant='span'> buy now </Typography><i></i>
        </Link>
            
          </Box>


        </Box>
        <Box className='card'>
            <img src={zama} alt='pro' />

          
          <Box className='det'>
            <Typography variant='h5'>zma capsules.png </Typography>
            <Typography variant='h5'> 61.95$ </Typography>

            <Link to='contact' className='btn'>
         <Typography m='2rem' mt='1rem' sx={{fontSize:{lg:'20px',xs:'10px'}}} variant='span'> buy now </Typography><i></i>
        </Link>
            
          </Box>


        </Box>
        <Box className='card'>
            <img src={creating} alt='pro' />

          
          <Box className='det'>
            <Typography variant='h5'>creatine powder </Typography>
            <Typography variant='h5'> 99.5$ </Typography>

            <Link to='contact' className='btn'>
         <Typography m='2rem' mt='1rem' sx={{fontSize:{lg:'20px',xs:'10px'}}} variant='span'> buy now </Typography><i></i>
        </Link>
            
          </Box>


        </Box>

      </Box>

      </Stack>
      <Loader type="pacman" />
    </>
  )
}

export default Products