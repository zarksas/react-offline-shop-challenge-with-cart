import styles from "./product.module.css";

function Product({ product }) {
  // вывод карточки продукта

  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <img src={product.image} alt="no" />
      </div>
      <p className={styles.price}>{product.price + " ₽"}</p>
      <p className={styles.name}>{product.name}</p>
      <div style={{ width: "200px", margin: "auto" }}>
        <button className={styles.buttonCart}>Купить</button>
      </div>
    </div>
  );
}

export default Product;
