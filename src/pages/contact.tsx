import ContactForm from "../components/contact/contact-form";
import TopDesign from "../components/hero-section/top-design";
import Navbar from "../components/navbar";
import Section from "../components/section";

const Contact = () => {
  return (
    <>
      <TopDesign />
      <Section
        title=""
        highlight="me"
        className="text-5xl text-center"
        showDivider={false}
      >
        <ContactForm />
      </Section>
      <Navbar />
    </>
  );
};

export default Contact;
