'use client'

import React, { useState, useEffect } from 'react';
import NewItem from '../week6/new-item';
import ItemList from '../week6/Item-List';

const Week6Page = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/items.json');
        if (response.ok) {
          const data = await response.json();
          setItems(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const handleAddItem = (newItem) => {
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

export default Week6Page;
