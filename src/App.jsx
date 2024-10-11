import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MaterialManagement from './components/MaterialManagement';
import EmployeeList from './components/EmployeeList';
import DepartmentSearch from './components/DepartmentSearch';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/material" element={<MaterialManagement />} />
            <Route path="/" element={<EmployeeList />} />
            <Route path="/search" element={<DepartmentSearch />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}