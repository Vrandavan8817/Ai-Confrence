import React, { useState } from "react";
import axios from "axios";
import "./RegisterForm.css";

const API_URL = "https://ai-confrence-backend.onrender.com/api/register";

const RegisterForm = () => {
  const [formData, setFormData] = useState({});
  const [validated, setValidated] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // success | error
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

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
    
    // Clear field-specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Mobile validation
    const mobileRegex = /^[0-9]{10}$/;
    if (formData.mobile && !mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }
    
    // File size validation (2MB for receipt, 5MB for abstract)
    if (formData.receipt && formData.receipt.size > 2 * 1024 * 1024) {
      newErrors.receipt = "Receipt file size must be less than 2MB";
    }
    
    if (formData.abstractFile && formData.abstractFile.size > 5 * 1024 * 1024) {
      newErrors.abstractFile = "Abstract file size must be less than 5MB";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    // Custom validation
    if (!validateForm()) {
      setMessage("❌ Please fix the errors in the form");
      setMessageType("error");
      setTimeout(() => setMessage(""), 5000);
      return;
    }

    setIsLoading(true);
    
    try {
      const data = new FormData();

      // Append fields one by one (exact names backend expects)
      data.append("fullName", formData.fullName || "");
      data.append("gender", formData.gender || "");
      data.append("dob", formData.dob || "");
      data.append("nationality", formData.nationality || "");
      data.append("mobile", formData.mobile || "");
      data.append("email", formData.email || "");
      data.append("address", formData.address || "");
      data.append("institution", formData.institution || "");
      data.append("designation", formData.designation || "");
      data.append("department", formData.department || "");
      data.append("category", formData.category || "");
      data.append("fee", formData.fee || "");
      data.append("paymentRef", formData.paymentRef || "");
      data.append("participation", formData.participation || "");
      data.append("submissionTitle", formData.submissionTitle || "");
      data.append("authors", formData.authors || "");
      data.append("abstractText", formData.abstractText || "");

      // Files
      if (formData.receipt) data.append("receipt", formData.receipt);
      if (formData.abstractFile) data.append("abstractFile", formData.abstractFile);

      // Checkbox (must be "true"/"false")
      data.append("declaration", formData.declaration ? "true" : "false");

      // Axios Request with timeout
      const res = await axios.post(API_URL, data, {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 120000, // 30 seconds timeout
      });

      if (res.data.success) {
        setMessage("✅ Registration successful!");
        setMessageType("success");

        // Reset form
        setFormData({});
        form.reset();
        setValidated(false);
      } else {
        setMessage("❌ " + (res.data.message || "Registration failed"));
        setMessageType("error");
      }

      setTimeout(() => setMessage(""), 5000); // Auto-hide after 5 sec
    } catch (err) {
      console.error("❌ Error Response:", err.response?.data || err.message);
      
      // Handle different error types
      let errorMessage = "Server error";
      if (err.code === 'ECONNABORTED') {
        errorMessage = "Request timed out. Please try again.";
      } else if (err.response) {
        errorMessage = err.response.data.message || `Server error: ${err.response.status}`;
      } else if (err.request) {
        errorMessage = "Network error. Please check your connection.";
      } else {
        errorMessage = err.message;
      }
      
      setMessage("❌ " + errorMessage);
      setMessageType("error");
      setTimeout(() => setMessage(""), 5000);
    } finally {
      setIsLoading(false);
    }

    setValidated(true);
  };

  return (
    <div className="registerform">
      {/* Top Notification */}
      {message && (
        <div
          className={`alert-box ${
            messageType === "success" ? "alert-success" : "alert-error"
          }`}
        >
          {message}
        </div>
      )}

      <div className="container p-5" id="registerform">
        <h2 className="text-center mb-3 fw-bold">
          Conference Registration Form
        </h2>
        <p className="text-center text-muted mb-4">
          Please fill out all sections to complete your registration
        </p>

        <form
          className={`form-card p-4 shadow-sm rounded needs-validation ${
            validated ? "was-validated" : ""
          }`}
          noValidate
          onSubmit={handleSubmit}
        >
          {/* Personal Info */}
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
              <div className="invalid-feedback">Please select your gender</div>
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
                className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                name="mobile"
                pattern="[0-9]{10}"
                required
                onChange={handleChange}
              />
              <div className="invalid-feedback">
                {errors.mobile || "Enter a valid 10-digit mobile number"}
              </div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Email ID</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                name="email"
                required
                onChange={handleChange}
              />
              <div className="invalid-feedback">
                {errors.email || "Enter a valid email"}
              </div>
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

          {/* Professional Details */}
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

          {/* Payment Details */}
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
              className={`form-control ${errors.receipt ? 'is-invalid' : ''}`}
              name="receipt"
              required
              onChange={handleChange}
            />
            <div className="invalid-feedback">
              {errors.receipt || "Receipt upload is required"}
            </div>
          </div>

          {/* Conference Participation */}
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
              className={`form-control ${errors.abstractFile ? 'is-invalid' : ''}`}
              name="abstractFile"
              required
              onChange={handleChange}
            />
            <div className="invalid-feedback">
              {errors.abstractFile || "Abstract file required"}
            </div>
          </div>

          {/* Declaration */}
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
            <button 
              type="submit" 
              className="btn btn-success custom-btn"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Submitting...
                </>
              ) : (
                "Submit Registration"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;