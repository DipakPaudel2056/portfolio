import React from "react";
import ProjectCard from "../ui/projectCard";
const page = () => {
  return (
    <div className="main">
        <ProjectCard
          projectId={1}
          projectName="Human OS"
          projectDescription="Human OS is a comprehensive health and wellness platform that empowers individuals to take control of their well-being."
          techUsed={["React", "Node.js", "MongoDB", "Express"]}
          timeTaken="2 months"
          liveURL="https://github.com/dipakpaudel2056"
          githubURL="https://github.com/dipakpaudel2056"
        />
    </div>
  );
};

export default page;
