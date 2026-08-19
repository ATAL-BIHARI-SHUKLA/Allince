import PageHero from "../../components/common/PageHero";
import SchoolIntroduction from "../../components/about/SchoolIntroduction";
import SchoolHistory from "../../components/about/SchoolHistory";
import VisionMission from "../../components/about/VisionMission";
import CoreValues from "../../components/about/CoreValues";
import PrincipalMessage from "../../components/about/PrincipalMessage";

const About = () => {
  return (
    <>
      <PageHero
        title="About Alliance"
        subtitle="Learn more about our school, values, vision, and commitment to education."
      />

      <SchoolIntroduction />
      <SchoolHistory />
      <VisionMission />
      <CoreValues />
      <PrincipalMessage />
    </>
  );
};

export default About;
