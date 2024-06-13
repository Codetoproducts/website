import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Header from "../components/Header";
import StairTransition from "../components/StairTransition";

const Contact = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-8 p-8 flex flex-col gap-5 xl:grid-cols-2 xl:grid xl:gap-10">
        <ContactForm />
        <ContactInfo />
      </div>
      <StairTransition />
    </div>
  );
};

export default Contact;
