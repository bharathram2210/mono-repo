import { useEffect, useState } from 'react';

// Define the type for a student
interface Student {
  id: number;
  name: string;
  grade: string;
}

function App() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/students')
      .then(response => response.json())
      .then((data: Student[]) => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} - Grade: {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
