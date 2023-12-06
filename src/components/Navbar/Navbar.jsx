import React, { useEffect, useState } from "react";

import { logo, menu, close } from "../../assets";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="sm:px-16 px-4 w-full flex items-center py-6 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <p className="text-white text-[18px] font-bold cursor-pointer">
              Raghav Taneja
            </p>
          </Link>
          <div className="flex flex-row gap-3 mt-3">
            <a target="_blank" href="https://www.linkedin.com/in/raghhavtaneja/">
              <BsLinkedin />
            </a>
            <a target="_blank" href="https://github.com/raghhavtaneja">
              <BsGithub />{" "}
            </a>
            <a target="_blank" href="mailto:raghhavtaneja@gmail.com">
              <FiMail />{" "}
            </a>
          </div>
        </div>

        <div className="hidden sm:flex flex-row gap-10">
          <Link activeClass="active" spy to="skills" className="cursor-pointer">
            Skills
          </Link>

          <Link
            activeClass="active"
            spy
            to="projects"
            className="cursor-pointer"
          >
            Projects
          </Link>

          <Link
            activeClass="active"
            spy
            to="experience"
            className="cursor-pointer"
          >
            Experience
          </Link>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          {toggle && (
            <div className="flex flex-col p-6 bg-blue-950 absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-md">
              <div className="flex flex-col justify-end items-start gap-4">
                <Link
                  to="/"
                  onClick={() => {
                    setActive("about");
                    setToggle(!toggle);
                    window.scrollTo(0, 0);
                  }}
                >
                  <p
                    className={`${
                      active === "about" ? "text-white" : "text-secondary"
                    } text-[16px] cursor-pointer hover:text-white`}
                  >
                    About
                  </p>
                </Link>
                <Link
                  to="skills"
                  onClick={() => {
                    setActive("skills");
                    setToggle(!toggle);
                  }}
                >
                  <p
                    className={`${
                      active === "skills" ? "text-white" : "text-secondary"
                    } text-[16px] cursor-pointer hover:text-white`}
                  >
                    Skills
                  </p>
                </Link>
                <Link
                  to="projects"
                  onClick={() => {
                    setActive("projects");
                    setToggle(!toggle);
                  }}
                >
                  <p
                    className={`${
                      active === "projects" ? "text-white" : "text-secondary"
                    } text-[16px] cursor-pointer hover:text-white`}
                  >
                    Projects
                  </p>
                </Link>
                <Link
                  to="experience"
                  onClick={() => {
                    setActive("experience");
                    setToggle(!toggle);
                  }}
                >
                  <p
                    className={`${
                      active === "experience" ? "text-white" : "text-secondary"
                    } text-[16px] cursor-pointer hover:text-white`}
                  >
                    Experience
                  </p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
