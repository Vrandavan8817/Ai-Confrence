import React from "react";
import "./SponSorship.css";

function SponSorship() {
  return (
    <div className="sponsorship" id="sponsorship">
      <h1 className="text-center p-5 text-white">
Sponsorship</h1>

      {/* Flex wrapper */}
      <div className="card-row">
        {[1, 2, 3].map((num) => (
          <div className="card" style={{ width: "22rem", height: "20rem" }} key={num}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment {num}</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="button-90" role="button">Go somewhere</a>
              
            </div>
          </div>
        ))}
      </div>
    </div>
   
  );
}

export default SponSorship;

