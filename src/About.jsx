import React from 'react';
import Common from './Common';
import images from '../src/images/images.svg'


export default function About() {
  return (
    <div>
      <Common name="Welcome to PhotoWorld   "
      content="PhotoWorld is photographer that features travel, people, editorial, and interior photography. He is also a designer, combining his many artistic talents to help his clients with branding, art direction, and more. If you plan on selling other complimentary services alongside your photography business, see Meiwen’s website."
   imgsrc={images}
   visit="/contact"
   btname="Contact Now"
   />
    </div>
  )
}
