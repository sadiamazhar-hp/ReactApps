import React from "react";
import Logo from "./Logo";
import "./Home.css";
import mountainvideo from "./Video";
import {motion} from "framer-motion";
import BackgroundVideo from "./bgvideo";
import { BlogComp } from "./Blog";
import Dropdown from "./dropdown";
import Myfooter from "./footer";

import Myblog from "./Myblog";

function Home(){
    return(
        <>
        
        <div className="MainBody">
        <motion.div
        layout
        initial={{ height: 0 }}
        animate={{ height: 'auto' }}
        transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
        className="HomeMain"
        >
      <h1 className="Heading">WELCOME TO <span className="DailyDive">DAILY DIVE</span></h1>
      <p className="Para">Discover the World's Voices: Dive into a world of knowledge, stories, and insights on our blog posting website. Explore a diverse collection of articles from experts, enthusiasts, and thought leaders. Join the conversation and share your own perspective.</p>
      </motion.div>

        <BackgroundVideo/>
         <h1 className="RecentBlogsheading"> Recent Blogs</h1>
        <div className="blogs">
          <div className="blog-row">
           <BlogComp ImageUrl={"/Images/Women1.jpg"} Header={"Tricks to stop wasting time"} Content={"I have developed bad habit of wasting time over the past years but recently I have been fed up by it so I researched and found some interesting techniques to stop wastinng time And I wanted to share it with the World"} Date={"23-03-2023"} />
           <BlogComp ImageUrl={"/Images/lavenders.jpg"}  Header={"Explore the Amazing Nature"} Content={"I would have visit these amazing sceneries again if I got the chance and budget also. These are some of the amazing fields I have scene In my Entire Life"} Date={"05-02-2023"}/>
          </div>
          <div className="blog-row">
            <BlogComp ImageUrl={"/Images/kids.jpg"} Header={"Top activites to teach Your kids"} Content={"I am the mother of 8 kids and with that experience I have tought my kids alot of activites and get to observe which of them are better for their developement in this article I'll be discussing that with you"} Date={"06-03-2023"} />
            <BlogComp ImageUrl={"/Images/cake.jpg"} Header={"My fluffiest cake recipe"} Content={"This is one of the brilliant recipe which will make your cake fluffiest not only that this is no ordinary recipe this recipe i possess in my heritage it's my late grandma's secret recipe with this tech she'd be happy to share with the world"} Date={"04-08-2023"} />
          </div>

        </div>
        </div>
        <Myfooter/>
        
        </>
        

    )
}
export default Home;