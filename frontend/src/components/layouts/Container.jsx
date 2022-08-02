import styles from "./Container.module.css";

//children serve para fazer os elementos dentro de container aparecer
function Container({ children }) {
  return <main className={styles.container}>{children}</main>;
}

export default Container;
