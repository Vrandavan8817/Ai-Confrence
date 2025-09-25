import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <div className="container aboutSection" id="aboutSection">
      <div className="row align-items-center">
        {/* Left Column (Text) */}
        <div className="col-lg-6 col-md-12 about-text">
          <h1>ABOUT SUMMIT'25</h1>
          <p>
            The conference aims to provide a platform for academicians, researchers,
            industry professionals, and policymakers to discuss AI applications across
            diverse fields, encouraging knowledge exchange and innovation. It will
            showcase emerging research, tools, and technologies in AI, highlighting the
            latest advancements shaping intelligent systems.
          </p>
          <p>
            By fostering collaborations between academia, industry, and government
            agencies, the event seeks to transform cutting-edge research into practical
            solutions for real-world challenges. Additionally, it creates opportunities
            for students and researchers to publish and present their work, gaining
            valuable exposure and feedback. Through dialogue, demonstrations, and
            networking, the conference promotes innovation, supports the next generation
            of AI professionals, and strengthens the global AI ecosystem across sectors
            such as healthcare, education, manufacturing, and governance.
          </p>
        </div>

        {/* Right Column (Image) */}
        <div className="col-lg-6 col-md-12 p-4 text-center about-image">
          <img
            src="media/images/aboutImage.jpg"
            alt="About Summit"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
