import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    description: "",
    file: null,
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      file: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Aquí se puede hacer una llamada a una API o cualquier otra acción necesaria
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-xl">
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Nombre
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="border border-gray-400 p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
          Teléfono
        </label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="border border-gray-400 p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="city">
          Ciudad
        </label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          className="border border-gray-400 p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="description"
        >
          Descripción del trabajo
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="border border-gray-400 p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="file">
          Archivo
        </label>
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
          className="p-2 w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600"
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;
