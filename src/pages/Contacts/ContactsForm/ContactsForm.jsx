import React, { useRef } from "react";
import "./ContactsForm.css";
import PreTitle from "../../../components/PreTitle/PreTitle";
import { NavLink } from "react-router-dom";
import {
  Envelope,
  InstagramLogo,
  LinkedinLogo,
  PaperPlaneRight,
} from "@phosphor-icons/react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import BackgroundShapesRight from "../../../components/BackgroundShapes/BackgroundShapesRight";
const ContactsForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Show loading toast
    const loadingToast = toast.loading("Sending message...");

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          // Dismiss loading and show success
          toast.dismiss(loadingToast);
          toast.success(
            "Message sent successfully! We'll get back to you soon.",
            {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            }
          );
          // Reset form after successful submission
          e.target.reset();
        },
        (error) => {
          // Dismiss loading and show error
          toast.dismiss(loadingToast);
          toast.error(`Failed to send message: ${error.text}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section className="contacts_form_section section">
        {/* <BackgroundShapesRight/> */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="contacts_form_container container ">
        <div className="contacts_form_section_header">
          <PreTitle preTitle={"Reach out today"} />
        </div>
        <div className="contacts_form_container_contents">
          <div className="contacts_form_contents_left">
            <h2>Let's connect</h2>
            <p>
              Let’s create something amazing together! Reach out I’d love to
              hear about your project and ideas.
            </p>
            <div className="contact_form_socials">
              <a
                target="_no-referer"
                href="https://www.instagram.com/dev_nthei/"
                className="contact_form_social_icon"
              >
                <InstagramLogo size={26} />{" "}
              </a>
              <a
                target="_no-referer"
                href="mailto:devnthei@gmail.com"
                className="contact_form_social_icon"
              >
                <Envelope size={26} />{" "}
              </a>
              <a
                target="_no-referer"
                href="https://www.linkedin.com/in/markmwendwanthei"
                className="contact_form_social_icon"
              >
                <LinkedinLogo size={26} />
              </a>
            </div>
          </div>
          <form
            className="contacts_form_container_right"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="home_contact_names">
              <input
                type="text"
                id="first_name"
                placeholder="First name"
                required
                name="first_name"
              />
              <input
                type="text"
                id="last_name"
                placeholder="Last name"
                required
                name="last_name"
              />
            </div>

            <div className="home_contact_contacts">
              <input
                type="tel"
                id="contact"
                placeholder="Phone Number"
                required
                name="contact"
              />
              <input
                type="email"
                id="email"
                placeholder="Email"
                required
                name="email"
              />
            </div>

            <div className="home_contact_subject">
              <input
                type="text"
                id="subject"
                placeholder="Project title..."
                required
                name="subject"
              />
            </div>

            <div className="home_contact_description">
              <textarea
                id="content"
                placeholder="My project is about..."
                required
                name="content"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn_purple">
              Send message <PaperPlaneRight size={15} />
            </button>
          </form>
        </div>{" "}
      </div>
    </section>
  );
};

export default ContactsForm;
