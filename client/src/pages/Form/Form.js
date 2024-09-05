import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/submit", {
        firstName: fname,
        lastName: lname,
        age: age,
      });
      console.log(res);
      setFname("");
      setLname("");
      setAge("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    navigate("/people");
  };

  return (
    <div>
      <h1>Submit Your information</h1>
      <form>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="fname"
              placeholder="Your first name here..."
              value={fname}
              required
              onChange={(e) => setFname(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="lname"
              placeholder="Your last name here..."
              value={lname}
              required
              onChange={(e) => setLname(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="number"
              name="age"
              placeholder="Your last name here..."
              value={age}
              required
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
      <div>
        <h2>See Our People</h2>
        <p>Click the button to see a list of all submitted people</p>
        <button onClick={handleClick}>See People</button>
      </div>
    </div>
  );
}
