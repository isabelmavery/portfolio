import React from "react";

import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css"
import Home from '../Home'
import Footer from "./Footer";
import About from '../About/About'
import MusicPlayer from "../MusicPlayer/MusicPlayer";

function Fun() {
  return <div>Coming Soon</div>
}

export default function App() {
  return (
    <Router>
          <div className="top-nav">
              <div className="menu-item">
                <Link to="/">Home</Link>
              </div>
              <div className="menu-item">
                <Link to="/about">About</Link>
              </div>
              <div className="menu-item">
                <Link to="/fun">Fun !!!</Link>
              </div>
          </div>

        <div className="content">
          <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/fun" element={<Fun/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </div>

        <div className="bottom-bar">
          <MusicPlayer/>
          <Footer/>
        </div>

    </Router>
  );
}
