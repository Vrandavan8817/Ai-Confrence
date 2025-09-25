import React, { useState } from "react";
import "./ThemesTechnology.css";

function InfoCard({ imgSrc, title, details }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="col d-flex justify-content-center">
      <div className={`theme-card ${showInfo ? "show" : ""}`}>
        <img src={imgSrc} alt={title} className="theme-card-img" />

        <div className="theme-card-body" aria-expanded={showInfo}>
          <h5 className="text-center h5-head">{title}</h5>

          <div className="extra-info" role="region" aria-hidden={!showInfo}>
            <ul>
              {details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <button
            className="more-link"
            onClick={() => setShowInfo((s) => !s)}
            aria-pressed={showInfo}
          >
            {showInfo ? "Hide Info" : "More Info"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ThemesTechnology() {
  return (
    <div className="themestechnology p-4">
      <div className="themescard">
        <h1 className="text-center p-3 mb-4">𝐓𝐡𝐞𝐦𝐞𝐬 & 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬</h1>

        {/* ✅ 2 cards per row always */}
        <div className="row custom-row">
          <InfoCard
            imgSrc="media/images/Themecard1.jpg"
            title="𝐂𝐨𝐫𝐞 𝐀𝐈 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬"
            details={[
              "Machine Learning & Deep Learning",
              "Natural Language Processing",
              "Computer Vision",
              "Robotics & Autonomous Systems",
              "Generative AI and Ethical AI",
            ]}
          />
          <InfoCard
            imgSrc="media/images/Themecard4.jpg"
            title="𝐀𝐈 𝐢𝐧 𝐒𝐜𝐢𝐞𝐧𝐜𝐞 & 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲"
            details={[
              "Scientific Computing",
              "AI-driven Simulations",
              "AI in Healthcare",
              "AI in Space Technology",
              "Quantum Computing Applications",
            ]}
          />
          <InfoCard
            imgSrc="media/images/Themecard33.png"
            title="𝐀𝐈 𝐢𝐧 𝐒𝐨𝐜𝐢𝐞𝐭𝐲 & 𝐆𝐨𝐯𝐞𝐫𝐧𝐚𝐧𝐜𝐞"
            details={[
              "AI Policy & Ethics",
              "Smart Cities",
              "E-Governance",
              "Cybersecurity & Privacy",
              "AI for Social Good",
            ]}
          />
          <InfoCard
            imgSrc="media/images/Themecard2.jpg"
            title="𝐂𝐫𝐨𝐬𝐬-𝐜𝐮𝐭𝐭𝐢𝐧𝐠 𝐈𝐬𝐬𝐮𝐞𝐬"
            details={[
              "Sustainability & Green AI",
              "Interdisciplinary AI Research",
              "AI Education & Workforce",
              "Standards & Regulation",
              "Human–AI Collaboration",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
