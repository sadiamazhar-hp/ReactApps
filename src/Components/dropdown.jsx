import React, { useState } from 'react';
import "./dropdown.css";
import { Link } from 'react-router-dom';

const Dropdown = ({ triggerText, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="hover-dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="trigger">{triggerText}</div>
      {isOpen && items && items.length > 0 && (
        <div className="dropdown">
          <ul>
            {items.map((item, index) => (
              <li key={index}><Link to="/Myblog">{item}</Link></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;



