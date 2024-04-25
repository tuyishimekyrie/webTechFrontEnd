import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "../index.css"
import { studentDataProps } from './DisplayStudents';

const UpdateStudent = () => {
     const [firstName, setFirstName] = useState("");
     const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [data, setData] = useState<studentDataProps>();
    const {id} = useParams();
    console.log(id)
    useEffect(() => {
         async function callData() {
             const response = await axios.get("http://localhost:8080/students/" + id);
             setData(response.data);

    //   setStudentData(response.data);
      console.log("Data", response.data);
    }

    callData();
    }, [])
    console.log(data)
      const createAccount = () => {
        const studentInformation = {
          firstName: firstName,
          lastName: lastName,
          dateOfBirth: dateOfBirth,
        };
        console.log(
          "This is your username" + firstName + "Password is " + lastName
        );
        axios.patch("http://localhost:8080/students/" + id, studentInformation);
        setDateOfBirth("");
        setFirstName("");
        setLastName("");
      };
  return (
    <div>
      <section>
        <h3>{data?.firstName}</h3>
        <h3>{data?.lastName}</h3>
        <h3>{data?.dateOfBirth}</h3>
      </section>{" "}
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
        <button onClick={createAccount} className='send'>Update</button>
      </div>
    </div>
  );
}

export default UpdateStudent