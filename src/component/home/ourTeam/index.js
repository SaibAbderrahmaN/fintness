import React from 'react'
import './index.scss'
import {Stack,Box,Typography} from '@mui/material'
import coach from '../../../assets/images/coach.jpg'
import coachone from '../../../assets/images/th.jpg'
import coachtwo from '../../../assets/images/OIP (1).jpg'
import coachthree from '../../../assets/images/OIP.jpg'
import {faFacebook,faYoutube,faLinkedin,faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'


const OurTeam = () => {
  return (
    <Stack mt='6rem' className='team'>
              <Box className='container'>
          <Box className='box'>
            <Typography variant='h3'>our team</Typography>
            <p >is a barbell workout for anyone looking to get lean,
             toned, strong and fit, fast. Using light to moderate weights with lots of repetition,
              BODYPUMP gives you a total body workout, burning up to *540 calories, shapes and tones your
               entire body, increases core strength and improves bone health. Instructors will coach you through
                the scientifically proven moves and techniques pumping out encouragement, motivation and great music
                 helping you achieve much more than on your own! This program is based on THE REP EFFECT, a proven
                  formula to develop lean, athletic muscle. You’ll leave the class feeling challenged and motivated, 
                  ready to come back for more. BODYPUMP is the most successful and popular fitness program in 
                  the world!</p>
          </Box>
          <Box className='box'  mt='50px'>
            <Box className='colume'>
            <Box className='img-box'>
            <img src={coachone} alt='one'/>

            </Box>
            <Box className='detail'>
              <Typography variant='h4'>member name <br/> <span>athlet and coach</span></Typography>
              <ul>
                <li>
                  <Link to='www.facebook.com'><FontAwesomeIcon icon={faFacebook}/></Link>
                </li>
                <li>
                  <Link to='www.youtube.com'><FontAwesomeIcon icon={faYoutube}/></Link>
                </li>
                <li>
                  <Link to='www.twitter.com'><FontAwesomeIcon icon={faTwitter}/></Link>
                </li>
                <li>
                  <Link to='www.linkedin.com'><FontAwesomeIcon icon={faLinkedin}/></Link>
                </li>
                <li>
                  <Link to='www.instgram.com'><FontAwesomeIcon icon={faInstagram}/></Link>
                </li>
              </ul>
            </Box>

            </Box>
            <Box className='colume'>
            <Box className='img-box'>
            <img src={coachtwo} alt='couchtwo'/>
            </Box>
            <Box className='detail'>
              <Typography variant='h4'>member name <br/> <span>athlet and coach </span></Typography>
              <ul>
                <li>
                  <Link to='www.facebook.com'><FontAwesomeIcon icon={faFacebook}/></Link>
                </li>
                <li>
                  <Link to='www.youtube.com'><FontAwesomeIcon icon={faYoutube}/></Link>
                </li>
                <li>
                  <Link to='www.twitter.com'><FontAwesomeIcon icon={faTwitter}/></Link>
                </li>
                <li>
                  <Link to='www.linkedin.com'><FontAwesomeIcon icon={faLinkedin}/></Link>
                </li>
                <li>
                  <Link to='www.instgram.com'><FontAwesomeIcon icon={faInstagram}/></Link>
                </li>
              </ul>
            </Box>
            </Box>
            <Box className='colume'>
            <Box className='img-box'>
              <img src={coach} alt='couch'/>
            </Box>
            <Box className='detail'>
              <Typography variant='h4'>member name <br/> <span>athlet and coach </span></Typography>
              <ul>
                <li>
                  <Link to='www.facebook.com'><FontAwesomeIcon icon={faFacebook}/></Link>
                </li>
                <li>
                  <Link to='www.youtube.com'><FontAwesomeIcon icon={faYoutube}/></Link>
                </li>
                <li>
                  <Link to='www.twitter.com'><FontAwesomeIcon icon={faTwitter}/></Link>
                </li>
                <li>
                  <Link to='www.linkedin.com'><FontAwesomeIcon icon={faLinkedin}/></Link>
                </li>
                <li>
                  <Link to='www.instgram.com'><FontAwesomeIcon icon={faInstagram}/></Link>
                </li>
              </ul>
            </Box>
            </Box>
            <Box className='colume'>
            <Box className='img-box'>
            <img src={coachthree} alt='couchthree'/>

            </Box>
            <Box className='detail'>
              <Typography variant='h4'>member name <br/> <span> athlet and coach </span></Typography>
              <ul>
                <li>
                  <Link to='www.facebook.com'><FontAwesomeIcon icon={faFacebook}/></Link>
                </li>
                <li>
                  <Link to='www.youtube.com'><FontAwesomeIcon icon={faYoutube}/></Link>
                </li>
                <li>
                  <Link to='www.twitter.com'><FontAwesomeIcon icon={faTwitter}/></Link>
                </li>
                <li>
                  <Link to='www.linkedin.com'><FontAwesomeIcon icon={faLinkedin}/></Link>
                </li>
                <li>
                  <Link to='www.instgram.com'><FontAwesomeIcon icon={faInstagram}/></Link>
                </li>
              </ul>
            </Box>
            </Box>
          </Box>
          <div stayl="clear:both;"></div>
        </Box>













      
 

      
        <Box className='conta'>
        <Typography variant='h3' textAlign='center' color='red'mb='3rem' mt='5rem'
        sx={{fontSize:{lg:'40px',xs:'25px'}}}>OUR CLASS DESCRIPTION'S</Typography>
            <Box className='row'm='4rem' >
                <Typography variant='h7'sx={{fontSize:{lg:'20px',xs:'18px'}}}>Les Mills BODYATTACK : </Typography>
                <Typography variant='p'> is a high energy sports inspired fitness class with moves that cater for total beginners to total addicts. Our instructors offer low and high impact options throughout the class to ensure success. We combine athletic movements like running, lunging and jumping with strength exercises such as push-ups and squats. We will pump out energizing tunes and lead you through the workout, challenging your limits in a good way, burning up to *675 calories and leaving you with a sense of achievement</Typography>
            </Box>
            <Box className='row'm='4rem' >
                <Typography variant='h7' sx={{fontSize:{lg:'20px',xs:'18px'}}}>Les Mills BODYPUMP : </Typography>
                <Typography variant='p'> is a barbell workout for anyone looking to get lean, toned, strong and fit, fast. Using light to moderate weights with lots of repetition, BODYPUMP gives you a total body workout, burning up to *540 calories, shapes and tones your entire body, increases core strength and improves bone health. Instructors will coach you through the scientifically proven moves and techniques pumping out encouragement, motivation and great music helping you achieve much more than on your own! This program is based on THE REP EFFECT, a proven formula to develop lean, athletic muscle. You’ll leave the class feeling challenged and motivated, ready to come back for more. BODYPUMP is the most successful and popular fitness program in the world!</Typography>
            </Box>
            
            <Box className='row'm='4rem' >
                <Typography variant='h7' sx={{fontSize:{lg:'20px',xs:'18px'}}}> Les Mills GRIT : </Typography>
                <Typography variant='p'> LES MILLS GRIT SERIES is a 30-minute high-intensity interval training (HIIT) workout, designed to improve strength and build lean muscle.
                                        GRIT SERIES is available LIVE and VIRTUAL at World Gym Cairns. Grit Strength, Grit Cardio, Grit Athletic and Grit Plyo (Plyo available for phase out period as 
                                        Athletic now replaces this format from April 2019) This workout uses barbell, weight plate and body weight exercises to blast all major muscle groups. LES MILLS GRIT SERIES takes cutting edge scientifically proven HIIT and combines it with powerful music and inspirational coaches who will be down on the floor with you, motivating you to go harder to get fit, fast. Some of the benefits of GRIT SERIES includes rapidly improving strength, increasing lean muscle, puts your metabolism into overdrive burning calories hours after the workout ends, burning fat, increases aerobic fitness and gets you out of your comfort zone all in 30 minutes!!!! It's a no brainer...
                </Typography>
            </Box>
            <Box className='row'm='4rem' >
                <Typography variant='h7' sx={{fontSize:{lg:'20px',xs:'18px'}}}>Les Mills RPM : </Typography>
                <Typography variant='p'>  is a group indoor cycling workouIt where you control the intensity.  It’s fun, low impact and you can burns loads of calories. With great music pumping and the group riding as one, your instructor takes you on a journey of hill climbs, sprints and flat riding. In an RPM workout you repeatedly spin the pedals to reach your cardio peak then ease back down, keeping pace with the pack to lift your personal performance and boost your cardio fitness. RPM is a great way to build up your sense of personal achievement. You can draw on the group’s energy and find your rhythm in the music. You control your own resistance levels and speed so you can build up your fitness level over time. It’s a journey, not a race!</Typography>
            </Box>
            <Box className='row'm='4rem' >
                <Typography variant='h7' sx={{fontSize:{lg:'20px',xs:'18px'}}}>HIIT : </Typography>
                <Typography variant='p'>  A 45min Strength & Conditioning session specially programmed for all fitness levels (beginners-advanced) this class is packed with loads Energy! 
                <ul className='list'>
                  <li>Functional Training</li>
                  <li>Learn the basics</li>
                  <li>Learn the basics</li>
                  <li>BURN FAT</li>
                  <li>Most importantly HAVE FUN!</li>
                </ul>

                </Typography>
            </Box>
            <Box className='row'm='4rem' >
                <Typography variant='h7' sx={{fontSize:{lg:'20px',xs:'18px'}}}>YOGA : </Typography>
                <Typography variant='p'>  In this class, postures are practiced to align, strengthen and promote
                 flexibility in the body. Breathing techniques and meditation are also integrated. You can expect an emphasis on simplicity, repetition, and ease of movement. Full-body relaxation and balance are the goals, as we make a full circuit of the body’s
                 range of motion with standing postures, twists, backbends, forward folds, and hip openers.</Typography>
            </Box>

        </Box>

       

    </Stack>

  )
}

export default OurTeam