import styles from "./NewsLetter.module.css";

function NewsLetter() {
  return (
    <section className={styles.newsMainContainer}>
      <div className={styles.newsContainer}>
        <img src="images/svg/newsLetter.png" alt="News Letter img" />
        <div className={styles.textContainer}>
          <p>NEWS LETTER</p>
          <h2>Subscribe Newsletter</h2>
          <div className={styles.search}>
            <input type="text" placeholder="Enter your email address" />
            <button className={styles.searchBtn}>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
