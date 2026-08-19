import Hero from "../../components/home/Hero";
import AboutPreview from "../../components/home/AboutPreview";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Statistics from "../../components/home/Statistics";
import PrincipalMessage from "../../components/home/PrincipalMessage";
import FacilitiesPreview from "../../components/home/FacilitiesPreview";
import UpcomingEvents from "../../components/home/UpcomingEvents";
import GalleryPreview from "../../components/home/GalleryPreview";
import AdmissionCTA from "../../components/home/AdmissionCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <WhyChooseUs />
      <Statistics />
      <PrincipalMessage />
      <FacilitiesPreview />
      <UpcomingEvents />
      <GalleryPreview />
      <AdmissionCTA />
    </>
  );
};

export default Home;
