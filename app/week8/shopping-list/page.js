'use client'

import React, { useState } from 'react';
import NewItem from '../../week8/shopping-list/new-item';
import ItemList from '../../week8/shopping-list/item-list';
import MealIdeas from '../../week8/shopping-list/meal-ideas'; 

const Week6Page = () => {
  const [items, setItems] = useState([]); // Initialize items as an empty array
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (name) => {
    // Clean up the item name (remove emojis, size, etc.)
    const cleanedName = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="container mx-auto p-6 flex">
      <div>
        <div className="text-2xl font-bold mb-4">Shopping List</div>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <MealIdeas ingredient={selectedItemName} /> {/* Pass the selectedItemName as the ingredient prop */}
    </main>
  );
};

export default Week6Page;
