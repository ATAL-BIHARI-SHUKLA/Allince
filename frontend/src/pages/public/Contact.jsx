import PageHero from "../../components/common/PageHero";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactForm from "../../components/contact/ContactForm";
import GoogleMap from "../../components/contact/GoogleMap";
import OfficeHours from "../../components/contact/OfficeHours";

const Contact = () => {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="We are here to answer your questions and help you with any information about Alliance School."
      />

      <ContactInfo />
      <ContactForm />
      <GoogleMap />
      <OfficeHours />
    </>
  );
};

export default Contact;
