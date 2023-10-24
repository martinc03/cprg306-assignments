'use client'

import React from 'react';
import Item from './item'; 

function ItemList() {
  const items = [
    { name: "ItemName1", quantity: 5, category: "CategoryName1" },
    { name: "ItemName2", quantity: 3, category: "CategoryName2" },

  ];

  return (
    <ul>
      {items.map((item, index) => (
        <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
      ))}
    </ul>
  );
}

export default ItemList;
