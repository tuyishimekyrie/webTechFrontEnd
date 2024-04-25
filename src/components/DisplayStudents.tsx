import axios from "axios";
import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface studentDataProps {
  studentId: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

const DisplayStudents = () => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState<studentDataProps[]>([]);

  useEffect(() => {
    async function callData() {
      const response = await axios.get("http://localhost:8080/students/");

      setStudentData(response.data);
      console.log("Daata", studentData);
    }

    callData();
  }, []);

  const handleClickUpdate = async (id: number) => {
    try {
      const response = await axios.get(`http://localhost:8080/students/${id}`);
      console.log("Response", response);
      if (response.status === 200) {
        //  setStudentData(
        //    studentData.filter((student) => student.studentId !== id)
        //  );
        console.log(response.data);
        navigate(`/update-student/${id}`);
        //    redirect to updatestudent
      }
      console.log("Clicked", id);
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };
  const handleClickDelete = async (id: number) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/students/${id}`
      );
      console.log("Response", response);
      if (response.status === 200) {
        setStudentData(
          studentData.filter((student) => student.studentId !== id)
        );
      }
      console.log("Clicked", id);
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>DateOfBirth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentData?.map((data, index) => (
            <tr key={index}>
              <td>{data.studentId}</td>
              <th>{data.firstName}</th>
              <td>{data.lastName}</td>
              <td>{data.dateOfBirth}</td>
              <td>
                <button
                  onClick={() => handleClickUpdate(data.studentId)}
                  className="update"
                >
                  Update
                </button>
                <button
                  onClick={() => handleClickDelete(data.studentId)}
                  className="delete"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayStudents;
