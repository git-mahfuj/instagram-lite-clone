import React from 'react'
import { Settings , Plus , Menu } from 'lucide-react'
const ProfileTop = () => {
  return (
    <div className='flex items-center justify-between mt-2'>
     <Plus size={30}/>
     <h1>Mahfujur Rahman</h1>
      <Menu size={30} />
    </div>
  )
}

export default ProfileTop