import React from 'react'
import ProfileTop from './ProfileTop'
import ProfileBio from './ProfileBio'
import MobileBottomMenu from '@/components/MobileView/MobileBottomMenu'
import Container from '@/components/Container'
import ProfileHighlights from './ProfileHighlights'
import ProfileFeed from './ProfileFeed'

const Profilepage = () => {
  return (
    <div className=''>
        <Container>
            <ProfileTop/>
            <ProfileBio/>
            <ProfileHighlights/>
            <ProfileFeed/>
        </Container>
        <MobileBottomMenu/>
    </div>
  )
}

export default Profilepage