import styles from "./Footer.module.css";
import { footer } from "../../../data/footer";
import { icons } from "../../../data/footer";

function Footer() {
  return (
    <footer className={styles.footerMainContainer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTopContainer}>
          <div className={styles.logoAndIconCondainer}>
            <a href="#">
              <img src="/img/svg/Logo.svg" alt="Logo" />
            </a>
            <div className={styles.socialMediaMainContainer}>
              <div className={styles.socialMediaIconContainer}>
                {icons.map((eachIconElement) => (
                  <a href={eachIconElement.link} className={styles.socialMediaIcon}>
                    <img src={eachIconElement.imgage} alt={eachIconElement.title} />
                  </a>
                ))}
              </div>
              <p>Follow our social media.</p>
            </div>
          </div>
          <div className={styles.Additionalnformation}>
            {footer.map((eachElement, index) => (
              <div key={index}>
                <h3 className={styles.listTitle}>{eachElement.title}</h3>
                <ul className={styles.listContainer}>
                  {eachElement.links.map((link, index) => (
                    <li key={index}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.footerBottonContainer}>
          <p>Design with by UI hut. All Rights Reserved</p>
          <p>Besnik.com 2021</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
