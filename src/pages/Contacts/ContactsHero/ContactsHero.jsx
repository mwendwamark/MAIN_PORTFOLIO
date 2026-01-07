import React from "react";
import "./ContactsHero.css";
import contactsBackground from "../../../assets/contactsBackground.webp";
import { ArrowDown } from "@phosphor-icons/react";

const ContactsHero = () => {
  return (
    <section
      className="contacts_hero_section"
      style={{ backgroundImage: `url(${contactsBackground})` }}
    >
      <div className="contacts_hero_overlay"></div>
      <div className="contacts_hero_container container">
        <div className="contacts_hero_content">
          <div className="contacts_hero_left">
            <h1 className="contacts_hero_title">
              Contact Me<span className="contacts_hero_asterisk">*</span>
            </h1>
          </div>
          <div className="contacts_hero_right">
            <p className="contacts_hero_desc">
              I'd love to hear from you! Whether you're looking to collaborate,
              discuss an idea, or simply connect, feel free to reach out.
            </p>
            <div className="contacts_hero_scroll">
              <ArrowDown size={32} color="#ffffff" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsHero;
