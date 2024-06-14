import styles from "./header.module.css";

// Change any
const Header = ({ children }: any) => {
  return (
    <header className={`app-container ${styles.header}`}>{children}</header>
  );
};

export default Header;
