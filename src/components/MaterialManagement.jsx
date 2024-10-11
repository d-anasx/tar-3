import React, { useState } from 'react';

export default function MaterialManagement() {
  const [materialForm, setMaterialForm] = useState({ code: '', brand: '', startDate: '', category: '' });
  const [materials, setMaterials] = useState([]);

  const handleMaterialSubmit = (e) => {
    e.preventDefault();
    setMaterials([...materials, materialForm]);
    setMaterialForm({ code: '', brand: '', startDate: '', category: '' });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Gestion Matériel</h2>
      <form onSubmit={handleMaterialSubmit} className="space-y-4">
        <div>
          <label htmlFor="code" className="block text-sm font-medium text-gray-700">Code Matériel:</label>
          <input
            type="text"
            id="code"
            value={materialForm.code}
            onChange={(e) => setMaterialForm({...materialForm, code: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Marque:</label>
          <input
            type="text"
            id="brand"
            value={materialForm.brand}
            onChange={(e) => setMaterialForm({...materialForm, brand: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Date début utilisation:</label>
          <input
            type="date"
            id="startDate"
            value={materialForm.startDate}
            onChange={(e) => setMaterialForm({...materialForm, startDate: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Catégorie:</label>
          <input
            type="text"
            id="category"
            value={materialForm.category}
            onChange={(e) => setMaterialForm({...materialForm, category: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300">
          Confirmer
        </button>
      </form>
      <div className="mt-8">
        <h3 className="font-semibold text-lg mb-2">Matériel enregistré:</h3>
          {materials.map((material, index) => (
            <ul key={index} className="space-y-2 bg-indigo-400  shadow-md shadow-slate-700 rounded-md p-3 mb-4">
              <li>{material.code}</li>
              <li> {material.brand}</li> 
              <li>{material.category}</li> 
              <li>{material.startDate}</li>
            </ul>
          ))}
      </div>
    </div>
  );
}
