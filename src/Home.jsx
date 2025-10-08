import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home" id="home">
      <video
        className="home-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/media/videos/Home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional, in case you want text later) */}
      <div className="overlay"></div>

      {/* Example content (optional) */}
      {/* <div className="home-content">
        <h1>Welcome to Summit'25</h1>
        <p>Exploring the Future with AI</p>
      </div> */}
    </div>
  );
}

export default Home;
