import Image from 'next/image'
import React from 'react'

const EditProfilePic = () => {
  return (
    <div>
        <Image src={"/"} alt='image' height={80} width={80} className='bg-black dark:bg-white rounded-full '/>
       <h1 className='text-sm'> Edit Profile Picture</h1>
    </div>
  )
}

export default EditProfilePic