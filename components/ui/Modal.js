import React from "react";
import classes from "./Modal.module.css";
import { FaWindowClose } from "react-icons/fa";

export default function Modal({ open, children, onClose }) {
  const close = <FaWindowClose size="24px"></FaWindowClose>;

  if (!open) {
    return null;
  } else {
    return (
      <>
        <div onClick={onClose} className={classes.overlay}></div>
        <div className={classes.modal}>
          <FaWindowClose
            size="24px"
            className={classes.close}
            onClick={onClose}
          />
          <img alt="wechat modal" src="/images/WeChatQR.jpg" />
        </div>
      </>
    );
  }
}
