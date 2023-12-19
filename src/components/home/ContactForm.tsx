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

type FormErrorType = {
  name: string;
  errorMessage: string;
}

const ContactForm = () => {
  const [error, setError] = useState<FormErrorType>({name: "", errorMessage: ""});
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [formInput, setFormImput] = useState<FormImputType>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const setSuccessMessage = () => {
    setSuccess("Your email has been sent successfully");

    setTimeout(() => {
      setSuccess("");
    }, 5000)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    if (success) setSuccess("");
    if (error.name) setError({name: "", errorMessage: ""});

    setFormImput((prev: FormImputType) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formInput.name || !formInput.email || !formInput.message) {
      setError(() => {
        if (!formInput.name) return {name: "name", errorMessage: "Please enter your name"}
        else if (!formInput.email) return {name: "email", errorMessage: "Please provide your email address"}
        else if (!regex.test(formInput.email)) return {name: "email", errorMessage: "Please enter a valid email address"}
        else if (!formInput.message) return {name: "message", errorMessage: "Please write your message"}
        else return {name: "", errorMessage: ""}
      })
      return;
    }

    setError({name: "", errorMessage: ""})
    setLoading(true);
    try {
      await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(formInput),
        headers: {
          "Content-Type": "application/json",
        }
      })

      setSuccessMessage()
    } catch (error) {
      setError({name: "error", errorMessage: "There was an error, please try again"});
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
      <div className="contact-form">
        <input 
          onChange={(e) => handleChange(e)} 
          placeholder="Name *" 
          name="name" 
          type="text" 
          value={formInput.name}
          className={`contact-form__name ${lato.className} ${error.name === "name" ? "error" : ""}`} 
        />
        <input 
          onChange={(e) => handleChange(e)} 
          placeholder="Email *" 
          name="email" 
          type="text" 
          value={formInput.email}
          className={`contact-form__email ${lato.className} ${error.name === "email" ? "error" : ""}`} 
        />
        <input
          onChange={(e) => handleChange(e)} 
          placeholder="Company"
          name="company"
          type="text"
          value={formInput.company}
          className={`contact-form__organisation ${lato.className}`}
        />
        <textarea 
          onChange={(e) => handleChange(e)} 
          placeholder="Message"
          name="message" 
          value={formInput.message}
          className={`contact-form__message ${lato.className} ${error.name === "message" ? "error" : ""}`}
        />
        {
          error.name ?
            <p className={`contact-form__error ${lato.className}`}>{error.errorMessage}</p>
          : success ? 
            <p className={`contact-form__success ${lato.className}`}>{success}</p>
          : null
        }
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

        <h3 className="text" translate="no" >CONTACT ME</h3>

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
