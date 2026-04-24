"use client"
import { usePost } from '@/contexts/PostContext'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProfileFeedItems = () => {
  const { posts } = usePost()
  console.log(posts)
  return (
    <div className='w-full mt-1'>
      {posts && posts.length > 0 ? (
        <div className='grid grid-cols-3 gap-1 px-1'>
          {posts.map((post, i) => (
            <div key={i} className='relative aspect-square w-full bg-gray-200 overflow-hidden'>
             <Link href={"/posts"}> {post.images && post.images.length > 0 ? (
                <Image 
                  src={post.images[0]} 
                  fill 
                  alt={`post-${i}`} 
                  className='object-cover'
                />
              ) : (
                <div className="flex items-center justify-center h-full text-[10px] text-gray-400">
                  No Image
                </div>
              )}</Link>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex justify-center items-center h-40 text-gray-500'>
          Nothing To Show
        </div>
      )}
    </div>
  )
}

export default ProfileFeedItems