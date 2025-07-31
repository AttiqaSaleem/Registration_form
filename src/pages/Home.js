import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import InstituteImage from '../assets/institute.jpg'; // 🔴 Add your image in /src/assets/

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${InstituteImage})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg text-center"
      >
        <h1 className="text-4xl font-bold text-red-700 mb-6">Welcome to Our University</h1>
        <button
          onClick={() => navigate('/form')}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
        >
          Register Now
        </button>
      </motion.div>
    </div>
  );
}

export default Home;
