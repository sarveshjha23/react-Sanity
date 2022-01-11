import React from "react";
import meals from "./../../assets/meals.jpg";
import classes from "./Header.module.css";

function Header() {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>

      <img src={meals} className={classes["main-image"]} />
    </React.Fragment>
  );
}

export default Header;
