import ProjectCard from "../ui/ProjectCard";
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
         <ProjectCard
          projectId={2}
          projectName="Data cleaning with pandas"
          projectDescription="I cleaned the messy csv dat using pandas."
          techUsed={["Python","Pandas","numpy"]}
          timeTaken="0.5 hour"
          liveURL="https://github.com/DipakPaudel2056/panda-notebook"
          githubURL="https://github.com/DipakPaudel2056/panda-notebook"
        />
    </div>
  );
};

export default page;
