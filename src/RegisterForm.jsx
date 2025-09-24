import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./RegisterForm.css";

const steps = [
  "Personal Info",
  "Professional Details",
  "Payment Details",
  "Conference",
  "Declaration",
];

const RegisterForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () =>
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    console.log(formData);
  };

  return (
    <div className="registerform">
      <div className="container p-5 " id="registerform">
        <h2 className="text-center mb-3 fw-bold">
          Conference Registration Form
        </h2>
        <p className="text-center text-muted mb-4">
          Please fill out all sections to complete your registration
        </p>

        {/* Step Tabs */}
        <div className="d-flex justify-content-center mb-4">
          {steps.map((label, index) => (
            <button
              key={index}
              className={`step-tab btn mx-2 ${step === index ? "active" : ""}`}
              onClick={() => setStep(index)}
            >
              {label}
            </button>
          ))}
        </div>

        <form
          className="form-card p-4 shadow-sm rounded"
          onSubmit={handleSubmit}
        >
          {step === 0 && (
            <div>
              <h5 className="mb-3">Personal Information</h5>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Gender</label>
                  <div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={handleChange}
                      />
                      <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleChange}
                      />
                      <label className="form-check-label">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="Other"
                        onChange={handleChange}
                      />
                      <label className="form-check-label">Other</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    name="dob"
                    onChange={handleChange}
                  />
                </div>
                {/* <div className="col-md-6">
                  <label className="form-label">Nationality</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nationality"
                    onChange={handleChange}
                  />
                </div> */}

                <div className="col-md-6">
  <label className="form-label">Nationality</label>
  <select
    className="form-select"
    name="nationality"
    onChange={handleChange}
  >
    <option value="">-- Select Nationality --</option>
    <option value="India">India</option>
    <option value="United States">United States</option>
    <option value="United Kingdom">United Kingdom</option>
    <option value="Canada">Canada</option>
    <option value="Australia">Australia</option>
    <option value="Germany">Germany</option>
    <option value="France">France</option>
    <option value="Japan">Japan</option>
    <option value="China">China</option>
    <option value="Brazil">Brazil</option>
  </select>
</div>

              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mobile"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email ID</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Communication Address</label>
                <textarea
                  className="form-control"
                  name="address"
                  rows="2"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h5 className="mb-3">Professional Details</h5>
              <div className="mb-3">
                <label className="form-label">Institution/Organization</label>
                <input
                  type="text"
                  className="form-control"
                  name="institution"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Designation</label>
                <input
                  type="text"
                  className="form-control"
                  name="designation"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Department</label>
                <input
                  type="text"
                  className="form-control"
                  name="department"
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h5 className="mb-3">Registration Details</h5>
              <div className="mb-3">
                <label className="form-label">Participant Category</label>
                <div>
                  {[
                    "Research Scholar",
                    "Faculty / Academician",
                    "Industry Professional",
                    "Delegate",
                  ].map((c, i) => (
                    <div className="form-check form-check-inline" key={i}>
                      <input
                        type="radio"
                        className="form-check-input"
                        name="category"
                        value={c}
                        onChange={handleChange}
                      />
                      <label className="form-check-label">{c}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Registration Fee</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fee"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Payment Reference Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="paymentRef"
                    onChange={handleChange}
                  />
                </div>
                  <div className="mb-3">
                <label className="form-label">Upload Receipt</label>
                <input
                  type="file"
                  className="form-control  submission"
                  name="abstractFile"
                />
              </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h5 className="mb-3">Conference Participation</h5>
              <div className="mb-3">
                <label className="form-label">Select Category</label>
                <div>
                  {[
                    "Research Paper Presentation",
                    "Poster Presentation",
                    "AI Tool Demonstration / Competition",
                  ].map((c, i) => (
                    <div className="form-check form-check-inline" key={i}>
                      <input
                        type="radio"
                        className="form-check-input"
                        name="participation"
                        value={c}
                        onChange={handleChange}
                      />
                      <label className="form-check-label">{c}</label>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className="mb-3">
                <label className="form-label">Title of Submission</label>
                <input
                  type="text"
                  className="form-control submission"
                  name="submissionTitle"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Author(s)/Developer(s)</label>
                <input
                  type="text"
                  className="form-control  submission"
                  name="authors"
                  onChange={handleChange}
                />
              </div> */}


              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Title of Submission</label>
                  <input
                    type="text"
                    className="form-control"
                    name="submissionTitle"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Author(s)/Developer(s)</label>
                  <input
                    type="text"
                    className="form-control"
                    name="authors"
                    onChange={handleChange}
                  />
                </div>
                </div>
              <div className="mb-3">
                <label className="form-label">Abstract</label>
                <textarea
                  className="form-control  submission"
                  name="abstract"
                  rows="3"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Abstract Upload</label>
                <input
                  type="file"
                  className="form-control  submission"
                  name="abstractFile"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Full Paper / Poster / Tool Description
                </label>
                <input
                  type="file"
                  className="form-control  submission"
                  name="fullPaper"
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h5 className="mb-3">Declaration</h5>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="checkIndeterminate"/>
                <label class="form-check-label" for="checkIndeterminate">
                  I hereby declare that the details provided above are accurate
                  and the submission is my original work. I agree to abide by
                  the rules and guidelines of the conference.
               </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="d-flex justify-content-between mt-4">
            {step > 0 && (
              <button
                type="button"
                className="btn btn-outline-secondary custom-btn"
                onClick={prevStep}
              >
                Previous
              </button>
            )}
            {step < steps.length - 1 ? (
              <button
                type="button"
                className="btn btn-primary custom-btn"
                onClick={nextStep}
              >
                Next
              </button>
            ) : (
              <button type="submit" className="btn btn-success custom-btn">
                Submit Registration
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
