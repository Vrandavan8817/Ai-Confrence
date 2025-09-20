import React from "react";
import "./CallForPapar.css";

function CallForPapar() {
  return (
    <section className="callforpaper" id="callforpaper" aria-labelledby="cfp-heading">
      {/* decorative background image (aria-hidden since it is decorative) */}
      <img
        className="callforpaper-bg"
        src="/media/images/callforpaperBackgroundImage.jpg"
        alt=""
        aria-hidden="true"
      />
      {/* semi-opaque overlay for contrast */}
      {/* <div className="callforpaper-overlay" aria-hidden="true" /> */}

      {/* content */}
      <div className="callforpaper-content">
        <h1 id="cfp-heading">Call For Papers — ICAI 2026</h1>

        <p className="lead">Dear Researcher,</p>

        <p>
          We are pleased to invite you to submit your original research papers,
          case studies, and review articles for presentation at the
          International Conference on Artificial Intelligence (ICAI-2026) to be
          held on <strong>13–14 March 2026</strong> at Scope Global Skills
          University, Bhopal, M.P., India.
        </p>

        <p>
          The conference will feature plenary sessions, panel discussions, and
          parallel technical tracks on AI in various fields, providing an
          opportunity for knowledge exchange and collaborations.
        </p>

        <h2>Key Themes</h2>
        <ul className="cfp-list">
          <li>Core AI Technologies</li>
          <li>AI in Science & Technology</li>
          <li>AI in Society & Governance</li>
          <li>Cross-cutting Issues</li>
        </ul>

        <h2>Important Dates</h2>
        <ul className="cfp-list">
          <li><strong>Abstract Submission Deadline:</strong> 15 November 2025</li>
          <li><strong>Full Paper Submission Deadline:</strong> 15 January 2026</li>
          <li><strong>Notification of Acceptance:</strong> 31 January 2026</li>
          <li><strong>Early Bird Registration Deadline:</strong> 31 January 2026</li>
        </ul>

        <p>
          <strong>Publication:</strong> Selected papers will be published in
          Scopus/UGC-Care indexed journals or conference proceedings / Edited
          Book with ISBN.
        </p>

        <div className="cfp-actions">
          <a href="/submit-paper" className="button-90">Submit Paper</a>
          <a href="/downloads/CFP-ICAI-2026.pdf" className="btn outline" target="_blank" rel="noopener noreferrer">
            Download CFP (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallForPapar;
