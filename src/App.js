import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FormPage from './pages/FormPage';
import StudentsPage from './pages/StudentsPage';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const updateStudent = (index, updatedData) => {
    const newList = [...students];
    newList[index] = updatedData;
    setStudents(newList);
  };

  const deleteStudent = (indexToDelete) => {
    const updatedList = students.filter((_, idx) => idx !== indexToDelete);
    setStudents(updatedList);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage addStudent={addStudent} />} />
        <Route
          path="/students"
          element={
            <StudentsPage
              students={students}
              updateStudent={updateStudent}
              deleteStudent={deleteStudent} // ✅ Pass delete handler
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
