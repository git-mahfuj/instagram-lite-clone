"use client"
import React from 'react'
import { Settings , Plus , Menu } from 'lucide-react'
import { useUser } from '@/contexts/UserContext'
const ProfileTop = () => {
  const {user} = useUser()
  return (
    <div className='flex items-center justify-between mt-2'>
     <Plus size={30}/>
     <h1>{user?.username}</h1>
      <Menu size={30} />
    </div>
  )
}

export default ProfileTop