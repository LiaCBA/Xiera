import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.headerMainContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <a href="#">
            <img src="/images/svg/Logo.svg" alt="Logo" />
          </a>
          <select>
            <option value="1">EN</option>
            <option value="2">GEO</option>
            <option value="3">RU</option>
          </select>
        </div>
        <nav className={styles.navContainer}>
          <ul>
            <li>Find Jobs</li>
            <li>Recent post</li>
            <li>Company</li>
          </ul>
        </nav>
        <div className={styles.buttonContainer}>
          <a href="#">
            <span>Log In</span>
          </a>
          <button className={styles.createAccount}>Create Account</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
