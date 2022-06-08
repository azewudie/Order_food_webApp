import React, { Fragment } from "react";
import Log from "../../assets/meals.jpg";
import HeaderCarButton from "./HeaderCartButton";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1> ReactMeals</h1>
        <HeaderCarButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={Log} alt=" Table of Foods " />
      </div>
    </Fragment>
  );
};
export default Header;
