import React from "react";
import { Route, BrowserRouter as Router, Link, Routes } from "react-router-dom";
import Home from "../src/Components/Home";
import Logo from "./Components/Logo";
import Dropdown from "./Components/dropdown";
import Myblog from "./Components/Myblog";
import "./App.css";

function App() {
  return (
    <>
      <Router>
      <nav>
            <div className="Nav-Content">
            <div className="logo"><Logo/></div>
            <Link className="nav-item" to="/">Home</Link>
            <a className="nav-item" href="#"><Dropdown triggerText={"blog"} items={["science","politics"]}/></a>
            <a className="nav-item" href="#">About</a>
            <a className="nav-item" href="#">Privacy-Policy</a>
            <a className="nav-item" href="#">Contact</a>
            <a className="nav-item" href="#">Get Started
            <img className="arrow" src="/Images/arrow.png"></img>
            </a>
            </div>
        </nav>
        <div className="App">
          <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/myblog" element={<Myblog/>} />
          </Routes>
          
        </div>
      </Router>
    </>
  );
}

export default App;
