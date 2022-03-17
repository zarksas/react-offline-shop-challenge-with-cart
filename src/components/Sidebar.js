import { useSelector } from "react-redux";
import styles from "./Sidebar.module.css";

function Sidebar() {
  // вывод списка категорий
  const categories = useSelector((state) => state.categories);

  return (
    <div className={styles.sidebar}>
      {categories.map((item, index) => {
        return <div className={styles.category}>{item.name}</div>;
      })}
    </div>
  );
}

export default Sidebar;
