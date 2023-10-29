import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import "./footer.css"
function Myfooter(){
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);
    const controls = useAnimation();
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              controls.start({ opacity: 1, y: 0 }); // Define your animation here
            }
          });
        },
        { threshold: 0.5 } // Adjust the threshold as needed
      );
  
      if (componentRef.current) {
        observer.observe(componentRef.current);
      }
  
      return () => {
        if (componentRef.current) {
          observer.unobserve(componentRef.current);
        }
      };
    }, [controls]);
  
    return (
      <motion.div
        ref={componentRef}
        initial={{ opacity: 0, y: 100 }} // Define initial animation properties
        animate={controls}
      >
        <>
        <div className="footer-body" >
            <div>
                <h1>Contact Us</h1>
                <div>telno: 012-3445-689</div>
                <div>Email: abc@gmail.com</div>
            </div>
            <div>
                    <h1>Follow Us</h1>
                    <div>
                        <img className='Socialimg' src='/Images/fb.png'></img>
                        <a className='Social' href="https://web.facebook.com/?_rdc=1&_rdr">Facebook</a>
                    </div>
                    <div>
                    <img className='Socialimg' src='/Images/insta.png'></img>
                        <a className='Social' href="#">Instagram</a>
                    </div>
                    <div>
                    <img className='Socialimg' src='/Images/twitter.png'></img>
                        <a className='Social' href="#">Twitter</a>
                    </div>
                </div>
            <div className="subscribe" >
                <h1>Subscribe Now</h1>
                <label>Enter Your Mail:   </label>
                <input type="text" placeholder="Your MailId"></input>
                <button>Subscribe</button>
            </div>

        </div>
        </>
      </motion.div>
    );
}/* */
export default Myfooter;