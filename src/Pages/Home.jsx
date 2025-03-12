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
    </div>

    <hr />
    
    <div>
      <Play /> 
    </div>
    </>
  )
}

export default Home