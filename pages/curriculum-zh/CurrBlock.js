import React from "react";
import classes from "./CurrBlock.module.css";

function CurrBlock(props) {
  return (
    <div className={classes["curr-block"]}>
      <img src={props.image} alt="curriculum images" width="125" height="125" />
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default CurrBlock;
