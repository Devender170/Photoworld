import React from 'react';
import Common from './Common';
import photo from '../src/images/photo.png'

export default function Home() {
  return (
   <Common name="Hi, I'm PhotoWorld "
   imgsrc={photo}
   content="We are the family of talented Photographer and Videographer"
   visit="/service"
   btname="Get started"/>



  )
}
