import PageHero from "../../components/common/PageHero";
import AdmissionInfo from "../../components/admissions/AdmissionInfo";
import Eligibility from "../../components/admissions/Eligibility";
import RequiredDocuments from "../../components/admissions/RequiredDocuments";
import AdmissionProcess from "../../components/admissions/AdmissionProcess";
import ClassesAvailable from "../../components/admissions/ClassesAvailable";
import AdmissionForm from "../../components/admissions/AdmissionForm";

const Admissions = () => {
  return (
    <>
      <PageHero
        title="Admissions"
        subtitle="Begin your child's educational journey with Alliance School."
      />

      <AdmissionInfo />
      <ClassesAvailable />
      <Eligibility />
      <AdmissionProcess />
      <RequiredDocuments />
      <AdmissionForm />
    </>
  );
};

export default Admissions;
