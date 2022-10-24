import React from "react";
import classes from "./CurrBlock.module.css";


function CurrBlock(props) {
  return (
    <div className={classes["curr-block"]}>
      <img 
      alt="curriculum images" src={props.image} />
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default CurrBlock;
