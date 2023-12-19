import Image from "next/image";
import contactFormImg from "@/assets/contact-form/contact-form-img.jpg";
import { lato } from "@/fonts/fonts";
import { ChangeEvent, FormEvent, useState } from "react";

type FormImputType = {
  name: string;
  email: string;
  company: string;
  message: string;
}

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formInput, setFormImput] = useState<FormImputType>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setFormImput((prev: FormImputType) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    try {
      await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(formInput),
        headers: {
          "Content-Type": "application/json",
        }
      })
    } catch (error) {
      console.error(`There was an error: ${error}`)
    }
    finally {
      setFormImput({
        name: "",
        email: "",
        company: "",
        message: "",
      })
      setLoading(false); 
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form-container">
      <div className="email-form">
        <input 
          onChange={(e) => handleChange(e)} 
          placeholder="Name *" 
          name="name" 
          type="text" 
          value={formInput.name}
          className={`email-form__name ${lato.className}`} 
        />
        <input 
          onChange={(e) => handleChange(e)} 
          placeholder="Email *" 
          name="email" 
          type="text" 
          value={formInput.email}
          className={`email-form__email ${lato.className}`} 
        />
        <input
          onChange={(e) => handleChange(e)} 
          placeholder="Company"
          name="company"
          type="text"
          value={formInput.company}
          className={`email-form__organisation ${lato.className}`}
        />
        <textarea 
          onChange={(e) => handleChange(e)} 
          placeholder="Message"
          name="message" 
          value={formInput.message}
          className={`email-form__message ${lato.className}`}
        />
      </div>

      <div className="images-container">
        <Image
          className="form-image one"
          height="2000"
          width="2000"
          src={contactFormImg.src}
          alt="email form image"
        />

        <Image
          className="form-image two"
          height="2000"
          width="2000"
          src={contactFormImg.src}
          alt="email form image"
        />

        <h3 className="text" >CONTACT ME</h3>

        <button 
          type="submit" 
          className={`
            contact-btn 
            ${lato.className}
          `} 
          btn-loading-state={loading ? "LOADING" : "" }
        >
          {loading ? "SENDING" : "SEND"}
        </button> 
      </div> 

    </form>
  );
};

export default ContactForm;
