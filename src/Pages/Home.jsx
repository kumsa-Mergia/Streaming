import React from 'react'
import Sidebar from '../Component/Sidebar/Sidebar'
import Center from './Center'
import Play from "../Play/Play"

const Home = () => {
  return (
    <>
    <div className='flex h-screen'>
      <Sidebar />
      <Center />
<<<<<<< HEAD
=======
      <Album />
      {/* Make Vertical line */}
>>>>>>> ae16a3b7889845660812e8c0d263c01293c18cc3
    </div>

    <hr />
    
    <div>
      <Play /> 
    </div>
    </>
  )
}

export default Home
