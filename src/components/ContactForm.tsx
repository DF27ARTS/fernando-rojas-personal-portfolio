import Image from "next/image";
import formImg from "@/assets/form-contact-img.jpg";

const ContactForm = () => {
  return (
    <div className="form-container">
      <form action="" className="email-form">
        <input placeholder="Name" type="text" className="email-form__name" />
        <input placeholder="Emal" type="text" className="email-form__email" />
        <input
          placeholder="Company"
          type="text"
          className="email-form__organisation"
        />
        <textarea className="email-form__message" />
      </form>

      <Image
        className="form-image"
        height="800"
        width="800"
        src={formImg.src}
        alt="email form image"
      />

      <h3 className="text">CONTACT ME</h3>
    </div>
  );
};

export default ContactForm;
