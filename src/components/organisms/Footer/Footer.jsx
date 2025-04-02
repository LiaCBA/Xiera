import styles from "./Footer.module.css";
function Footer() {
  const footerParts = [
    {
      title: "Support",
      links: ["FAQ", "How it Works", "Features", "Contact"],
    },
    {
      title: "Links",
      links: ["Facebook", "Instagram", "YouTube", "Twitter"],
    },
    {
      title: "Get in Touch",
      links: ["123 456 7789 10", "007 popie, New City, USA"],
    },
  ];
  return (
    <footer className={styles.footerMainContainer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTopContainer}>
          <div className={styles.logoAndIconCondainer}>
            <a href="#">
              <img src="/Logo.svg" alt="Logo" />
            </a>
            <div className={styles.socialMediaMainContainer}>
              <div className={styles.socialMediaIconContainer}>
                <a href="https://twitter.com" className={styles.socialMediaIcon}>
                  <img src="/twitterIcon.svg" alt="Twitter" />
                </a>
                <a href="https://facebook.com" className={styles.socialMediaIcon}>
                  <img src="/facebookIcon.svg" alt="Facebook" />
                </a>
                <a href="https://linkedin.com" className={styles.socialMediaIcon}>
                  <img src="/LinkdinIcon.svg" alt="LinkedIn" />
                </a>
              </div>

              <p>Follow our social media.</p>
            </div>
          </div>
          <div className={styles.Additionalnformation}>
            {footerParts.map((eachElement, index) => (
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
