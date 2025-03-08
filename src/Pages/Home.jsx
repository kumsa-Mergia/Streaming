import React from 'react'
import Sidebar from '../Component/Sidebar/Sidebar'
import Center from './Center'
import Album from '../Component/Album/Album'
import Play from "../Play/Play"
const Home = () => {
  return (
    <>
    <div className='flex h-screen'>
      <Sidebar />
      <div className="w-[2px] h-8 bg-gray-300 mx-2"></div>
      <Center />
      <Album />

    </div>
    <hr />
    <div>
      <Play /> 
    </div>
    </>
  )
}

export default Home