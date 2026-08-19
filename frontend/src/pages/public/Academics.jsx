import PageHero from "../../components/common/PageHero";
import AcademicsIntro from "../../components/academics/AcademicsIntro";
import ClassesOverview from "../../components/academics/ClassesOverview";
import Subjects from "../../components/academics/Subjects";
import Curriculum from "../../components/academics/Curriculum";
import TeachingMethodology from "../../components/academics/TeachingMethodology";
import AcademicActivities from "../../components/academics/AcademicActivities";

const Academics = () => {
  return (
    <>
      <PageHero
        title="Academics"
        subtitle="A strong academic foundation designed to help every student learn and grow."
      />

      <AcademicsIntro />
      <ClassesOverview />
      <Subjects />
      <Curriculum />
      <TeachingMethodology />
      <AcademicActivities />
    </>
  );
};

export default Academics;
