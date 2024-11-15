// src/components/Auth/Login.js
import React from 'react';

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h2 className="text-2xl font-bold mb-4">Login to MindFlow</h2>
      <form className="bg-white p-8 rounded shadow-md w-80">
        <label className="block text-gray-700">Email:</label>
        <input type="email" className="border w-full p-2 rounded mb-4" />
        <label className="block text-gray-700">Password:</label>
        <input type="password" className="border w-full p-2 rounded mb-4" />
        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default Login;
