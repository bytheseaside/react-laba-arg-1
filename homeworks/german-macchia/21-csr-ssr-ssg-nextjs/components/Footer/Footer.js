import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./Footer.module.css";

export const Footer = () => {
  const { reloadAll } = useContext(AppContext);

  const handleRefresh = () => {
    reloadAll.setReload(true);
  };

  return (
    <footer>
      <button className={styles.footer__button} onClick={handleRefresh}>
        Refresh All
      </button>
    </footer>
  );
};
