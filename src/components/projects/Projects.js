import React from 'react'
import Title from '../layouts/Title'
import {mobile2, projectThree, projectTwo} from "../../assets/index";
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
            des="Movies Info React App is a sleek and user-friendly application for accessing comprehensive movie information. It offers effortless search functionality, detailed movie summaries, cast details, release dates, and ratings. With its intuitive interface"
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
        <ProjectsCard
            title="Dashboard in MS Excel"
            des="Created an interactive Excel dashboard to visualize and analyze Client Income Type,Client’s Level of Education,Client’s Housing Type data, Client’s Family Status, Client’s Occupation Type Built the dashboard using Excel's built-in functions and tools, including pivot tables, charts, and conditional formatting."
            // src= {projectThree}
            link={"https://techbeas.co.in"}
            repo={"https://gitlab.com/roshanpatil2000/portfolio"}
        />
        <ProjectsCard
            title="Education trends Analysis"
            des="Visualized women in different STEM fields, trends in women graduating from computer science and engineering, the percentage of women in STEM jobs by education and field, a cross-tabulation of men and women in related fields of education, and a comparison of salaries by ethnicity"
            // src={projectThree}
            link={"https://techbeas.co.in"}
            repo={"https://gitlab.com/roshanpatil2000/portfolio"}
        />
        <ProjectsCard
            title="COVID-19 Vaccinations Trend Analysis "
            des="Tasks included creating a new schema, importing a .csv file, and utilizing SQL commands to analyze the data Analyzed user behavior and language and country demographics Gained insights into user behavior and preferences that could inform business decisions"
            // src={projectThree}
            link={"https://techbeas.co.in"}
            repo={"https://gitlab.com/roshanpatil2000/portfolio"}
        />
<ProjectsCard
            title=" C2C E-commerce Business Analysis"
            des="Data analysis  using MySQL for a C2C e-commerce business model Tasks included creating a new schema, importing a .csv file, and utilizing SQL commands to analyze the data Analyzed user behavior, product sales and buying patterns, and language and country demographics"
            // src={projectThree}
            link={"https://techbeas.co.in"}
            repo={"https://gitlab.com/roshanpatil2000/portfolio"}
        />
<ProjectsCard
            title="EDA on Vehicle Insurance"
            des="EDA (Exploratory Data Analysis) project on Vehicle Insurance Customer Data using Python libraries such as Pandas and Numpy. The objective of this project was to gain insights into customer behavior, demographics, and risk factors associated with vehicle insurance."
            // src={projectThree}
            link={"https://techbeas.co.in"}
            repo={"https://gitlab.com/roshanpatil2000/portfolio"}
        />

      </div>
    </section>
  );
}

export default Projects