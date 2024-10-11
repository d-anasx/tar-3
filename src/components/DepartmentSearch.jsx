import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function DepartmentSearch() {
  const [searchDepartment, setSearchDepartment] = useState('');
  const employees = useSelector(state => state.employees.employees);

  const filteredEmployees = employees.filter(employee =>
    employee.département.nomDep.toLowerCase().includes(searchDepartment.toLowerCase())
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Recherche par Département</h2>
      <div className="mb-4">
        <label htmlFor="searchDepartment" className="block text-sm font-medium text-gray-700">Entrer le nom du Département:</label>
        <input
          type="text"
          id="searchDepartment"
          value={searchDepartment}
          onChange={(e) => setSearchDepartment(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      {searchDepartment? (
        <div className="mt-4">
          <h3 className="font-semibold text-lg mb-2">Résultat:</h3>
          <ul className="space-y-2">
            {filteredEmployees.map(employee => (
              <li key={employee.id} className="bg-gray-50 p-2 rounded">
                {employee.nomEmp} {employee.prenomEmp} - {employee.poste}
              </li>
            ))}
          </ul>
        </div>
      ): <span className="text-gray-500">no data found</span>}
    </div>
  );
}
