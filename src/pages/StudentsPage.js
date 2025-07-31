import React, { useState } from 'react';
import { motion } from 'framer-motion';

function StudentsPage({ students, updateStudent, deleteStudent }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '',
    age: '',
    email: '',
    education: '',
    marks: '',
    result: ''
  });

  const startEdit = (student, index) => {
    setEditingIndex(index);
    setEditForm(student);
  };

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    updateStudent(editingIndex, editForm);
    setEditingIndex(null);
  };

  return (
    <div className="p-8 min-h-screen bg-black text-white">
      <motion.h2
        className="text-3xl font-bold text-center mb-6 text-red-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Registered Students
      </motion.h2>

      {students.length === 0 ? (
        <p className="text-center text-gray-400">No students registered yet.</p>
      ) : (
        <div className="space-y-4 max-w-3xl mx-auto">
          {students.map((student, index) => (
            <motion.div
              key={index}
              className="p-4 bg-gray-800 rounded shadow flex flex-col gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {editingIndex === index ? (
                <>
                  {['name', 'age', 'email', 'education', 'marks', 'result'].map((field) => (
                    <input
                      key={field}
                      name={field}
                      value={editForm[field]}
                      onChange={handleChange}
                      className="border border-red-400 text-black px-3 py-1 rounded"
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    />
                  ))}
                  <button
                    onClick={handleUpdate}
                    className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 self-start mt-2"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <p><strong>Name:</strong> {student.name}</p>
                  <p><strong>Age:</strong> {student.age}</p>
                  <p><strong>Email:</strong> {student.email}</p>
                  <p><strong>Education:</strong> {student.education}</p>
                  <p><strong>Marks:</strong> {student.marks}</p>
                  <p><strong>Result:</strong> {student.result}</p>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => startEdit(student, index)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteStudent(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentsPage;
