
import React from "react";
import "./Expert.css";

const experts = [
  {
    id: 1,
   name: "Name",
    title: "AI Research Director",
    company: "TechCorp Analytics",
    image: "/public/media/images/comeetees.jpg",
    // expertise: ["AI", "ML", "Data Science"],
    // rating: 4.9,
    // projects: 127
  },
  {
    id: 2,
   name: "Name",
    title: "Cloud Architect",
    company: "CloudTech Solutions",
    image: "/public/media/images/comeetees.jpg",
    // expertise: ["AWS", "DevOps", "Security"],
    // rating: 4.8,
    // projects: 89
  },
  {
    id: 3,
    name: "Name",
    title: "Security Expert",
    company: "SecureNet Industries",
    image: "/public/media/images/comeetees.jpg",
    // expertise: ["Cybersecurity", "Compliance", "Risk"],
    // rating: 5.0,
    // projects: 156
  },
  {
    id: 4,
   name: "Name",
    title: "UX Design Lead",
    company: "Design Innovations",
   image: "/public/media/images/comeetees.jpg",
    // expertise: ["UX Design", "Research", "Strategy"],
    // rating: 4.7,
    // projects: 98
  },
  {
    id: 5,
    name: "Name",
    title: "Data Scientist",
    company: "Analytics Pro",
    image: "/public/media/images/comeetees.jpg",
    // expertise: ["Analytics", "Python", "Statistics"],
    // rating: 4.9,
    // projects: 73
  },
  {
    id: 6,
    name: "Name",
    title: "Blockchain Engineer",
    company: "Crypto Solutions",
    image: "/public/media/images/comeetees.jpg",
    // expertise: ["Blockchain", "Smart Contracts", "FinTech"],
    // rating: 4.8,
    // projects: 61
  },

  {
    id: 7,
    name: "Name",
    title: "Blockchain Engineer",
    company: "Crypto Solutions",
    image: "/public/media/images/comeetees.jpg",
    // expertise: ["Blockchain", "Smart Contracts", "FinTech"],
    // rating: 4.8,
    // projects: 61
  },

  {
    id: 8,
    name: "Name",
    title: "Blockchain Engineer",
    company: "Crypto Solutions",
    image: "/public/media/images/comeetees.jpg",
    // expertise: ["Blockchain", "Smart Contracts", "FinTech"],
    // rating: 4.8,
    // projects: 61
  }
];

export default function App() {
  return (
    <div className="team-wrapper sponsorship border-top" id="expert">
      <div className="team-header">
        <div className="team-icon">👥</div>
        <h1>
          Invited <span>Speakers</span>
        </h1>
        <p>
          Industry pioneers and thought leaders who bring unparalleled expertise
          to solve your most complex challenges
        </p>
      </div>

      <div className="cards-grid">
        {experts.map(expert => (
          <div key={expert.id} className="card">
            <div className="card-img">
              <img src={expert.image} alt={expert.name} />
            </div>
            <h2>{expert.name}</h2>
            <h3>{expert.title}</h3>
            <p className="company">{expert.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
