import React from 'react';
import './Schedule.css';

function Schedule() {
  return(
    <div className="schedule" id='schedule'>
      <div className="container p-5">
        <h1>SCHEDULE</h1>
        <p className="subtitle">
          Click for the <a href="#">full schedule</a> of events at The AI Conference 2025.<br />
          Email <span className="highlight">subscribers</span> and <span className="highlight">ticket holders</span> will get content notifications
        </p>

        <a href="#" className="button-90 ">VIEW THE FULL SCHEDULE</a>
        {/* <a href="/submit-paper" className="btn primary">Submit Paper</a> */}

        {/* <div className="nav-links p-4">
          <a href="#" className="nav-link">TRACKS</a>
          <a href="#" className="nav-link">SPEAKERS</a>
        </div> */}
        
        <div className="agenda-columns mt-5 p-3">
          <div className="agenda-column">
            <h2>17th SEPTEMBER WEDNESDAY 2026</h2>
            <div className="agenda-item">
              <span className="time">09:00 AM</span>
              <span className="event">Registration & Welcome Kit Distribution</span>
            </div>
            <div className="agenda-item">
              <span className="time">09:30 AM</span>
              <span className="event">Inaugural Ceremony (Lamp Lighting, Welcome Address)</span>
            </div>
            <div className="agenda-item">
              <span className="time">10:00 AM</span>
              <span className="event">Conference Overview & Theme Introduction</span>
            </div>
            <div className="agenda-item">
              <span className="time">10:15 AM</span>
              <span className="event">Address by Chief Guest (Policy Leader/VC)</span>
            </div>
            <div className="agenda-item ">
              <span className="time">10:30 AM</span>
              <span className="event">Vote of Thanks</span>
            </div>
            <div className="agenda-item highlighted">
              <span className="time">10:40 AM</span>
              <span className="event">Tea / Networking Break</span>
            </div>
            <div className="agenda-item">
              <span className="time">11:00 AM</span>
              <span className="event">Keynote 1 (International Speaker – Virtual/Physical)</span>
            </div>
            <div className="agenda-item">
              <span className="time">11:45 AM</span>
              <span className="event">Keynote 2 (Eminent Indian Researcher – IIT/IISc)</span>
            </div>
            <div className="agenda-item">
              <span className="time">12:30 PM</span>
              <span className="event">Plenary Talk (Industry Leader – NASSCOM/Infosys/TCS/IBM/Google)</span>
            </div>
            <div className="agenda-item highlighted">
              <span className="time">01:15 PM</span>
              <span className="event">Lunch Break</span>
            </div>
            <div className="agenda-item">
              <span className="time">02:15 PM</span>
              <span className="event">Technical Session 1 (AI in Healthcare / AgriTech) – 6 Papers</span>
            </div>
            <div className="agenda-item highlighted">
              <span className="time">03:45 PM</span>
              <span className="event">Tea / High Tea Break</span>
            </div>
            <div className="agenda-item">
              <span className="time">04:00 PM</span>
              <span className="event">Panel Discussion: “Future of AI in India & Asia” (Academia + Govt. + Industry)</span>
            </div>
            <div className="agenda-item">
              <span className="time">05:30 PM</span>
              <span className="event">Cultural Performance (Student Wing)</span>
            </div>
            <div className="agenda-item highlighted">
              <span className="time">06:00 PM</span>
              <span className="event">Networking High Tea</span>
            </div>
          </div>
<div className="agenda-column">
            <h2>17th SEPTEMBER WEDNESDAY 2026</h2>
            <div className="agenda-item">
              <span className="time">09:00 AM</span>
              <span className="event">Recap of Day 1 & Announcements</span>
            </div>
            <div className="agenda-item">
              <span className="time">09:15 AM</span>
              <span className="event">Keynote 3 (Asian Expert – NUS/NTU/Tokyo)</span>
            </div>
            <div className="agenda-item">
              <span className="time">10:00 AM</span>
              <span className="event">Keynote 4 (Applied AI – Microsoft India / Google Research)</span>
            </div>
            <div className="agenda-item highlighted">
              <span className="time">10:45 AM</span>
              <span className="event">Tea Break</span>
            </div>
            <div className="agenda-item ">
              <span className="time">11:00 AM</span>
              <span className="event">Technical Session 2 (AI in Education, Finance, Cybersecurity) – 8 Papers</span>
            </div>
            <div className="agenda-item highlighted">
              <span className="time">12:30 PM</span>
              <span className="event">Lunch Break</span>
            </div>
            <div className="agenda-item">
              <span className="time">01:30 PM</span>
              <span className="event">Parallel Tracks (2 halls): Track A – Deep Learning Trends, Track B – Robotics & Automation</span>
            </div>
            <div className="agenda-item highlighted">
              <span className="time">03:00 AM</span>
              <span className="event">Tea / High Tea Break</span>
            </div>
            <div className="agenda-item">
              <span className="time">03:15 PM</span>
              <span className="event">Workshop / Demo (AI Startups / Hackathon Showcase)</span>
            </div>
            <div className="agenda-item">
              <span className="time">04:00 PM</span>
              <span className="event">Roundtable: “AI Policy, Ethics & Regulation” (Govt. + Academia + Industry)</span>
            </div>
            <div className="agenda-item">
              <span className="time">04:45 PM</span>
              <span className="event">Poster Session & Jury Evaluation</span>
            </div>
            <div className="agenda-item ">
              <span className="time">05:30 PM</span>
              <span className="event">Valedictory Address (AI Policy / Govt. Official)</span>
            </div>
            <div className="agenda-item">
              <span className="time">06:00 PM</span>
              <span className="event">Best Paper Awards, Poster Awards, Proceedings Launch</span>
            </div>
            <div className="agenda-item">
              <span className="time">06:30 PM</span>
              <span className="event">Vote of Thanks & National Anthem</span>
            </div>
            <div className="agenda-item highlighted">
              <span className="time">06:45 PM</span>
              <span className="event">Farewell High Tea & Departure</span>
            </div>
          </div>

          
          
        </div>
      </div>
    </div>
  );
}

export default Schedule;