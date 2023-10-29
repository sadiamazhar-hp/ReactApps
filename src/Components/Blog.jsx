import{motion} from "framer-motion";
import React from "react";
import "./Blog.css";

export const BlogComp = ({ImageUrl, Header, Content, Date}) => {
  return (
    <>
    <motion.div className="div" >
        <motion.div className="blog-component" whileHover={{scale:1.1, boxShadow:"3px 4px 4px 5px rgb(22, 22, 22,0.7)"}}>
            <div className="overlap-group">
              <button className="readmore-button">
                <div className="READ-MORE-wrapper">
                  <p className="READ-MORE">
                    <span className="text-wrapper">READ MORE</span>
                  </p>
                </div>
              </button>
              <div className="blog-content">
                <p className="element-most-beautiful">
                  <span className="span">{Header}</span>
                </p>
                <p className="lorem-ipsum-dolor">
                  <span className="text-wrapper-2">
                   {Content}
                  </span>
                </p>
                <p className="element-AUGUST">
                  <span className="text-wrapper-3">{Date}</span>
                </p>
              </div>
            </div>
            <img
              className="rectangle"
              alt="Rectangle"
              src={ImageUrl}
            />
          </motion.div>
      </motion.div>
    </>
  );
};
