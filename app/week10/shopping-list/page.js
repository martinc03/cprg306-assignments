'use client'

import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useUserAuth } from './_utils/auth-context';
import { getItems, addItem } from './_services/shopping-list-service';
import NewItem from '../../week10/shopping-list/new-item';
import ItemList from '../../week10/shopping-list/item-list';
import MealIdeas from '../../week10/shopping-list/meal-ideas';
import Week10Page from '../../week10/page';

const Week6Page = () => {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  useEffect(() => {
    async function loadItems() {
      try {
        if (user) {
          const userItems = await getItems(user.uid);
          setItems(userItems);
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    }

    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    try {
      if (user) {
        const newItemId = await addItem(user.uid, newItem);
        newItem.id = newItemId;
        setItems([...items, newItem]);
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleItemSelect = (name) => {
    const cleanedName = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
    setSelectedItemName(cleanedName);
  };

  if (!user) {
    return <Redirect to={Week10Page} />;
  }

  return (
    <main className="container mx-auto p-6 flex">
      <div>
        <div className="text-2xl font-bold mb-4">Shopping List</div>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
};

export default Week6Page;
