import React, { useState } from "react";
import "./HomeAbout.css";
import PreTitle from "../../../components/PreTitle/PreTitle";
import { Plus, Minus } from "@phosphor-icons/react";
import BackgroundShapesLeft from "../../../components/BackgroundShapes/BackgroundShapesLeft";

const aboutData = [
  {
    id: 1,
    title: "Handling Pressure",
    content:
      "If you can survive a Java CAT at JKUAT when your laptop decides to freeze mid-execution, you can handle anything. I’ve learned to keep a cool head under pressure—whether it's a looming project deadline or a sudden bug in production, I stay focused on the solution, not the panic.",
  },
  {
    id: 2,
    title: "Curiosity Turned Full-Stack",
    content:
      "I started out just wanting to know how the 'Buy' button actually works. That curiosity led me down a steep learning curve that I grew to love. Today, I don't just build websites; I build solutions for problems I’ve personally felt, turning 'what if' into functional code.",
  },
  {
    id: 3,
    title: "Translating Tech to English",
    content:
      "I like to say I’m a digital translator. I take complex business ideas and turn them into code that doesn't explode. Essentially, I make sure the front looks slick for your users while the backend stays organized and efficient—kind of like keeping a busy kitchen running smoothly while the dining room stays peaceful.",
  },
  {
    id: 4,
    title: "Beyond the Keyboard",
    content:
      "When I'm not debugging, I’m probably refueling my creativity through travel—it’s one of the biggest 'why' behind my work. You might also find me on a football pitch or hitting some calisthenics reps. I believe a strong body and a fresh perspective make for much better code.",
  },
];

const HomeAbout = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="home_about_section section" id="about">
      <BackgroundShapesLeft/>
      <div className="home_about_container container">
        {/* Left Side: Header */}
        <div className="home_about_left">
          <div className="home_about_header">
            <PreTitle preTitle={"Get to know me"} />
            <h2 className="home_about_title shared_header_title">
              Behind the screen
            </h2>
          </div>
        </div>

        {/* Right Side: Accordion */}
        <div className="home_about_right">
          <div className="home_about_accordion">
            {aboutData.map((item, index) => (
              <div
                key={item.id}
                className={`home_about_item ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="home_about_item_header">
                  <h3 className="home_about_item_title">{item.title}</h3>
                  <div className="home_about_icon_wrapper">
                    {activeIndex === index ? (
                      <Minus size={20} weight="bold" />
                    ) : (
                      <Plus size={20} weight="bold" />
                    )}
                  </div>
                </div>
                <div
                  className="home_about_item_content"
                  style={{
                    maxHeight: activeIndex === index ? "200px" : "0",
                  }}
                >
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
