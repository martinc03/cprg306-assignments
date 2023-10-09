import React, { useState } from 'react';


const NewItem = () => {
  
    // Initialize State Variables
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  // Form Submission Handler
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an item object with current values
    const item = {
      name,
      quantity,
      category
    };

    // Log the item object
    console.log('Item:', item);

    // Display an alert with current state
    alert(`Item: ${name}, Quantity: ${quantity}, Category: ${category}`);

    // Reset state variables to initial values
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Quantity Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
            Quantity:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="quantity"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            required
          />
        </div>

        {/* Category Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            {/* Add other categories as needed */}
          </select>
        </div>

        {/* Submit Button */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewItem;
