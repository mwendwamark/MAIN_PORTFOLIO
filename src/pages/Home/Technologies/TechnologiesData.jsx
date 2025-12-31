import React from "react";
// HTML, CSS, JS, REACT, NEXTJS, GITHUB, GIT, GCP, AWS, RUBY, RUBY ON RAILS, PYTHON, STRAPI, FIGMA, POSTMAN, LINUX
import {
  FaGithub,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGitAlt,
  FaAws,
  FaFigma, FaLinux
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { FaNodeJs, FaPython } from "react-icons/fa";

const TechnologiesData = [
  {
    techName: "HTML",
    techIcon: <FaHtml5 />,
  },

  {
    techName: "CSS",
    techIcon: <FaCss3 />,
  },

  {
    techName: "JS",
    techIcon: <FaJs />,
  },

  {
    techName: "REACT",
    techIcon: <FaReact />,
  },

  {
    techName: "NEXTJS",
    techIcon: <SiNextdotjs />,
  },

  {
    techName: "GITHUB",
    techIcon: <FaGithub />,
  },

  {
    techName: "GIT",
    techIcon: <FaGitAlt />,
  },

  {
    techName: "GCP",
    techIcon: <FaAws />,
  },



//   {
//     techName: "RUBY",
//     techIcon: <FaRuby />,
//   },

//   {
//     techName: "RUBY ON RAILS",
//     techIcon: <FaRuby />,
//   },

  {
    techName: "PYTHON",
    techIcon: <FaPython />,
  },

  {
    techName: "TAILWIND",
    techIcon: <SiTailwindcss />,
  },

  {
    techName: "FIGMA",
    techIcon: <FaFigma />,
  },

  {
    techName: "POSTGRES",
    techIcon: <BiLogoPostgresql />,
  },

  {
    techName: "LINUX",
    techIcon: <FaLinux />,
  },
];

export default TechnologiesData;
