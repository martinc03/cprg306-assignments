import React from 'react';
import Item from 'C:\Users\marti\Desktop\School\Web Development 2\cprg306-assignments\app\week3\item.js'; 
import Item from 'C:\Users\marti\Desktop\School\Web Development 2\cprg306-assignments\app\week5\items.json'

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = itemsData.sort((a, b) => {
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
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
};
export default ItemList;
