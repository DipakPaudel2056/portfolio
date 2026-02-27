import ProjectCard from "../ui/ProjectCard";
import "./projects.style.css";
const page = () => {
  return (
    <div className="main">
      <div className="projects">
        <ProjectCard
          projectId={1}
          projectName="WordToHtmlApp"
          projectDescription="My Habit of writing blogs in the word neede some automation, so i created this micro app."
          techUsed={["React", "Nextjs", "mammoth", "CSS", "html"]}
          timeTaken="2 hours"
          liveURL="https://wordtohtmlapp.vercel.app/"
          githubURL="https://github.com/DipakPaudel2056/wordtohtmlapp"
          thumbnailPic={
            "https://dipak-portfolio-asset.s3.ap-southeast-2.amazonaws.com/dipak_paudel_word_to_html.png"
          }
        />
        <ProjectCard
          projectId={2}
          projectName="Data cleaning with pandas"
          projectDescription="I cleaned the messy csv data using pandas."
          techUsed={["Python", "Pandas", "numpy"]}
          timeTaken="0.5 hour"
          liveURL="https://github.com/DipakPaudel2056/panda-notebook"
          githubURL="https://github.com/DipakPaudel2056/panda-notebook"
          thumbnailPic={
            "https://dipak-portfolio-asset.s3.ap-southeast-2.amazonaws.com/dipak_paudel_data_cleaning.png"
          }
        />
      </div>
    </div>
  );
};

export default page;
