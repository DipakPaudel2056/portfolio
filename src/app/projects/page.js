import ProjectCard from "../ui/projectCard";
const page = () => {
  return (
    <div className="main">
        <ProjectCard
          projectId={1}
          projectName="WordToHtmlApp"
          projectDescription="My Habit of writing blogs in the word neede some automation, so i created this micro app."
          techUsed={["React", "Nextjs", "mammoth", "CSS", "html"]}
          timeTaken="2 hours"
          liveURL="https://wordtohtmlapp.vercel.app/"
          githubURL="https://github.com/DipakPaudel2056/wordtohtmlapp"
        />
    </div>
  );
};

export default page;
