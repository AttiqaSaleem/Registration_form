import React, { useState } from 'react';

const gradeToPoint = {
  "A": 4.0, "A-": 3.7, "B+": 3.3, "B": 3.0,
  "B-": 2.7, "C+": 2.3, "C": 2.0, "D": 1.0, "F": 0.0
};

function CGPAPage() {
  const [subjects, setSubjects] = useState([]);
  const [subjectForm, setSubjectForm] = useState({
    name: '', code: '', credit: '', instructor: '', grade: ''
  });

  const addSubject = () => {
    setSubjects([...subjects, subjectForm]);
    setSubjectForm({ name: '', code: '', credit: '', instructor: '', grade: '' });
  };

  const handleChange = (e) => {
    setSubjectForm({ ...subjectForm, [e.target.name]: e.target.value });
  };

  const deleteSubject = (index) => {
    const updated = [...subjects];
    updated.splice(index, 1);
    setSubjects(updated);
  };

  const calculateCGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    subjects.forEach((sub) => {
      const points = gradeToPoint[sub.grade] || 0;
      const credit = parseFloat(sub.credit);
      totalPoints += points * credit;
      totalCredits += credit;
    });
    return totalCredits ? (totalPoints / totalCredits).toFixed(2) : 'N/A';
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-red-500">Subject Management & CGPA Tracker</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {['name', 'code', 'credit', 'instructor', 'grade'].map((field) => (
          <input
            key={field}
            name={field}
            value={subjectForm[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="p-2 rounded bg-white text-black"
          />
        ))}
        <button onClick={addSubject} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 col-span-2">
          Add Subject
        </button>
      </div>

      <div className="space-y-4">
        {subjects.map((sub, idx) => (
          <div key={idx} className="p-4 bg-gray-800 rounded shadow">
            <p><strong>Subject:</strong> {sub.name} ({sub.code})</p>
            <p><strong>Instructor:</strong> {sub.instructor}</p>
            <p><strong>Credit Hours:</strong> {sub.credit}</p>
            <p><strong>Grade:</strong> {sub.grade}</p>
            <button onClick={() => deleteSubject(idx)} className="mt-2 text-sm text-red-400 hover:underline">
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-xl text-center">
        <strong>Current CGPA:</strong> {calculateCGPA()}
      </div>
    </div>
  );
}

export default CGPAPage;
