'use client'
import React, { useState } from 'react';
import Item from '../week6/item';

const ItemList = ({ items = [], onItemSelect }) => {
  const [sortBy, setSortBy] = useState('name');

  // Sorting function
  const sortItems = (a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  };

  // Create a sorted copy of the items array
  const sortedItems = [...items].sort(sortItems);

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 ${
            sortBy === 'name' ? 'bg-lightblue' : 'bg-white'
          } rounded-md`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 ${
            sortBy === 'category' ? 'bg-lightblue' : 'bg-white'
          } rounded-md`}
        >
          Sort by Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
