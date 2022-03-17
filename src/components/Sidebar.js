import { useDispatch, useSelector } from "react-redux";
import styles from "./Sidebar.module.css";

function Sidebar() {
  // вывод списка категорий
  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  const handleCategories = (id) => {
    dispatch({ type: "get", payload: id });
  };

  return (
    <div className={styles.sidebar}>
      {categories.map((item) => {
        return (
          <div
            className={styles.category}
            onClick={() => handleCategories(item.id)}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
