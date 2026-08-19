import PageHero from "../../components/common/PageHero";
import FacilitiesGrid from "../../components/facilities/FacilitiesGrid";

const Facilities = () => {
  return (
    <>
      <PageHero
        title="Our Facilities"
        subtitle="A safe and supportive environment designed for better learning."
      />

      <FacilitiesGrid />
    </>
  );
};

export default Facilities;
