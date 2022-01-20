import React, { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "./../UI/Card";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
  const [food, setFood] = useState([]);

  const fetchHandler = async () => {
    const response = await fetch(
      "https://classes-9990d-default-rtdb.firebaseio.com/food.json"
    );

    const data = await response.json();
    let dataDummy = [];

    for (const key in data) {
      dataDummy = data[key];
    }

    setFood(dataDummy);
  };
  useEffect(() => {
    fetchHandler();
  }, []);

  const mealsList = food.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
        {console.log(food)}
      </Card>
    </section>
  );
}

export default AvailableMeals;
