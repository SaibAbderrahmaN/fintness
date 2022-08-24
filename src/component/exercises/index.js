import React from 'react'
import SearchExercises from '../SearchExercises'
import Loader from 'react-loaders'

const Exercises = () => {
  return (
    <>
    <div className='exer'>
        <SearchExercises   />
    </div>
    <Loader type="pacman" />

    </>
  )
}

export default Exercises