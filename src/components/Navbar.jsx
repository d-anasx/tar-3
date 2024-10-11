import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-200 transition duration-300">Employees</Link>  

          <Link to="/material" className="text-white hover:text-gray-200 transition duration-300">Material Management</Link>
          
          <Link to="/search" className="text-white hover:text-gray-200 transition duration-300">Search</Link>
        </div>
      </div>
    </nav>
  );
}