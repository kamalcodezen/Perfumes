import HeroCarousel from "../../components/home/Hero/HeroCarousel";
import Newsletter from "../../components/home/Newsletter/Newsletter";
import ShopCollections from "../../components/home/ShopCollections/ShopCollections";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import WhyChooseUs from "../../components/home/WhyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <ShopCollections />
      {/* <WhyChooseUs /> */}
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default HomePage;
