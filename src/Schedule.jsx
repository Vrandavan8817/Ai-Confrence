import React, { useEffect } from "react";
import "./Schedule.css";

function Schedule() {
  useEffect(() => {
    const items = document.querySelectorAll(".agenda-item, .agenda-column, .schedule-title, .subtitle, .btn-schedule");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target); // एक बार show होने के बाद दोबारा observe नहीं होगा
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <section className="schedule" id="schedule">
      <div className="container">
        <h1 className="schedule-title">TENTATIVE SCHEDULE</h1>
        <p className="subtitle">
          Click for the full schedule of events at The AI
          Conference 2025. <br />
          Email <span className="highlight">subscribers</span> and{" "}
          <span className="highlight">ticket holders</span> will get content
          notifications.
        </p>

        <a href="media/images/document.pdf" target="_blank" 
  rel="noopener noreferrer"  className="btn-schedule">
          VIEW THE FULL SCHEDULE
        </a>

        <div className="agenda-columns">
          {/* Column 1 */}
          <div className="agenda-column">
            <h2>26th MARCH THURSDAY 2026</h2>
            {[
              ["09:00 AM", "Registration & Welcome Kit Distribution"],
              ["09:30 AM", "Inaugural Ceremony"],
              ["10:00 AM", "Conference Overview & Theme Introduction"],
              ["10:15 AM", "Address by Chief Guest"],
              ["10:30 AM", "Vote of Thanks"],
              ["10:40 AM", "Tea / Networking Break", true],
              ["11:00 AM", "Keynote Speaker 1"],
              ["11:45 AM", "Keynote Speaker 2"],
              ["12:30 PM", "Plenary Talk"],
              ["01:15 PM", "Lunch Break", true],
              ["02:15 PM", "Technical Session 1 (AI in Healthcare / AgriTech) – 6 Papers"],
              ["03:45 PM", "Tea / High Tea Break", true],
              ["04:00 PM", "Panel Discussion: “Future of AI in India & Asia”"],
              ["05:30 PM", "Cultural Performance (Student Wing)"],
              ["06:00 PM", "Networking High Tea", true],
            ].map(([time, event, highlight], idx) => (
              <div
                key={idx}
                className={`agenda-item ${highlight ? "highlighted" : ""}`}
              >
                <span className="time">{time}</span>
                <span className="event">{event}</span>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="agenda-column">
            <h2>27th MARCH FRIDAY 2026</h2>
            {[
              ["09:00 AM", "Recap of Day 1 & Announcements"],
              ["09:15 AM", "Keynote Speaker 3 "],
              ["10:00 AM", "Keynote Speaker 4 "],
              ["10:45 AM", "Tea Break", true],
              ["11:00 AM", "Technical Session 2 (AI in Education, Finance, Cybersecurity) – 8 Papers"],
              ["12:30 PM", "Lunch Break", true],
              ["01:30 PM", "Parallel Tracks – Track A: Deep Learning, Track B: Robotics"],
              ["03:00 PM", "Tea / High Tea Break", true],
              ["03:15 PM", "Workshop / Demo (AI Startups / Hackathon Showcase)"],
              ["04:00 PM", "Roundtable: “AI Policy, Ethics & Regulation”"],
              ["04:45 PM", "Poster Session & Jury Evaluation"],
              ["05:30 PM", "Valedictory Address"],
              ["06:00 PM", "Best Paper & Poster Awards"],
              ["06:30 PM", "Vote of Thanks & National Anthem"],
              ["06:45 PM", "Farewell High Tea & Departure", true],
            ].map(([time, event, highlight], idx) => (
              <div
                key={idx}
                className={`agenda-item ${highlight ? "highlighted" : ""}`}
              >
                <span className="time">{time}</span>
                <span className="event">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
