
'use client'
import React from 'react';

const Item = ({ name, quantity, category }) => {
  const handleClick = () => {
    onSelect(name, quantity, category);
  }
  return (
    <li className="bg-gray-100 p-4 mb-2 rounded-lg" onClick={handleClick}>
      <div className="font-bold">{name}</div>
      <div className="text-sm">Quantity: {quantity}</div>
      <div className="text-sm">Category: {category}</div>
    </li>
  );
};

export default Item;
