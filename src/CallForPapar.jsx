import React from "react";
import "./CallForPapar.css";
const themes = [
  "Core AI Technologies",
  "AI in Science & Technology",
  "AI in Society & Governance",
  "Cross-cutting Issues",
];

const importantDates = [
  { title: "Abstract Submission Deadline", date: "15 November 2025" },
  { title: "Full Paper Submission Deadline", date: "15 January 2026" },
  { title: "Notification of Acceptance", date: "31 January 2026" },
  { title: "Early Bird Registration Deadline", date: "31 January 2026" },
];

export default function CallForPapers() {
  return (
    <div className="page-wrap" id="callforpaper">
      {/* Hero */}
      <header className="hero-hero">
        <div className="hero-inner container text-center">
          <h1 className="hero-title">CALL FOR PAPERS</h1>

          <h1 className="hero-title mt-4" style={{color:"rgb(0,220,255)"}}>INTERNATIONAL CONFERENCE</h1>
          <h1 className="hero-title">ON</h1>
          <h1 className="hero-title" style={{color:"rgb(0,220,255)"}}>ARTIFICIAL INTELLIGENCE</h1>
           
          <h1 className="hero-sub mt-4">
             VIKSIT BHARAT 2047 [ICAI-VB 2026]
          </h1>
          <h1 className="hero-sub">
            Artificial Intelligence for a Smarter, Sustainable, and Inclusive Future
          </h1>
          

          <div className="hero-meta d-flex justify-content-center gap-4 text-white-75 align-items-center mt-2">
            <span>• 13–14 March 2026</span>
            <span className="hero-dot">|</span>
            <span>• Scope Global Skills University, Bhopal, M.P., India</span>
          </div>
        </div>
        {/* subtle overlay glow */}
        <div className="hero-overlay"></div>
      </header>

      {/* Main content */}
      <main className="container main-container">
        {/* Intro card */}
        <section className="">
          <div className="card big-card shadow-soft">
            <div className="card-body text-center py-4">
              <h2 className="fw-bold accent-blue mb-3">Dear Researcher,</h2>
              <p className="lead text-muted mx-auto content-paragraph">
                We are pleased to invite you to submit your original research
                papers, case studies, and review articles for presentation at
                the International Conference on Artificial Intelligence
                (ICAI-2026). The conference will feature plenary sessions, panel
                discussions, and parallel technical tracks on AI in various
                fields, providing an opportunity for knowledge exchange and
                collaborations.
              </p>
            </div>
          </div>
        </section>

        {/* Two-column block */}
        <section className="mt-4">
          <div className="row">
            {/* Left - Key Themes */}
            <div className="col-lg-7 mb-4">
              <div className="card section-card shadow-soft">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="dot-blue me-3 mt-1"></div>
                    <h4 className="mb-0 section-title">Key Themes</h4>
                  </div>

                  <div className="themes-list mt-4">
                    {themes.map((t, i) => (
                      <div key={i} className="theme-row card theme-box mb-3">
                        <div className="card-body py-3 px-4 d-flex align-items-center">
                          <div className="small-dot me-3"></div>
                          <div className="flex-fill theme-text">{t}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Important Dates */}
            <div className="col-lg-5 mb-4">
              <div className="card section-card shadow-soft">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="dot-blue me-3 mt-1"></div>
                    <h4 className="mb-0 section-title">Important Dates</h4>
                  </div>

                  <ul className="list-unstyled important-dates mt-3">
                    {importantDates.map((d, idx) => (
                      <li className="mb-4 date-row" key={idx}>
                        <div className="d-flex align-items-start">
                          <div className="date-accent me-3"></div>
                          <div>
                            <div className="date-title">{d.title}</div>
                            <div className="date-sub text-muted">{d.date}</div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publication CTA */}
        {/* <section className="mt-4">
          <div className="card big-card shadow-soft text-center py-5">
            <div className="card-body">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <div className="dot-blue me-3"></div>
                <h4 className="mb-0 accent-blue fw-bold">Publication</h4>
              </div>
              <p className="text-muted mb-4">
                Selected papers will be published in <strong>Scopus/UGC-Care indexed journals</strong> or conference
                proceedings / Edited Book with ISBN.
              </p>

              <button className="btn-submit btn-glow">Submit Your Paper</button>
            </div>
          </div>
        </section> */}
      </main>

      {/* bottom accent bar */}
      <footer className="footer-accent"></footer>
    </div>
  );
}
