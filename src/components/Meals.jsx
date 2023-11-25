import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";

function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchMeals() {
      setIsFetching(true);
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        // throw new Error("Failed fetching data");
      }

      const meals = await response.json();
      setLoadedMeals(meals);
      setIsFetching(false);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

export default Meals;
