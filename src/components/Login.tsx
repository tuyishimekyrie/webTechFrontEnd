import  { useState } from "react";
import "../index.css";
import axios from "axios";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const createAccount = () => {
    const studentInformation = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
    };
    console.log(
      "This is your username" + firstName + "Password is " + lastName
    );
      axios.post("http://localhost:8080/students/", studentInformation);
      setDateOfBirth("");
      setFirstName("");
      setLastName("");
  };
  return (
    <div className="container">
      <h1>Save Student</h1>
      <div>
        <label htmlFor=""></label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Enter your firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor=""></label>
        <input
          type="text"
          name="lastname"
          id="password"
          placeholder="Enter your Lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor=""></label>
        <input
          type="text"
          name="phone"
          id="dateOfBirth"
          placeholder="Enter your Date Of Birth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </div>

      <div>
        <button onClick={createAccount} className="send">Submit</button>
      </div>
    </div>
  );
};

export default Login;
