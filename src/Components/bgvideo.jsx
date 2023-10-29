import React from 'react';
import { motion } from 'framer-motion';
import './bgvideo.css';
 // Import your CSS file for styling
 const slideOpacityVariant = {
  hidden: { opacity: 0, x: 0 },
  visible: { opacity: 1, x: 100 },
};
function BackgroundVideo() {
  return (
    <>
    <div className="background-video">
      <video autoPlay loop muted>
        <source src="/Videos/Particles.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-content">
        <h1>IN THIS WEBSITE YOU CAN POST YOUR BLOGS FOR FREE HERE ARE SOME OF OUR</h1>
        <h1 className='large outline'> POPULAR BLOGS </h1>
      <motion.div initial="hidden" // Set initial state to "hidden"
        animate="visible" // Set animate state to "visible"
        variants={slideOpacityVariant} // Use the defined variant
        transition={{ duration: 1.5, easein: "linear" }} className='Imagescontainer'>
         <motion.img  className='Images' src='/Images/thunder.jpg'></motion.img>
         <motion.img className='Images' src='/Images/mountains.png'></motion.img>
        <motion.img className='Images' src='/Images/planets.png'></motion.img>
      </motion.div>
      </div>
      
    </div>
    </>
  );
}

export default BackgroundVideo;
