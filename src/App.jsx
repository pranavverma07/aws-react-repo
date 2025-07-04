import { useState } from 'react'
import './App.css'

function App() {
  const [students] = useState([
    { id: 1, name: 'John Doe', age: 20, grade: 'A', email: 'john.doe@email.com' },
    { id: 2, name: 'Jane Smith', age: 19, grade: 'B+', email: 'jane.smith@email.com' },
    { id: 3, name: 'Mike Johnson', age: 21, grade: 'A-', email: 'mike.johnson@email.com' },
    { id: 4, name: 'Emily Davis', age: 20, grade: 'B', email: 'emily.davis@email.com' },
    { id: 5, name: 'David Wilson', age: 22, grade: 'A+', email: 'david.wilson@email.com' },
    { id: 6, name: 'Sarah Brown', age: 19, grade: 'B-', email: 'sarah.brown@email.com' },
    { id: 7, name: 'Alex Taylor', age: 21, grade: 'A', email: 'alex.taylor@email.com' },
    { id: 8, name: 'Lisa Anderson', age: 20, grade: 'B+', email: 'lisa.anderson@email.com' },
    { id: 9, name: 'Chris Martinez', age: 22, grade: 'A-', email: 'chris.martinez@email.com' },
    { id: 10, name: 'Amanda Garcia', age: 19, grade: 'B', email: 'amanda.garcia@email.com' }
  ])

  return (
    <div className="app">
      <h1>Student Management System</h1>
      <div className="table-container">
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
