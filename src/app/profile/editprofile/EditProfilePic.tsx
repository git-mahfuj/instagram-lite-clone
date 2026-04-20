import Image from 'next/image'
import React from 'react'

const EditProfilePic = () => {
  return (
    <div className='mx-auto flex flex-col justify-center items-center gap-3'>
        <Image src={"/"} alt='image' height={80} width={80} className='bg-black dark:bg-white rounded-full '/>
       <h1 className='text-xs text-blue-600'> Edit Profile Picture</h1>
    </div>
  )
}

export default EditProfilePic