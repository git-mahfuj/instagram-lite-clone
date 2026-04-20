import React from 'react'
import EditProfilePic from './EditProfilePic'
import Container from '@/components/Container'
import EditProfile from './EditProfile'

const EditProfilepage = () => {
  return (
    <Container>
        <h1>Edit Profile</h1>
        <EditProfilePic/>
        <EditProfile/>
    </Container>
  )
}

export default EditProfilepage