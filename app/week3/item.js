import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-rose-700 p-4 mb-2 rounded-lg">
      <div className="font-bold">{name}</div>
      <div className="text-sm">Quantity: {quantity}</div>
      <div className="text-sm">Category: {category}</div>
    </li>
  );
};

export default Item;

