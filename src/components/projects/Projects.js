import React from 'react'
import Title from '../layouts/Title'
import {mobile2, projectOne, projectThree, projectTwo} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
            title="MoviesFlix Website"
            des="
Movies Info React App is a sleek and user-friendly application for accessing comprehensive movie information. It offers effortless search functionality, detailed movie summaries, cast details, release dates, and ratings. With its intuitive interface"
            src={mobile2}
            link={"https://moviesflix.techbeas.co.in"}
            repo={"https://gitlab.com/roshanpatil2000/techbeas"}
        />
        <ProjectsCard
            title="TextUtils Website"
            des="Text Utils App is a powerful tool that simplifies text manipulation tasks. With its wide range of features, including formatting, character count, and word frequency analysis, it helps users efficiently handle various text operations."
            src={projectTwo}
            link={"https://textutils.techbeas.co.in"}
            repo={"https://gitlab.com/roshanpatil2000/textutils"}
        />
        <ProjectsCard
            title="Personal Portfolio App"
            des="The  Portfolio App is an impressive showcase of my skills, projects, and accomplishments. Through an aesthetically pleasing design and intuitive navigation, this platform provides visitors with a comprehensive overview of my expertise and capabilities."
            src={projectThree}
            link={"https://techbeas.co.in"}
            repo={"https://gitlab.com/roshanpatil2000/portfolio"}
        />

      </div>
    </section>
  );
}

export default Projects