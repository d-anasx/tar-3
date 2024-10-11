import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees, addEmployee, updateEmployee, deleteEmployee } from '../redux/employeeSlice';

export default function EmployeeList() {
  const dispatch = useDispatch();
  const { employees, status, error } = useSelector(state => state.employees);
  const [employeeForm, setEmployeeForm] = useState({nomEmp : "",prenomEmp : "",poste : "",département : {nomDep : "" , codeDep : employees.length + 1}});
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleEmployeeSubmit = (e) => {
    e.preventDefault();
    if (editingEmployee) {
      dispatch(updateEmployee({ ...employeeForm, id: editingEmployee.id }));
      setEditingEmployee(null);
    } else {
      dispatch(addEmployee(employeeForm));
    }
    resetForm();
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
    setEmployeeForm(employee);
  };

  const handleDeleteEmployee = (id) => {
    dispatch(deleteEmployee(id));
    resetForm();
  };

  const resetForm = () => {
    setEmployeeForm({nomEmp : "",prenomEmp : "",poste : "",département : {nomDep : "" , codeDep : employees.length + 1}});
  };

  if (status === 'loading') {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center mt-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Liste des Employés</h2>
      <form onSubmit={handleEmployeeSubmit} className="mb-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom:</label>
          <input
            type="text"
            id="name"
            value={employeeForm.nomEmp}
            onChange={(e) => setEmployeeForm({...employeeForm, nomEmp: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Prénom:</label>
          <input
            type="text"
            id="firstName"
            value={employeeForm.prenomEmp}
            onChange={(e) => setEmployeeForm({...employeeForm, prenomEmp: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="position" className="block text-sm font-medium text-gray-700">Poste:</label>
          <input
            type="text"
            id="position"
            value={employeeForm.poste}
            onChange={(e) => setEmployeeForm({...employeeForm, poste: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="department" className="block text-sm font-medium text-gray-700">Département:</label>
          <input
            type="text"
            id="department"
            value={employeeForm.département.nomDep}
            onChange={(e) => setEmployeeForm({...employeeForm, département: {nomDep: e.target.value}})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300">
          {editingEmployee ? 'Mettre à jour' : 'Ajouter'} Employé
        </button>
      </form>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prénom</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Poste</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Département</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employees.map(employee => (
              <tr key={employee.id}>
                {console.log(employee)}
                <td className="px-6 py-4 whitespace-nowrap">{employee.nomEmp}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.prenomEmp}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.poste}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.département.nomDep}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleEditEmployee(employee)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    Modifier
                  </button>
                  <button onClick={() => handleDeleteEmployee(employee.id)} className="text-red-600 hover:text-red-900">
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

