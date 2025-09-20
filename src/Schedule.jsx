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

        <a href="#" className="button-90">VIEW THE FULL SCHEDULE</a>
        {/* <a href="/submit-paper" className="btn primary">Submit Paper</a> */}

        <div className="nav-links p-4">
          <a href="#" className="nav-link">TRACKS</a>
          <a href="#" className="nav-link">SPEAKERS</a>
        </div>
        
        <div className="agenda-columns">
          <div className="agenda-column">
            <h2>WEDNESDAY SEPTEMBER 17th</h2>
            <div className="agenda-item">
              <span className="time">07:30 AM</span>
              <span className="event">Registration & Coffee</span>
            </div>
            <div className="agenda-item">
              <span className="time">09:00 AM</span>
              <span className="event">Keynotes</span>
            </div>
            <div className="agenda-item">
              <span className="time">10:50 AM</span>
              <span className="event">Morning Break</span>
            </div>
            <div className="agenda-item">
              <span className="time">11:30 AM</span>
              <span className="event">Sessions</span>
            </div>
            <div className="agenda-item highlighted">
              <span className="time">12:30 PM</span>
              <span className="event">Lunch</span>
            </div>
            <div className="agenda-item">
              <span className="time">12:30 PM</span>
              <span className="event">Lunch Talks</span>
            </div>
            <div className="agenda-item">
              <span className="time">02:00 PM</span>
              <span className="event">Sessions Continued</span>
            </div>
            <div className="agenda-item">
              <span className="time">03:30 PM</span>
              <span className="event">Afternoon Break</span>
            </div>
            <div className="agenda-item">
              <span className="time">04:00 PM</span>
              <span className="event">Sessions Continued</span>
            </div>
            <div className="agenda-item">
              <span className="time">05:00 PM</span>
              <span className="event">Closing Receptions & Networking</span>
            </div>
          </div>

          <div className="agenda-column">
            <h2>THURSDAY SEPTEMBER 18th</h2>
            <div className="agenda-item">
              <span className="time">08:00 AM</span>
              <span className="event">Registration & Coffee</span>
            </div>
            <div className="agenda-item">
              <span className="time">09:00 AM</span>
              <span className="event">Keynotes</span>
            </div>
            <div className="agenda-item">
              <span className="time">10:50 AM</span>
              <span className="event">Morning Break</span>
            </div>
            <div className="agenda-item">
              <span className="time">11:30 AM</span>
              <span className="event">Sessions</span>
            </div>
            <div className="agenda-item highlighted">
              <span className="time">12:30 PM</span>
              <span className="event">Lunch</span>
            </div>
            <div className="agenda-item">
              <span className="time">12:30 PM</span>
              <span className="event">Lunch Talks</span>
            </div>
            <div className="agenda-item">
              <span className="time">02:00 PM</span>
              <span className="event">Sessions Continued</span>
            </div>
            <div className="agenda-item">
              <span className="time">03:30 PM</span>
              <span className="event">Afternoon Break</span>
            </div>
            <div className="agenda-item">
              <span className="time">04:00 PM</span>
              <span className="event">Sessions Continued</span>
            </div>
            <div className="agenda-item">
              <span className="time">05:00 PM</span>
              <span className="event">Ice Cream Social</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;