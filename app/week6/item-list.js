'use client'
import React, { useState } from 'react';
import Item from '../week6/item';

const ItemList = ({ items = [], onItemSelect }) => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items];

  sortedItems.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div>
        <button onClick={() => setSortBy('name')} style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'white' }}>
          Sort by Name
        </button>
        <button onClick={() => setSortBy('category')} style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'white' }}>
          Sort by Category
        </button>
      </div>
      <ul>
        {sortedItems.map(item => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)} // Pass the onSelect prop
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
