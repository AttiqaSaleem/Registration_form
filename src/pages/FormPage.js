import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function FormPage({ addStudent }) {
  const [form, setForm] = useState({
    name: '',
    age: '',
    email: '',
    education: '',
    marks: '',
    address: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(form);
    navigate('/students');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-red-700">
          Student Registration
        </h2>

        {[
          { name: 'name', label: 'Name' },
          { name: 'age', label: 'Age', type: 'number' },
          { name: 'email', label: 'Email' },
          { name: 'education', label: 'Previous Education' },
          { name: 'marks', label: 'Marks', type: 'number' },
          { name: 'address', label: 'Address' },
        ].map(({ name, label, type = 'text' }) => (
          <div key={name} className="mb-4">
            <label className="block mb-1 font-medium">{label}</label>
            <input
              type={type}
              name={name}
              value={form[name]}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>
        ))}

        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 w-full rounded hover:bg-red-700 transition"
        >
          Submit
        </button>
      </motion.form>
    </div>
  );
}

export default FormPage;
