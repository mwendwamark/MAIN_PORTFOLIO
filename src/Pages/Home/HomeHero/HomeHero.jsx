import React, { useState, useRef, useEffect } from "react";
import "./HomeHero.css";
import SecondaryBtn from "../../../Components/SecondaryBtn";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter";

const HomeHero = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const gridRef = useRef(null);

  const handleMouseMove = (e) => {
    if (gridRef.current) {
      const rect = gridRef.current.getBoundingClientRect();
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const images = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
  ];

  const [revealedImages, setRevealedImages] = useState(
    new Array(images.length).fill(false)
  );

  const handleImageClick = (index) => {
    const newRevealed = [...revealedImages];
    newRevealed[index] = true;
    setRevealedImages(newRevealed);
  };

  return (
    <section className="home_hero_wrapper section">
      {/* Center Crosshair */}
      <div className="home_hero_plus_icon">
        <div className="plus_line_v"></div>
        <div className="plus_line_h"></div>
      </div>

      <div className="home_hero_grid">
        {/* Top Left: Name & Quote Block */}
        <div className="home_hero_cell home_hero_tl">
          <div className="home_hero_names">
            <h1 className="hero_name">
              MARK <br /> MWENDWA
            </h1>
            <div className="hero_quote_block">
              <i className="ri-double-quotes-l"></i>
            </div>
          </div>
        </div>

        {/* Top Right: Tagline */}
        <div className="home_hero_cell home_hero_tr">
          <div className="home_hero_content">
            <h2 className="hero_tagline">
              Every Detail Tells A <br /> Story Worth <br />
              <span className="highlight_text">
                <Typewriter
                  words={["Exploring", "Designer", "Developer"]}
                  loop
                  delaySpeed={1800}
                  deleteSpeed={1500}
                  typeSpeed={100}
                  cursor
                  cursorStyle=":)"
                />
              </span>
            </h2>
          </div>
        </div>

        {/* Bottom Left: Bio & Scroll */}
        <div className="home_hero_cell home_hero_bl">
          <div className="home_hero_content">
            <p className="hero_bio">
              I'm a Full Stack Developer, artist and storyteller. I believe in
              solving meaningful problems through elegant, creative solutions.
              My passion lies in the subtle intersection of art and technology.
            </p>
            <div className="scroll_indicator">
              <div className="scroll_line"></div>
              <span>SCROLL</span>
            </div>
          </div>
        </div>

        {/* Bottom Right: Image Grid */}
        <div
          className="home_hero_cell home_hero_br"
          ref={gridRef}
          onMouseMove={handleMouseMove}
          style={{
            "--cursor-x": `${cursorPos.x}px`,
            "--cursor-y": `${cursorPos.y}px`,
          }}
        >
          <div className="project_grid">
            {images.map((img, index) => (
              <div
                key={index}
                className={`project_img_wrapper ${
                  revealedImages[index] ? "revealed" : ""
                }`}
                onClick={() => handleImageClick(index)}
              >
                <img src={img} alt={`Project ${index + 1}`} />
                <div className="flashlight_overlay"></div>
                {/* Click to reveal hint */}
                {!revealedImages[index] && (
                  <div className="click_hint">
                    <i className="ri-cursor-line"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
