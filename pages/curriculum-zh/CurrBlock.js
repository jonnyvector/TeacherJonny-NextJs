import React from "react";
import ExportedImage from "next-image-export-optimizer";
import classes from "./CurrBlock.module.css";

function CurrBlock(props) {
  return (
    <div className={classes["curr-block"]}>
      <ExportedImage
        src={props.image}
        alt="curriculum images"
        width="125"
        height="125"
      />
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default CurrBlock;
