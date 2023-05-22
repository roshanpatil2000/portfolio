import React from 'react'
import {FaBootstrap, FaFacebookF, FaGithub, FaGitlab, FaJava, FaLinkedinIn, FaPython, FaReact} from "react-icons/fa";

const Media = () => {
  return (
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
                Find me in
            </h2>
            <div className="flex gap-4">
            <span className="bannerIcon" title={"Facebook"}>
              <a href="https://www.facebook.com/profile.php?id=100010276354846" target={"_blank"} rel="noreferrer">
              <FaFacebookF/>
                </a>
            </span>
                <span className="bannerIcon" title={"Gitlab"}>
                            <a href="https://gitlab.com/roshanpatil2000" target={"_blank"} rel="noreferrer">

              <FaGitlab/>
                            </a>
            </span>
                <span className="bannerIcon" title={"Github"}>
                            <a href="https://github.com/roshanpatil2000" target={"_blank"} rel="noreferrer">

              <FaGithub/>
                            </a>
            </span>
                <span className="bannerIcon" title={"LinkedIn"}>
                            <a href="https://www.linkedin.com/in/roshan-patil-3b3671235" target={"_blank"}
                               rel="noreferrer">
              <FaLinkedinIn/>
                            </a>
            </span>
            </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon" title={"React"}>
              <FaReact />
            </span>
            <span className="bannerIcon" title={"Bootstrap"}>
              <FaBootstrap />
            </span>
            <span className="bannerIcon" title={"Python"}>
              <FaPython />
            </span>
            <span className="bannerIcon" title={"Java"}>
              <FaJava />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media