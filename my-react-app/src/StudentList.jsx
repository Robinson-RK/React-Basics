import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentList.css'; // Import the CSS file

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setStudents(response.data.results);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="student-list"> 
      <h2>STUDENTS LIST</h2>
      <ul>
        {students.map(student => (
          <li key={student.url}>
            <strong>Name:</strong> {student.name} <br />
            <strong>Height:</strong> {student.height} <br />
            <strong>Weight:</strong> {student.mass} <br />
            <strong>Gender:</strong> {student.gender} <br />
            <strong>Birth Year:</strong> {student.birth_year} <br />
            <strong>Eye Color:</strong> {student.eye_color} <br />
            <strong>URL:</strong> {student.url} <br />
            <br /><br /><br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
