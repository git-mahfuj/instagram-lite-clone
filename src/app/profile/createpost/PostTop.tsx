"use client"
import { useUser } from '@/contexts/UserContext'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PostTop = () => {
    const {user} = useUser()
  return (
    <div className='mt-3 flex justify-between items-center'>
       <Link href={"/profile"}><X size={30}/></Link>
       <p className='text-sm'>{user?.name}</p>
       <p className='text-sm text-blue-600'>Done</p>
    </div>
  )
}

export default PostTop