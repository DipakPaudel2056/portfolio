"use client";
import "./ProjectCard.css";
import Image from "next/image";
import projectImage from "../../../public/blogimage.jpg";
import {
  FaGit,
  FaGlobe
} from "react-icons/fa";
function ProjectCard({
  projectId,
  thumbnailPic,
  projectDescription,
  techUsed,
  timeTaken,
  projectName,
  githubURL,
  liveURL
}) {

  return (
    <div
      className="project-card"
    >
      <Image
        src={thumbnailPic ? thumbnailPic : projectImage}
        height={400}
        width={300}
        alt={`Project ${projectId}`}
        className="thumbnail"
      />

        <div className="card-overlay">
          <h3> {projectName}</h3>
          <p className="description">{projectDescription}</p>
          <p className="tech">
            <strong>Tech:</strong> {techUsed.join(", ")}
          </p>
          <p className="time">
            <strong>Time:</strong> {timeTaken}
          </p>
        <div className="links">
            {githubURL && (
                <a href={githubURL} target="_blank" rel="noopener noreferrer" title="GitHub">
                  <FaGit className="icon" />
                </a>
            )}
            {liveURL && (
                <a href={liveURL} target="_blank" rel="noopener noreferrer" title="Live Demo">
                    <FaGlobe className="icon" />
                </a>
            )}
        </div>
        </div>
    </div>
  );
}

export default ProjectCard