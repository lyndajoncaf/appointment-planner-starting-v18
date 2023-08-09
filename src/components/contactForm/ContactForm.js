import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}      
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="text"
          value={phone}      
          onChange={(e) => setPhone(e.target.value)}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          value={email}      
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <button>Add Contact</button>
    </form>
  );
};

