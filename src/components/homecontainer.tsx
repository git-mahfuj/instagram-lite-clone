import React from 'react'
import Sidemenu from './sidemenu'
import Feed from './Feed'

const Homecontainer = () => {
  return (
    <div className='grid grid-cols-12 items-center'>
        <Sidemenu className="col-span-7 bg-red-400"/>
        <Feed className="w-full bg-white" />
    </div>
  )
}

export default Homecontainer