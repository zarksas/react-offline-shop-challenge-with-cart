import React, { useState } from "react";
import bagIcon from "bootstrap-icons/icons/bag.svg";
import styles from "./styles.module.css";

const Cart = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className={styles.mainCart}>
      <div className={styles.cartButton} onClick={() => setOpened(true)}>
        <img src={bagIcon} alt="" />
        <span>-</span>
      </div>
      {opened ? <div className={styles.cartBlok}>
        <p className={styles.deleteBlok} onClick={() => setOpened(false)}>закрыть</p>
        <table>
          <tr>
            <td>Товар 1</td>
            <td>Товар 2</td>
            <td>Товар 3</td>
          </tr>
        </table>
      </div> : !opened}
    </div>
  );
};

export default Cart;
