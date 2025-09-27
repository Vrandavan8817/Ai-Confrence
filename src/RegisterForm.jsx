import React, { useState } from "react";
import axios from "axios";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({});
  const [validated, setValidated] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "file"
          ? files[0]
          : type === "checkbox"
          ? checked
          : value,
    });
  };

  // ✅ Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      try {
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
          data.append(key, formData[key]);
        });

        // ✅ Render backend ka URL
        const res = await axios.post(
          "https://ai-confrence-backend.onrender.com/api/register",
          data,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        setMessage(res.data.message || "✅ Registered successfully!");
        setFormData({});
        form.reset();
        setValidated(false);
      } catch (err) {
        setMessage(err.response?.data?.error || "❌ Registration failed");
      }
    }

    setValidated(true);
  };

  return (
    <div className="registerform">
      <div className="container p-5" id="registerform">
        <h2 className="text-center mb-3 fw-bold">
          Conference Registration Form
        </h2>
        <p className="text-center text-muted mb-4">
          Please fill out all sections to complete your registration
        </p>

        {/* ✅ Success/Error Message */}
        {message && (
          <p
            className="text-center fw-bold"
            style={{ color: message.startsWith("✅") ? "green" : "red" }}
          >
            {message}
          </p>
        )}

        <form
          className={`form-card p-4 shadow-sm rounded needs-validation ${
            validated ? "was-validated" : ""
          }`}
          noValidate
          onSubmit={handleSubmit}
        >
          {/* ================== Personal Info ================== */}
          <h5 className="mb-3">Personal Information</h5>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                required
                onChange={handleChange}
              />
              <div className="invalid-feedback">Full Name is required</div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Gender</label>
              <div>
                {["Male", "Female", "Other"].map((g, i) => (
                  <div className="form-check form-check-inline" key={i}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value={g}
                      required
                      onChange={handleChange}
                    />
                    <label className="form-check-label">{g}</label>
                  </div>
                ))}
              </div>
              <div className="invalid-feedback">
                Please select your gender
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
                required
                onChange={handleChange}
              />
              <div className="invalid-feedback">Date of Birth is required</div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Nationality</label>
              <select
                className="form-select"
                name="nationality"
                required
                onChange={handleChange}
              >
                <option value="">-- Select Nationality --</option>
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
              <div className="invalid-feedback">Select nationality</div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Mobile Number</label>
              <input
                type="tel"
                className="form-control"
                name="mobile"
                pattern="[0-9]{10}"
                required
                onChange={handleChange}
              />
              <div className="invalid-feedback">
                Enter a valid 10-digit mobile number
              </div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Email ID</label>
              <input
                type="email"
                className="form-control"
                name="email"
                required
                onChange={handleChange}
              />
              <div className="invalid-feedback">Enter a valid email</div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Communication Address</label>
            <textarea
              className="form-control"
              name="address"
              rows="2"
              required
              onChange={handleChange}
            ></textarea>
            <div className="invalid-feedback">Address is required</div>
          </div>

          {/* ================== Professional Details ================== */}
          <h5 className="mb-3">Professional Details</h5>
          <div className="mb-3">
            <label className="form-label">Institution/Organization</label>
            <input
              type="text"
              className="form-control"
              name="institution"
              required
              onChange={handleChange}
            />
            <div className="invalid-feedback">Institution is required</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Designation</label>
            <input
              type="text"
              className="form-control"
              name="designation"
              required
              onChange={handleChange}
            />
            <div className="invalid-feedback">Designation is required</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Department</label>
            <input
              type="text"
              className="form-control"
              name="department"
              required
              onChange={handleChange}
            />
            <div className="invalid-feedback">Department is required</div>
          </div>

          {/* ================== Payment Details ================== */}
          <h5 className="mb-3">Registration & Payment</h5>
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
                    required
                    onChange={handleChange}
                  />
                  <label className="form-check-label">{c}</label>
                </div>
              ))}
            </div>
            <div className="invalid-feedback">Please select category</div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Registration Fee</label>
              <input
                type="number"
                className="form-control"
                name="fee"
                required
                onChange={handleChange}
              />
              <div className="invalid-feedback">Fee is required</div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Payment Reference Number</label>
              <input
                type="text"
                className="form-control"
                name="paymentRef"
                required
                onChange={handleChange}
              />
              <div className="invalid-feedback">Payment Ref is required</div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Receipt</label>
            <input
              type="file"
              className="form-control"
              name="receipt"
              required
              onChange={handleChange}
            />
            <div className="invalid-feedback">Receipt upload is required</div>
          </div>

          {/* ================== Conference ================== */}
          <h5 className="mb-3">Conference Participation</h5>
          <div className="mb-3">
            <label className="form-label">Participation Category</label>
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
                    required
                    onChange={handleChange}
                  />
                  <label className="form-check-label">{c}</label>
                </div>
              ))}
            </div>
            <div className="invalid-feedback">
              Please select participation type
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Title of Submission</label>
              <input
                type="text"
                className="form-control"
                name="submissionTitle"
                required
                onChange={handleChange}
              />
              <div className="invalid-feedback">Title is required</div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Author(s)</label>
              <input
                type="text"
                className="form-control"
                name="authors"
                required
                onChange={handleChange}
              />
              <div className="invalid-feedback">Authors required</div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Abstract</label>
            <textarea
              className="form-control"
              name="abstractText"
              rows="3"
              required
              onChange={handleChange}
            ></textarea>
            <div className="invalid-feedback">Abstract is required</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Abstract Upload</label>
            <input
              type="file"
              className="form-control"
              name="abstractFile"
              required
              onChange={handleChange}
            />
            <div className="invalid-feedback">Abstract file required</div>
          </div>

          {/* ================== Declaration ================== */}
          <h5 className="mb-3">Declaration</h5>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="declaration"
              required
              onChange={handleChange}
            />
            <label className="form-check-label">
              I hereby declare that the details provided are accurate and the
              submission is original.
            </label>
            <div className="invalid-feedback">
              You must agree before submitting
            </div>
          </div>

          <div className="d-flex justify-content-end mt-4">
            <button type="submit" className="btn btn-success custom-btn">
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
