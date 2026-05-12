import { useState } from "react";

const Passed = () => {
  const students = [
    { id: 1, name: "Ali", marks: 85 },
    { id: 2, name: "Sara", marks: 45 },
    { id: 3, name: "Ahmed", marks: 72 },
    { id: 4, name: "Zoya", marks: 30 },
    { id: 5, name: "Hamza", marks: 90 },
  ];

  const [selectedStudentId, setSelectedStudentId] = useState(null);

  const filteredstudents = students.filter((student) => {
    if (selectedStudentId === "passed") {
      return student.marks >= 40;
    }
    if (selectedStudentId === "failed") {
      return student.marks < 40;
    }
    return true;
  });

  return (
    <div>
      <select
        name=""
        id=""
        onChange={(e) => setSelectedStudentId(e.target.value)}
      >
        <option value="passed">Passed</option>
        <option value="failed">Failed</option>
        <option value="all">All</option>
      </select>

      {filteredstudents.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Marks: {student.marks}</p>
        </div>
      ))}
    </div>
  );
};

export default Passed;
