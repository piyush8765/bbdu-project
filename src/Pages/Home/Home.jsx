import TopBar from "../../components/TopBar/TopBar";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Stats from "../../components/Stats/Stats";
import Schools from "../../components/Schools/Schools";
import Programs from "../../components/Programs/Programs";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
// import Recruiters from "../../components/Recruiters/Recruiters";
import CampusLife from "../../components/CampusLife/CampusLife";
import News from "../../components/News/News";
import Footer from "../../components/Footer/Footer";
import ScrollTop from "../../components/ScrollTop/ScrollTop";

const Home = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Stats />
      <Schools />
      <Programs />
      <WhyChoose />
      {/* <Recruiters /> */}
      <CampusLife />
      <News />
      <Footer />
      <ScrollTop />
      
    </>
  );
};

export default Home;