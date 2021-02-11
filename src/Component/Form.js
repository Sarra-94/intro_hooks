import React, { useState } from "react";

const Form = ({ handleData }) => {
  const [name, setName] = useState("mohamed");
  const [lastName, setlastName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && lastName) {
      handleData({ name, lastName: lastName });
      setlastName("");
      setName("");
    } else {
      alert("fields shouldnt be empty");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <label>LastName</label>
      <input value={lastName} onChange={(e) => setlastName(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Form;
