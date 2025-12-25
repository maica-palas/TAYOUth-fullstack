import React, { useState } from "react";
import tLogo from '../../../img/lahat.png';

const infoText = {
  textAlign: "center",
  margin: "20px auto 0 auto",
  fontSize: "18px",
  maxWidth: "700px",
  lineHeight: "1.6",
};

const volunteerText = {
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "20px",
  margin: "10px 0 30px 0",
};

const formStyle = {
  background: "#d4a017",
  padding: "40px",
  borderRadius: "0",
  maxWidth: "600px",
  margin: "40px auto",
  boxSizing: "border-box",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  border: "none",
  borderRadius: "2px",
  fontSize: "16px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "120px",
  padding: "10px",
  background: "#000",
  color: "#fff",
  border: "none",
  borderRadius: "20px",
  fontSize: "18px",
  margin: "20px auto 0",
  display: "block",
  cursor: "pointer",
};

const headerStyle = {
  background: "#ffe082",
  textAlign: "center",
};

const blue = { color: "#1a237e" };
const yellow = { color: "#ffd600" };

export default function Join() {
  const [form, setForm] = useState({
    name: "",
    birthday: "",
    contact: "",
    email: "",
    address: "",
    organization: "",
    strength: "",
    contribution: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/api/join/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then(response => {
        if (response.ok) {
          alert("Form submitted!");
        } else {
          alert("Submission failed.");
        }
      })
      .catch(error => {
        alert("There was an error submitting the form.");
      });
  };

  return (
    <div>
      <div style={headerStyle}>
        <img src={tLogo} alt="TaYouth Logo" style={{ display: 'block', margin: '0 auto', height: '100px' }} />
      </div>
      <div style={infoText}>
        Your involvement helps us extend our reach, strengthen our programs, and create sustainable change in the lives of the youth. Together, we can transform communities, uplift young lives, and ensure that every child has the opportunity to dream, learn, and succeed.
      </div>
      <div style={volunteerText}>
        <span style={blue}>Be a Volunteer.</span> <span style={yellow}>Be the Change..</span>
      </div>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Join Us</h2>
        <input
          style={inputStyle}
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="date"
          name="birthday"
          placeholder="Birthday"
          value={form.birthday}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="contact"
          placeholder="Contact number"
          value={form.contact}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="organization"
          placeholder="Organization involved"
          value={form.organization}
          onChange={handleChange}
        />
        <input
          style={inputStyle}
          type="text"
          name="strength"
          placeholder="What is/are your strength?"
          value={form.strength}
          onChange={handleChange}
        />
        <textarea
          style={{ ...inputStyle, minHeight: "50px" }}
          name="contribution"
          placeholder="What can you contribute in TaYouth group?"
          value={form.contribution}
          onChange={handleChange}
        />
        <button style={buttonStyle} type="submit">
          Next
        </button>
      </form>
    </div>
  );
}
