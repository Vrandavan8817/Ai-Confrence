
import React, { useState } from "react";
import "./RegisterForm.css";

export default function RegisterForm() {
  const [form, setForm] = useState({
    fullName: "",
    gender: "",
    dob: "",
    nationality: "",
    mobile: "",
    email: "",
    address: "",
    affiliation: "",
    department: "",
    designation: "",
    qualification: "",
    specialization: "",
    experience: "",
    paperTitle: "",
    authors: "",
    keywords: "",
    participantCategory: "",
    paymentMode: "",
    transactionId: "",
    uploadFile: null,
    participationType: "",
    declaration: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm({
      ...form,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  return (
    <div className="registerform p-5 mt-5" id="registerform">
    <div className="form-container">
      <h1 className="form-title">Conference Registration Form</h1>

      {/* Personal Information */}
      <div className="form-section">
        <h2>🧑 Personal Information</h2>
        <div className="form-grid">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name *"
            value={form.fullName}
            onChange={handleChange}
          />
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
              />{" "}
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                onChange={handleChange}
              />{" "}
              Other
            </label>
          </div>
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
          />
          <input
            type="text"
            name="nationality"
            placeholder="Nationality"
            value={form.nationality}
            onChange={handleChange}
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number *"
            value={form.mobile}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID *"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="address"
            placeholder="Communication Address"
            value={form.address}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>

      {/* Academic Details */}
      <div className="form-section">
        <h2>🎓 Academic / Professional Details</h2>
        <div className="form-grid">
          <input
            type="text"
            name="affiliation"
            placeholder="Affiliation / Institution"
            value={form.affiliation}
            onChange={handleChange}
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={form.department}
            onChange={handleChange}
          />
          <input
            type="text"
            name="designation"
            placeholder="Designation"
            value={form.designation}
            onChange={handleChange}
          />
          <input
            type="text"
            name="qualification"
            placeholder="Qualification"
            value={form.qualification}
            onChange={handleChange}
          />
          <input
            type="text"
            name="specialization"
            placeholder="Specialization"
            value={form.specialization}
            onChange={handleChange}
          />
          <input
            type="text"
            name="experience"
            placeholder="Experience (Years)"
            value={form.experience}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Registration Details */}
      <div className="form-section">
        <h2>📝 Registration Details</h2>
        <div className="form-grid">
          <input
            type="text"
            name="paperTitle"
            placeholder="Paper Title"
            value={form.paperTitle}
            onChange={handleChange}
          />
          <input
            type="text"
            name="authors"
            placeholder="Authors"
            value={form.authors}
            onChange={handleChange}
          />
          <input
            type="text"
            name="keywords"
            placeholder="Keywords (max 5)"
            value={form.keywords}
            onChange={handleChange}
          />
          <select
            name="participantCategory"
            value={form.participantCategory}
            onChange={handleChange}
          >
            <option value="">Select Participant Category</option>
            <option value="Research Scholar">Research Scholar</option>
            <option value="Faculty">Faculty</option>
            <option value="Industry Professional">Industry Professional</option>
            <option value="Delegate">Delegate</option>
          </select>
          <select
            name="paymentMode"
            value={form.paymentMode}
            onChange={handleChange}
          >
            <option value="">Select Payment Mode</option>
            <option value="Online">Online</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
          <input
            type="text"
            name="transactionId"
            placeholder="Transaction ID"
            value={form.transactionId}
            onChange={handleChange}
          />
          <input type="file" name="uploadFile" onChange={handleChange} />
        </div>
      </div>

      {/* Conference Participation */}
      <div className="form-section">
        <h2>📌 Conference Participation</h2>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="participationType"
              value="Author"
              onChange={handleChange}
            />{" "}
            Author
          </label>
          <label>
            <input
              type="radio"
              name="participationType"
              value="Presenter"
              onChange={handleChange}
            />{" "}
            Presenter
          </label>
          <label>
            <input
              type="radio"
              name="participationType"
              value="Attendee"
              onChange={handleChange}
            />{" "}
            Attendee
          </label>
        </div>
      </div>

      <div class="form-check" className="form-section">
        <h2>✅ Declaration</h2>
        <input
          type="checkbox"
          class="form-check-input"
          name="declaration"
          id="checkChecked"
          checked={form.declaration}
          onChange={handleChange}
        />
        <label class="form-check-label" for="checkChecked" className="p-2">
          I hereby declare that the details provided are true to the best of my
          knowledge.
        </label>
      </div>
      <button className="button-90">Submit Registration</button>
    </div>
    </div>
  );
}

