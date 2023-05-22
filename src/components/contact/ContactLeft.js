import React from 'react'
import {FaFacebookF, FaGithub, FaGitlab, FaLinkedinIn} from "react-icons/fa";
import {contactImg} from "../../assets/index";

const ContactLeft = () => {
    return (
        <div
            className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
            <img
                className="w-full h-64 object-cover rounded-lg mb-2"
                src={contactImg}
                alt="contactImg"
            />
            <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold text-white">Roshan Patil</h3>
                <p className="text-lg font-normal text-gray-400">
                    MERN Stack Developer
                </p>
                <p className="text-base text-gray-400 tracking-wide">
                    Mumbai, Maharashtra, India
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Phone: <span className="text-lightText">+91 9923138740</span>
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Email: <span className="text-lightText">roshanpatil2912.rp@gmail.com</span>
                </p>
      </div>
      <div className="flex flex-col gap-4">
          <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft