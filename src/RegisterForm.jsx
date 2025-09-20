import React, { useState } from "react";
import "./RegisterForm.css";

function Register() {
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
    ids: "",
    category: [],
    fee: "",
    paymentRef: "",
    participation: [],
    submissionTitle: "",
    authors: "",
    keywords: "",
    track: "",
    abstractFile: null,
    fullPaperFile: null,
    signature: "",
    declarantName: "",
    declarationDate: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      const current = form[name];
      if (checked) {
        setForm({ ...form, [name]: [...current, value] });
      } else {
        setForm({ ...form, [name]: current.filter((v) => v !== value) });
      }
    } else if (type === "file") {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted form data:", form);
    alert("Registration submitted! Check console for details.");
    // Here you can send `form` to backend or API
  };

  return (
    
    <div className="register" id="register">
      <div className="form-box register-box">
        <form onSubmit={handleSubmit} className="register-form" noValidate>
          <h1 className="title">Conference Registration</h1>

          <div className="fields-grid">

            {/* Personal Information */}
            <div className="field">
              <label>Full Name</label>
              <div className="input-box horizontal">
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label>Gender</label>
              <div className="checkbox-group">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={form.gender === "Male"}
                    onChange={handleChange}
                  />{" "}
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={form.gender === "Female"}
                    onChange={handleChange}
                  />{" "}
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={form.gender === "Other"}
                    onChange={handleChange}
                  />{" "}
                  Other
                </label>
              </div>
            </div>

            <div className="field">
              <label>Date of Birth</label>
              <div className="input-box horizontal">
                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label>Nationality</label>
              <div className="input-box horizontal">
                <input
                  type="text"
                  name="nationality"
                  value={form.nationality}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label>Mobile Number</label>
              <div className="input-box horizontal">
                <input
                  type="text"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label>Email</label>
              <div className="input-box horizontal">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label>Communication Address</label>
              <div className="input-box horizontal">
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows={2}
                />
              </div>
            </div>

            {/* Academic / Professional Details */}
            <div className="field">
              <label>Affiliation</label>
              <div className="input-box horizontal">
                <input
                  type="text"
                  name="affiliation"
                  value={form.affiliation}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label>Department / Centre</label>
              <div className="input-box horizontal">
                <input
                  type="text"
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label>Designation / Role</label>
              <div className="input-box horizontal">
                <input
                  type="text"
                  name="designation"
                  value={form.designation}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label>Highest Qualification</label>
              <div className="input-box horizontal">
                <input
                  type="text"
                  name="qualification"
                  value={form.qualification}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label>Area of Specialization</label>
              <div className="input-box horizontal">
                <input
                  type="text"
                  name="specialization"
                  value={form.specialization}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label>Vidwan ID / ORCID / Scopus / Google Scholar</label>
              <div className="input-box horizontal">
                <input
                  type="text"
                  name="ids"
                  value={form.ids}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Registration Details */}
            <div className="field">
              <label>Participant Category</label>
              <div className="checkbox-group">
                {["Research Scholar", "Faculty / Academician", "Industry Professional", "Delegate"].map((cat) => (
                  <label key={cat}>
                    <input
                      type="checkbox"
                      name="category"
                      value={cat}
                      checked={form.category.includes(cat)}
                      onChange={handleChange}
                    />{" "}
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            <div className="field">
              <label>Registration Fee</label>
              <div className="input-box horizontal">
                <input
                  type="text"
                  name="fee"
                  value={form.fee}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label>Payment Reference Number</label>
              <div className="input-box horizontal">
                <input
                  type="text"
                  name="paymentRef"
                  value={form.paymentRef}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Conference Participation */}
            <div className="field">
              <label>Participation Category</label>
              <div className="checkbox-group">
                {["Research Paper Presentation", "Poster Presentation", "AI Tool Demonstration / Competition"].map((p) => (
                  <label key={p}>
                    <input
                      type="checkbox"
                      name="participation"
                      value={p}
                      checked={form.participation.includes(p)}
                      onChange={handleChange}
                    />{" "}
                    {p}
                  </label>
                ))}
              </div>
            </div>

            <div className="field">
              <label>Title of Submission</label>
              <div className="input-box horizontal">
                <input
                  type="text"
                  name="submissionTitle"
                  value={form.submissionTitle}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label>Author(s) / Developer(s)</label>
              <div className="input-box horizontal">
                <input
                  type="text"
                  name="authors"
                  value={form.authors}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label>Keywords (max 5)</label>
              <div className="input-box horizontal">
                <input
                  type="text"
                  name="keywords"
                  value={form.keywords}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label>Conference Track</label>
              <div className="input-box horizontal">
                <input
                  type="text"
                  name="track"
                  value={form.track}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label>Abstract (PDF/DOC)</label>
              <div className="input-box horizontal">
                <input
                  type="file"
                  name="abstractFile"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                />
              </div>
            </div>

            <div className="field">
              <label>Full Paper / Poster / Tool</label>
              <div className="input-box horizontal">
                <input
                  type="file"
                  name="fullPaperFile"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                />
              </div>
            </div>

            {/* Declaration */}
            <div className="field">
              <label>Signature</label>
              <div className="input-box horizontal">
                <input
                  type="text"
                  name="signature"
                  value={form.signature}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* <div className="field">
              <label>Name</label>
              <div className="input-box horizontal">
                <input
                  type="text"
                  name="declarantName"
                  value={form.declarantName}
                  onChange={handleChange}
                />
              </div>
            </div> */}

            {/* <div className="field">
              <label>Date</label>
              <div className="input-box horizontal">
                <input
                  type="date"
                  name="declarationDate"
                  value={form.declarationDate}
                  onChange={handleChange}
                />
              </div>
            </div> */}

          </div>

          <button type="submit" className="button-90">Submit Registration</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
