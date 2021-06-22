import { useContext } from "react";
import styles from "./product.module.css";
import { ShopContext } from "../../../context/ShopContext";

function Product({ product }) {
  const { state, dispatch } = useContext(ShopContext);

  // вывод карточки продукта
}

export default Product;
