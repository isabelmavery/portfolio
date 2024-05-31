import React, { useState, useEffect } from "react";

import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./Footer";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import ForFun from "../pages/ForFun/ForFun";
import CoffeeShop from "../pages/CoffeeShop/CoffeeShop";
import MultiColorDivider from "../base-components/Divider/MultiColorDivider";
import Modal from "../base-components/Modal/Modal";
import Person from "../assets/Person";
import LoginOrRegister from "../components/LoginOrRegister.tsx/LoginOrRegister";
// import useDB from "../hooks/useDB";

const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;

/**
 * Using the free version of render so the node server spins down every 15 min, for now just pinging node server on app load.
 * Eventually will set up a CRON to ping it regularly or pay for upgrade.
 */
async function pingNodeServer() {
  try {
    await fetch(VITE_SERVER_URL);
  } catch (e) {
    console.log("Error pinging server", e);
  }
}

export default function App() {
  // const { data } = useDB("users");

  useEffect(() => {
    pingNodeServer();
  }, []);

  return (
    <Router>
      <div className="top-nav">
        <div className="menu-item">
          <Link to="">Home</Link>
        </div>
        <div className="menu-item">
          <Link to="about">About</Link>
        </div>
        <div className="menu-item">
          <Link to="cafe">Cafe</Link>
        </div>
        <div className="menu-item">
          <Link to="fun">More..</Link>
        </div>

        <Modal
          renderModalContent={() => <LoginOrRegister />}
          ctaContent={
            <div className="menu-item login-register-cta">
              <Person />
            </div>
          }
        />

        <MusicPlayer />
      </div>

      <div className="content-container">
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="fun" element={<ForFun />} />
          <Route path="cafe" element={<CoffeeShop />} />
          <Route path="" element={<Home />} />
        </Routes>
      </div>

      <div className="bottom-bar">
        <MultiColorDivider />
        <Footer />
      </div>
    </Router>
  );
}
