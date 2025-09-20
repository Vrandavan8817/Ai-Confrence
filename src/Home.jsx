import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home" id="home">
        <div style={{ position: "relative", width: "100%", height: "575px", overflow: "hidden" }}>
      <video
        autoPlay
        loop
        muted
        controls
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
<source src="/media/videos/Home.mp4" type="video/mp4" />
 </video>
    </div>
    </div>
  );
}

export default Home;
