import React, { useState } from "react";
import bagIcon from "bootstrap-icons/icons/bag.svg";
import styles from "./styles.module.css";

const Cart = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className={styles.cartButton} onClick={() => setOpened(true)}>
        <img src={bagIcon} alt="" />
        <span>-</span>
      </div>
      {/* где-то тут был компонент, который выводил окно корзины, если opened === true  */}
    </>
  );
};

export default Cart;
