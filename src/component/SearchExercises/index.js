
import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import {Link} from 'react-router-dom'

import './index.scss'



const SearchExercises = () => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6ee2724213msh85545fe409ffca1p158dc5jsn3d7963671592',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  useEffect(()=>{

    fetchme()
  },[search])
  



  

 const fetchme =()=>{   
  
  fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${search}`, options)

    .then(response => response.json())
    .then(response =>setBodyParts(response))
    .catch(err => console.error(err));

  }
  
  

  

  return (
    <Stack className='searchExo' alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography variant="p" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      
      <Box position="relative" mb="72px">
        <TextField
        
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} >
          Search
        </Button>
      </Box>
      <Box className='exercisesone' sx={{ position: 'relative', width: '100%', p: '20px' }}>

        {bodyParts.map((item)=>{
         return (<Box   className='card'>

          <Box className='card-img'><img src={item.gifUrl} alt='img' /> </Box>

          <Box className='content'>    
          <Typography variant="h5" component="h5" ><span>name:</span> {item.name.substring(0,30)} </Typography>
          <Typography variant="h5" component="h5" ><span>equip:</span>{item.equipment} </Typography>

     
          <Typography variant="h5" component="h5" a><span>target:</span> {item.target} </Typography>

           </Box>


           <Box mt='1.5rem' ml='4rem' > 
           <Link to='contact' className='btn'>
         <span> more info</span><i></i>
        </Link>
           </Box>
         
        
          </Box>
         )
        })}

      </Box>
    </Stack>
  );
};
 
/*<Typography variant="h6" component="h6" >target: {item.target} </Typography>

<Typography variant="h6" component="h6" >{item.equipment} </Typography>*/

export default SearchExercises;





/*import React,{useEffect, useState} from 'react'
import{Box,Button,Stack,TextField,Typography}from '@mui/material'
import './index.scss'
import {FetchData, exercisesOptions }from '../../utils/FetchData'
import HorizontlScroleBar from '../../component/SearchExercises/hHorizontle/HorizontlScroleBar'





const SearchExercises = () => {


  const[Search,setSearch]=useState('');
  const[Eercises,setEercises]= useState([]);
  const[bodyparts,setbodyparts]= useState([]);


  useEffect(()=>{
    const FetchExercisesData= async ()=>{
      const bodyPartsData= await FetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exercisesOptions)
      setbodyparts(['all', ...bodyPartsData])
    }

    FetchExercisesData();


  },[])


  const handleSearh=async ()=>{
    if (Search) {
      const exercisesData= await FetchData('https://exercisedb.p.rapidapi.com/exercises',exercisesOptions)
      const searchedEsercises= exercisesData.filter((exercise)=> 
        exercise.name.toLowerCase().includes(Search)
      ||exercise.target.toLowerCase().includes(Search)
      ||exercise.equipment.toLowerCase().includes(Search)
      ||exercise.bodyPart.toLowerCase().includes(Search)
      );
      setSearch('');
      setEercises (searchedEsercises);
    }
  
  }
  return (


    <Stack className='searchExo'  alignItems='center' mt='37px' justifyContent='center' p='20px'>

        <Typography className='pa' fontWeight='700' sx={{fontSize:{lg:'44',xs:'30px'}}} 
        mb='50px' 
        textAlign='center' color='#FF2625' fontFamily='La Belle Aurore'>
          Awesome Item You <br /> Should Know
          </Typography>
          <Box position='relative' mb='72px'>
            <TextField sx={{
              input:{fontWheight:'700',
              border:'none' ,
              borderRadius:'4px'},width:{lg:'800px' ,xs:'350px'}
              ,backgroundColor:'#fff',borderRadius:'4px'
            }}
             height='76px' value={Search}
              onChange={(e)=>{setSearch(e.target.value.toLowerCase())}} 
              placeholder='Search Exercises' type='text'/>

             <Button className='search-btn' 
             sx={{backgroundColor:'#ff2625',color:'#fff',width:{lg:'125px',xs:'80px'},fontSize:{lg:'20px',xs:'14px'}
             ,height:'56px',position:'absolute'}} onClick={handleSearh} >
              Search</Button>





          </Box>

          <Box position='relative' width='100%' p='20px'>
            <HorizontlScroleBar  data={bodyparts}  />
          </Box>





    </Stack>
  )
}

export default SearchExercises */