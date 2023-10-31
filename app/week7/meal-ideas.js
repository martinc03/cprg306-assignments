import React, { useState, useEffect } from 'react';

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Define the API fetching function
  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();

      if (data.meals) {
        const mealIdeas = data.meals.map((meal) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          thumbnail: meal.strMealThumb,
        }));
        return mealIdeas;
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error fetching meal ideas:', error);
      return [];
    }
  }

  // Define the function to load meal ideas and set the state
  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  }

  // Use the useEffect hook to call loadMealIdeas when the ingredient prop changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas with {ingredient}:</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <img src={meal.thumbnail} alt={meal.name} />
            {meal.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealIdeas;
