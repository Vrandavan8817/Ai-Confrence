import React from "react";
import "./SponSorship.css";

function SponSorship() {
  return (
    <div className="sponsorship" id="sponsorship">
        <h1 className="text-center p-5">SponSorship</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" className="sponCard1">
          <div class="card h-100">
            <img src="/media/images/comeetees.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div class="col" className="sponCard1">
          <div class="card h-100">
            <img src="/media/images/comeetees.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div class="col" className="sponCard1">
          <div class="card h-100">
            <img src="/media/images/comeetees.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SponSorship;
