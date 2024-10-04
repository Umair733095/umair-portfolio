import Style from "./Articles.module.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Articles = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
      <Navbar />
      <section className={Style["article-section"]}>
        <div className={Style["article-heading-description"]}>
          <h1 className={Style["article-heading"]}>Articles</h1>
          <p className={Style["article-description"]}>
            Here you will find articles about web design, web development and
            related topics. I also write about my thoughts on inspirational
            content, opinions and articles about best practices.
          </p>
        </div>
        <div className={Style["articles"]}>
          <i className={Style["article-info"]}>
            No articles found. Stay tuned!
          </i>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Articles;
