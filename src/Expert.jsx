
import React from "react";
import "./Expert.css";

const experts = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "AI Research Director",
    company: "TechCorp Analytics",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b660?w=400&h=400&fit=crop&crop=face",
    // expertise: ["AI", "ML", "Data Science"],
    // rating: 4.9,
    // projects: 127
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Cloud Architect",
    company: "CloudTech Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    // expertise: ["AWS", "DevOps", "Security"],
    // rating: 4.8,
    // projects: 89
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    title: "Security Expert",
    company: "SecureNet Industries",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    // expertise: ["Cybersecurity", "Compliance", "Risk"],
    // rating: 5.0,
    // projects: 156
  },
  {
    id: 4,
    name: "James Thompson",
    title: "UX Design Lead",
    company: "Design Innovations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    // expertise: ["UX Design", "Research", "Strategy"],
    // rating: 4.7,
    // projects: 98
  },
  {
    id: 5,
    name: "Lisa Park",
    title: "Data Scientist",
    company: "Analytics Pro",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    // expertise: ["Analytics", "Python", "Statistics"],
    // rating: 4.9,
    // projects: 73
  },
  {
    id: 6,
    name: "David Kim",
    title: "Blockchain Engineer",
    company: "Crypto Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    // expertise: ["Blockchain", "Smart Contracts", "FinTech"],
    // rating: 4.8,
    // projects: 61
  },

  {
    id: 7,
    name: "David Kim",
    title: "Blockchain Engineer",
    company: "Crypto Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    // expertise: ["Blockchain", "Smart Contracts", "FinTech"],
    // rating: 4.8,
    // projects: 61
  },

  {
    id: 8,
    name: "David Kim",
    title: "Blockchain Engineer",
    company: "Crypto Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
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
