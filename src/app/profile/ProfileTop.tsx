"use client"
import React from 'react'
import { Settings , Plus , Menu } from 'lucide-react'
import { useUser } from '@/contexts/UserContext'
import Link from 'next/link'
const ProfileTop = () => {
  const {user} = useUser()
  return (
    <div className='flex items-center justify-between mt-2'>
     <Link href={'/profile/createpost'}><Plus size={30}/></Link>
     <h1>{user?.username}</h1>
      <Menu size={30} />
    </div>
  )
}

export default ProfileTop