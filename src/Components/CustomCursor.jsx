import React, { useEffect, useRef } from "react";
import "./Components.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailsRef = useRef([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trails = [];
    const numTrails = 12; // Number of trail particles

    // Create trail elements
    for (let i = 0; i < numTrails; i++) {
      const trail = document.createElement("div");
      trail.className = "cursor_trail";
      trail.style.opacity = (1 - i / numTrails) * 0.6;
      trail.style.transform = `scale(${1 - i / numTrails})`;
      document.body.appendChild(trail);
      trails.push({
        element: trail,
        x: 0,
        y: 0,
      });
    }
    trailsRef.current = trails;

    let mouseX = 0;
    let mouseY = 0;

    // Update mouse position
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Move main cursor immediately
      if (cursor) {
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
      }
    };

    // Animate trails with smooth following
    const animateTrails = () => {
      let prevX = mouseX;
      let prevY = mouseY;

      trails.forEach((trail, index) => {
        // Each trail follows the previous one with delay
        const speed = 0.35 - index * 0.02;
        trail.x += (prevX - trail.x) * speed;
        trail.y += (prevY - trail.y) * speed;

        trail.element.style.left = `${trail.x}px`;
        trail.element.style.top = `${trail.y}px`;

        prevX = trail.x;
        prevY = trail.y;
      });

      requestAnimationFrame(animateTrails);
    };

    // Handle cursor visibility on interactive elements
    const handleMouseEnter = () => {
      cursor?.classList.add("cursor_hover");
    };

    const handleMouseLeave = () => {
      cursor?.classList.remove("cursor_hover");
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, [role='button']"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Start animation
    animateTrails();

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      trails.forEach((trail) => {
        if (trail.element.parentNode) {
          trail.element.parentNode.removeChild(trail.element);
        }
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom_cursor" />;
};

export default CustomCursor;
