import React from "react";
import ProjectsHero from "./ProjectsHero/ProjectsHero";
import ProjectsDisplay from "./ProjectsDisplay/ProjectsDIsplay";
import ContactsForm from "../Contacts/ContactsForm/ContactsForm";

const ProjectsPage = () => {
  return (
    <div>
      <ProjectsHero />
      <ProjectsDisplay />
      <ContactsForm/>
    </div>
  );
};

export default ProjectsPage;
