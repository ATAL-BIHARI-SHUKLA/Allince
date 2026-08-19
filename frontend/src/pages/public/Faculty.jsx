import PageHero from "../../components/common/PageHero";
import FacultyGrid from "../../components/faculty/FacultyGrid";

const Faculty = () => {
  return (
    <>
      <PageHero
        title="Our Faculty"
        subtitle="Meet our dedicated and experienced teachers."
      />

      <FacultyGrid />
    </>
  );
};

export default Faculty;
