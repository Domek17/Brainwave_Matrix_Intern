import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles["header"]}>
      <img src={require("./logo.png")} alt="To-do List Logo" />
      <h1>To-do List</h1>
    </div>
  );
}

export default Header;
