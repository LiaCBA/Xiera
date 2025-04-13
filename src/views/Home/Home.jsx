import Footer from "../../components/organisms/Footer/Footer";
import Header from "../../components/organisms/Header/Header";
import NewsLetter from "../../components/organisms/NewsLetter/NewsLetter";
import Jobs from "../../components/organisms/Jobs/Jobs";


const Home = () => {
  return (
    <div>
      {/*Header*/}
      <Header />

      {/*How it Works*/}
      {/*How it Works component import here*/}

      {/*Jobs near me*/}
      <Jobs />
      {/*99+ jobs category*/}
      {/*99+ jobs category component import here*/}

      {/*Price value*/}
      {/*Price value component import here*/}

      {/*Testimonials*/}
      {/*Testimonials near me component import here*/}

      {/*Subscribe newsletter*/}
      <NewsLetter />

      {/*Footer*/}
      <Footer />
    </div>
  );
};

export default Home;
