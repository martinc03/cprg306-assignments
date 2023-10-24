'use client'
import React, { useState } from 'react';
import NewItem from '../week6/new-item';
import ItemList from '../week6/item-list';
import Item from '../week6/item';

const Week6Page = () => {
  const [items, setItems] = useState(Item);

  const handleAddItem = (newItem) => {
    // Ensure that items is an array
    setItems([...items, newItem]);
  };

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
};

export default Week6Page; // Ensure the correct export name