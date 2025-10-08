import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <div className="container aboutSection" id="aboutSection">
      <div className="row align-items-center">
        {/* Left Column (Text) */}
        <div className="col-lg-6 col-md-12 about-text">
        
          <h1>ABOUT ORGANISATION</h1>
          <p>
            SCOPE Global Skills University (SGSU), established in 2023 as Central India’s first skills university, is accredited under UGC 2(f) and promoted by the AISECT Group, a pioneer in education and skill development for four decades. Recognized among India’s top skills universities, SGSU emphasizes practical exposure through internships and apprenticeships. It offers UG, PG, and doctoral programs across diverse fields including technology, management, healthcare, agriculture, design, media, and sustainable development.
          </p>
          <h1>ABOUT CONFERENCE'26</h1>
          <p>
           The conference provides a platform for academicians, researchers, industry professionals, and policymakers to explore AI applications across fields, showcasing emerging research, tools, and technologies shaping intelligent systems. By fostering collaboration among academia, industry, and government, it translates research into real-world solutions. It also enables students and researchers to publish, present, and network, driving innovation and strengthening the global AI ecosystem in healthcare, education, manufacturing, and governance.
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
