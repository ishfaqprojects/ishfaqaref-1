import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import About from "./About";
import Contact from "./Contact";
import Technologies from "./Technologies";
import Projects from "./Projects";

function Home() {
  const { name, tagline, img, company } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <>
      <main className="container mx-auto max-width md:flex justify-between items-center pt-[16px]">
        <div>
          <h1
            ref={h11}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            Hi, I am<br></br>
          </h1>
          <h1
            ref={h12}
            className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            {name}
          </h1>
          <h6
            className="text-lg text-dark-heading dark:text-light-heading  xl:leading-tight font-bold"
          >
            {tagline}
          </h6>

          <h6
            ref={h13}
            className="text-lg bg-clip-text bg-gradient text-dark-heading dark:text-light-heading  font-bold"
          >
            Company: {company}
          </h6>
        </div>
        <div className="mt-5 md:mt-0 border-rounded hidden md:block">
          <img
            ref={myimageref}
            className="w-1/3 md:ml-auto rounded rounded-lg"
            src={img}
            alt="profile"
          />
        </div>
      </main>
      <div className="container">
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default Home;
